import { existsSync } from 'node:fs';
import { lstat, readdir, readFile, writeFile } from 'node:fs/promises';
import { compileFromFile } from 'json-schema-to-typescript';
import type { SchemaObject } from 'ajv/dist/2020.d.ts';
import { Ajv2020 } from 'ajv/dist/2020.js';
import standaloneCode from 'ajv/dist/standalone/index.js';
import hookPropertiesSchema from '../src/meta/hook-properties-schema.json' with { type: 'json' };
import type { HookPropertiesSchema } from '../src/meta/hook-properties-schema.d.ts';
import authorizeHookResultSchema from '../src/authorize-hook-result/authorize-hook-result.json' with { type: 'json' };
import contextDataSchema from '../src/context-data/context-data.json' with { type: 'json' };
import customFieldSchema from '../src/custom-field/custom-field.json' with { type: 'json' };
import hookRejectResultSchema from '../src/hook-reject-result/hook-reject-result.json' with { type: 'json' };
import baseRequestContextSchema from '../src/request-context/base-request-context.json' with { type: 'json' };
import richTextSchema from '../src/custom-field/rich-text.json' with { type: 'json' };

const ajvHookProperties = new Ajv2020();

ajvHookProperties.addSchema(hookPropertiesSchema);

const ajv = new Ajv2020({
  strict: true,
  removeAdditional: true,
  coerceTypes: false,
  allErrors: false,
  allowUnionTypes: true,
  code: {
    source: true,
    esm: true,
    optimize: 5,
  },
});

ajv.addSchema([
  authorizeHookResultSchema,
  baseRequestContextSchema,
  contextDataSchema,
  customFieldSchema,
  hookRejectResultSchema,
  richTextSchema,
]);

// The top-level schemas that should have a validation function generated.
const ajvGeneratedNameMapping: Record<string, string> = {
  validateContextData: contextDataSchema.$id,
  validateRichText: richTextSchema.$id,
};

const codegenExcludeFilePathPatterns = [/\/hooks\/[^/]+\/properties\.json$/];

// Recurse through the src directory and for each file generate a corresponding TypeScript file.
const generatorOptions = {
  additionalProperties: false,
  bannerComment:
    '// DO NOT EDIT. This file was generated. Instead, edit the corresponding JSON Schema file.',
  enableConstEnums: false,
  format: false,
  strictIndexSignatures: true,
};

// Read in the specified JSON Schema file, generate TypeScript, and output the new file next to the JSON file.
const codegenFileToTypeScript = async (filePath: string) => {
  const result = await compileFromFile(filePath, generatorOptions);
  const outFilePath = filePath.replace('.json', '.d.ts');
  await writeFile(outFilePath, result);
};

const codegenDirectoryToTypeScript = async (dirPath: string) => {
  const files = await readdir(dirPath);
  for (const file of files) {
    const filePath = `${dirPath}/${file}`;
    const stat = await lstat(filePath);
    if (stat.isFile() && filePath.endsWith('.json')) {
      if (!codegenExcludeFilePathPatterns.some((pattern) => pattern.test(filePath))) {
        await codegenFileToTypeScript(filePath);
      }
    } else if (stat.isDirectory()) {
      await codegenDirectoryToTypeScript(filePath);
    }
  }
};

const kebabToPascal = (kebab: string) =>
  kebab
    .split('-')
    .map((word) => (word ? (word[0] as string).toUpperCase() + word.slice(1) : ''))
    .join('');

const buildHookInput = (hookName: string, hasContext: boolean): SchemaObject => {
  const hookNamePascal = kebabToPascal(hookName);
  return {
    $schema: 'https://json-schema.org/draft/2020-12/schema',
    $id: `/hooks/${hookName}/input.json`,
    title: `${hookNamePascal}Input`,
    type: 'object',
    properties: {
      value: {
        $ref: './value.json',
      },
      ...(hasContext ? { context: { $ref: './context.json' } } : {}),
    },
    required: ['value', ...(hasContext ? ['context'] : [])],
  };
};

const buildHookResult = (
  hookName: string,
  properties: HookPropertiesSchema | undefined,
): SchemaObject => {
  const enableRejectResult = properties?.enableRejectResult ?? true;
  const hookNamePascal = kebabToPascal(hookName);
  const valueSchema: SchemaObject = {
    type: 'object',
    properties: {
      value: {
        $ref: './value.json',
      },
      stop: {
        description:
          'If true, this is the last handler that will be called for the hook, and the result value will be used as the final result.',
        type: ['boolean', 'null'],
      },
    },
    required: ['value'],
  };
  return {
    $schema: 'https://json-schema.org/draft/2020-12/schema',
    $id: `/hooks/${hookName}/result.json`,
    title: `${hookNamePascal}Result`,
    ...(enableRejectResult
      ? {
          oneOf: [valueSchema, { $ref: '../../hook-reject-result/hook-reject-result.json' }],
        }
      : valueSchema),
  };
};

const requireNonEmptyString = (value: unknown): string => {
  if (typeof value !== 'string') {
    throw new Error(`Expected a string, got ${value}`);
  }
  if (!value) {
    throw new Error('Expected a non-empty string');
  }
  return value;
};

const hooksDir = await readdir('src/hooks');

// It's important to check that we don't have any unrecognized files in any hook's directory so
// that we don't accidentally ignore a file that was not named correctly.
const possibleFileNamesInHookDirectory = [
  'context.d.ts',
  'context.json',
  'description.txt',
  // input.d.ts and input.json are always generated.
  'input.d.ts',
  'input.json',
  'properties.json',
  // result.d.ts and result.json are always generated.
  'result.d.ts',
  'result.json',
  'value.d.ts',
  'value.json',
];

const requiredFileNamesInHookDirectory = ['description.txt', 'value.json'];

const parseHookJsonSchema = async (
  filePath: string,
  hookName: string,
  file: 'context' | 'value',
): Promise<SchemaObject> => {
  const contents = await readFile(filePath, 'utf8');
  const schema: unknown = JSON.parse(contents);
  const expectedId = `/hooks/${hookName}/${file}.json`;
  if ((schema as { $id?: unknown } | null)?.$id !== expectedId) {
    console.error(`The $id in the ${hookName} hook's ${expectedId} file must be "${expectedId}`);
    process.exit(1);
  }
  const expectedTitle = `${kebabToPascal(hookName)}${kebabToPascal(file)}`;
  if ((schema as { title?: unknown } | null)?.title !== expectedTitle) {
    console.error(
      `The title in the ${hookName} hook's ${expectedId} file must be "${expectedTitle}`,
    );
    process.exit(1);
  }
  return schema as SchemaObject;
};

const validateFileImports = [
  `import type { ContextData } from './context-data/context-data.js';`,
  `import type { CustomField } from './custom-field/custom-field.js';`,
  `import type { RichText } from './custom-field/rich-text.js';`,
];

for (const hookName of hooksDir) {
  const hookDirPath = `src/hooks/${hookName}`;
  const stat = await lstat(hookDirPath);
  if (stat.isDirectory()) {
    for (const requiredFileName of requiredFileNamesInHookDirectory) {
      const requiredFilePath = `src/hooks/${hookName}/${requiredFileName}`;
      if (!existsSync(requiredFilePath)) {
        console.error(`Missing a required ${requiredFileName} file for hook ${hookName}`);
        process.exit(1);
      }
    }

    let hasContext: boolean = false;
    let properties: HookPropertiesSchema | undefined = undefined;

    for (const fileName of await readdir(hookDirPath)) {
      if (!possibleFileNamesInHookDirectory.includes(fileName)) {
        console.error(`Unexpected file in the ${hookName} hook's directory: ${fileName}`);
        process.exit(1);
      }
      const filePath = `${hookDirPath}/${fileName}`;
      const fileStat = await lstat(filePath);
      if (!fileStat.isFile()) {
        console.error(`The ${fileName} file for the ${hookName} hook must be a regular file`);
        process.exit(1);
      }
      switch (fileName) {
        case 'context.json': {
          hasContext = true;
          const schema = await parseHookJsonSchema(filePath, hookName, 'context');
          ajv.addSchema(schema);
          break;
        }
        case 'value.json': {
          const schema = await parseHookJsonSchema(filePath, hookName, 'value');
          ajv.addSchema(schema);
          break;
        }
        case 'properties.json': {
          const parsedProperties: unknown = JSON.parse(await readFile(filePath, 'utf8'));
          if (
            !ajvHookProperties.validate<HookPropertiesSchema>(
              hookPropertiesSchema,
              parsedProperties,
            )
          ) {
            console.error(
              `The properties.json file for the ${hookName} hook is invalid: ${ajv.errorsText()}`,
            );
            process.exit(1);
          }
          properties = parsedProperties;
        }
      }
    }

    validateFileImports.push(
      `import type { ${kebabToPascal(hookName)}Input } from './hooks/${hookName}/input.js';`,
      `import type { ${kebabToPascal(hookName)}Result } from './hooks/${hookName}/result.js';`,
    );

    const inputSchema = buildHookInput(hookName, hasContext);
    ajv.addSchema(inputSchema);
    ajvGeneratedNameMapping[`validate${requireNonEmptyString(inputSchema.title)}`] =
      requireNonEmptyString(inputSchema.$id);
    await writeFile(`${hookDirPath}/input.json`, JSON.stringify(inputSchema));

    const resultSchema = buildHookResult(hookName, properties);
    ajv.addSchema(resultSchema);
    ajvGeneratedNameMapping[`validate${requireNonEmptyString(resultSchema.title)}`] =
      requireNonEmptyString(resultSchema.$id);
    await writeFile(`${hookDirPath}/result.json`, JSON.stringify(resultSchema));
  } else {
    console.error(`Unexpected file in the hooks directory: ${hookDirPath}`);
    process.exit(1);
  }
}

await writeFile('src/validate.js', (standaloneCode as any)(ajv, ajvGeneratedNameMapping));

const validateTypings = Object.keys(ajvGeneratedNameMapping).map((name) => {
  const typeName = name.slice('validate'.length);
  return `export declare const ${name}: {
    (value: unknown): value is ${typeName};
    errors?: SchemaValidationError[] | null;
  };`;
});

await writeFile(
  'src/validate.d.ts',
  `${validateFileImports.join('\n')}

export type SchemaValidationError = {
  keyword: string;
  instancePath: string;
  schemaPath: string;
  params: Record<string, unknown>;
  message?: string;
};

${validateTypings.join('\n')}
`,
);

await codegenDirectoryToTypeScript('src');

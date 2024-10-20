import { existsSync } from 'node:fs';
import { lstat, readdir, readFile, writeFile } from 'node:fs/promises';
import { compileFromFile } from 'json-schema-to-typescript';
import type { SchemaObject } from 'ajv/dist/2020.d.ts';
import { Ajv2020 } from 'ajv/dist/2020.js';
import hookPropertiesSchema from '../src/meta/hook-properties-schema.json' with { type: 'json' };
import type { HookPropertiesSchema } from '../src/meta/hook-properties-schema.d.ts';

const ajv = new Ajv2020();

ajv.addSchema([hookPropertiesSchema]);

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

const buildHookResult = (
  hookName: string,
  properties: HookPropertiesSchema | undefined,
): SchemaObject => {
  const enableRejectResult = properties?.enableRejectResult ?? false;
  const hookNamePascal = kebabToPascal(hookName);
  return {
    $schema: 'https://json-schema.org/draft/2020-12/schema',
    $id: `/hooks/${hookName}/result.json`,
    title: `${hookNamePascal}Result`,
    oneOf: [
      {
        title: `${hookNamePascal}Result`,
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
      },
      ...(enableRejectResult
        ? [
            {
              $ref: '../../hook-reject-result/hook-reject-result.json',
            },
          ]
        : []),
    ],
  };
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

const requiredFileNamesInHookDirectory = ['description.txt'];

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
    // Must have a context.json or value.json file, or both.
    if (
      !existsSync(`src/hooks/${hookName}/context.json`) &&
      !existsSync(`src/hooks/${hookName}/value.json`)
    ) {
      console.error(`The ${hookName} hook must have a context.json or value.json file, or both`);
      process.exit(1);
    }

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
        case 'context.json':
          await parseHookJsonSchema(filePath, hookName, 'context');
          break;
        case 'value.json':
          await parseHookJsonSchema(filePath, hookName, 'value');
          break;
        case 'properties.json': {
          const parsedProperties: unknown = JSON.parse(await readFile(filePath, 'utf8'));
          if (!ajv.validate<HookPropertiesSchema>(hookPropertiesSchema, parsedProperties)) {
            console.error(
              `The properties.json file for the ${hookName} hook is invalid: ${ajv.errorsText()}`,
            );
            process.exit(1);
          }
          properties = parsedProperties;
        }
      }
    }

    await writeFile(
      `${hookDirPath}/result.json`,
      JSON.stringify(buildHookResult(hookName, properties)),
    );
  } else {
    console.error(`Unexpected file in the hooks directory: ${hookDirPath}`);
    process.exit(1);
  }
}

await codegenDirectoryToTypeScript('src');

import { existsSync } from 'node:fs';
import { lstat, readdir, readFile, writeFile } from 'node:fs/promises';
import { compileFromFile } from 'json-schema-to-typescript';

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
      await codegenFileToTypeScript(filePath);
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
  continueValueSchema: object,
  stopValueSchema: object,
) => {
  const hookNamePascal = kebabToPascal(hookName);
  return {
    $schema: 'https://json-schema.org/draft/2020-12/schema',
    $id: `/hooks/${hookName}/hook-result.json`,
    title: `${hookNamePascal}HookResult`,
    oneOf: [
      {
        type: 'object',
        title: `${hookNamePascal}HookResultContinue`,
        properties: {
          continue: continueValueSchema,
        },
        required: ['continue'],
      },
      {
        type: 'object',
        title: `${hookNamePascal}HookResultStop`,
        properties: {
          stop: stopValueSchema,
        },
        required: ['stop'],
      },
    ],
  };
};

const hooksDir = await readdir('src/hooks');

// It's important to check that we don't have any unrecognized files in any hook's directory so
// that we don't accidentally ignore a file that was not named correctly.
const possibleFileNamesInHookDirectory = [
  'description.txt',
  'hook-result.d.ts',
  'hook-result.json',
  'stop-value.d.ts',
  'stop-value.json',
  'value.d.ts',
  'value.json',
];

const requiredFileNamesInHookDirectory = ['value.json'];

for (const hookName of hooksDir) {
  const filePath = `src/hooks/${hookName}`;
  const stat = await lstat(filePath);
  if (stat.isDirectory()) {
    for (const requiredFileName of requiredFileNamesInHookDirectory) {
      const requiredFilePath = `src/hooks/${hookName}/${requiredFileName}`;
      if (!existsSync(requiredFilePath)) {
        console.error(`Missing a required ${requiredFileName} file for hook ${hookName}`);
        process.exit(1);
      }
    }
    const filesInHookDirectory = await readdir(filePath);
    for (const fileInHookDirectory of filesInHookDirectory) {
      if (!possibleFileNamesInHookDirectory.includes(fileInHookDirectory)) {
        console.error(
          `Unexpected file in the ${hookName} hook's directory: ${fileInHookDirectory}`,
        );
        process.exit(1);
      }
    }

    const valueSchemaFilePath = `src/hooks/${hookName}/value.json`;
    const valueFileStat = await lstat(valueSchemaFilePath);
    if (!valueFileStat.isFile()) {
      console.error(`The value.json file for the ${hookName} hook must be a regular file`);
      process.exit(1);
    }

    const valueSchema = JSON.parse(await readFile(valueSchemaFilePath, 'utf8'));
    if (valueSchema.$id !== `/hooks/${hookName}/value.json`) {
      console.error(
        `The $id in the value.json file for the ${hookName} hook must be "/hooks/${hookName}/value.json"`,
      );
      process.exit(1);
    }

    const continueValueSchemaRef = {
      $ref: './value.json',
    };
    let stopValueSchemaRef;
    const stopValueSchemaFilePath = `src/hooks/${hookName}/stop-value.json`;
    if (existsSync(stopValueSchemaFilePath)) {
      const stopValueFileStat = await lstat(stopValueSchemaFilePath);
      if (!stopValueFileStat.isFile()) {
        console.error(`The stop-value.json file for the ${hookName} hook must be a regular file`);
        process.exit(1);
      }
      const stopValueSchema = JSON.parse(await readFile(stopValueSchemaFilePath, 'utf8'));
      if (stopValueSchema.$id !== `/hooks/${hookName}/stop-value.json`) {
        console.error(
          `The $id in the stop-value.json file for the ${hookName} hook must be "/hooks/${hookName}/stop-value.json"`,
        );
        process.exit(1);
      }
      stopValueSchemaRef = {
        $ref: './stop-value.json',
      };
    } else {
      stopValueSchemaRef = continueValueSchemaRef;
    }

    const hookResultSchema = buildHookResult(hookName, continueValueSchemaRef, stopValueSchemaRef);
    await writeFile(`src/hooks/${hookName}/hook-result.json`, JSON.stringify(hookResultSchema));
  } else {
    console.error(`Unexpected file in the hooks directory: ${filePath}`);
    process.exit(1);
  }
}

await codegenDirectoryToTypeScript('src');

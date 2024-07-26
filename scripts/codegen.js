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
const codegenFileToTypeScript = async (filePath) => {
  const result = await compileFromFile(filePath, generatorOptions);
  const outFilePath = filePath.replace('.json', '.d.ts');
  await writeFile(outFilePath, result);
};

const codegenDirectoryToTypeScript = async (dirPath) => {
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

const kebabToPascal = (kebab) =>
  kebab
    .split('-')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join('');

const buildHookResult = (hookName, valueSchema, stopActionSchema) => {
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
          continue: {
            type: 'boolean',
            const: true,
          },
          value:
            typeof valueSchema === 'boolean'
              ? valueSchema
              : {
                  $ref: './value.json',
                },
        },
        required: ['continue', 'value'],
      },
      {
        type: 'object',
        title: `${hookNamePascal}HookResultStop`,
        properties: {
          continue: {
            type: 'boolean',
            const: false,
          },
          value:
            typeof valueSchema === 'boolean'
              ? valueSchema
              : {
                  $ref: './value.json',
                },
          stopAction:
            typeof stopActionSchema === 'boolean'
              ? stopActionSchema
              : {
                  $ref: './stop-action.json',
                },
        },
        required: ['continue', 'stopAction'],
      },
    ],
  };
};

const hooksDir = await readdir('src/hooks');

for (const file of hooksDir) {
  const filePath = `src/hooks/${file}`;
  const stat = await lstat(filePath);
  if (stat.isDirectory()) {
    const valueSchemaFilePath = `src/hooks/${file}/value.json`;
    if (!existsSync(valueSchemaFilePath)) {
      throw new Error(`Missing a value.json file for hook ${file}`);
    }
    const valueFileStat = await lstat(valueSchemaFilePath);
    if (!valueFileStat.isFile()) {
      throw new Error(`The value.json file for hook ${file} must be a regular file`);
    }
    const valueSchema = JSON.parse(await readFile(valueSchemaFilePath, 'utf8'));
    const stopActionSchemaFilePath = `src/hooks/${file}/stop-action.json`;
    if (!existsSync(stopActionSchemaFilePath)) {
      throw new Error(`Missing a stop-action.json file for hook ${file}`);
    }
    const stopActionFileStat = await lstat(stopActionSchemaFilePath);
    if (!stopActionFileStat.isFile()) {
      throw new Error(`The stop-action.json file for hook ${file} must be a regular file`);
    }
    const stopActionSchema = JSON.parse(await readFile(stopActionSchemaFilePath, 'utf8'));
    const hookResultSchema = buildHookResult(file, valueSchema, stopActionSchema);
    await writeFile(`src/hooks/${file}/hook-result.json`, JSON.stringify(hookResultSchema));
  } else {
    console.error(`Unexpected file in the hooks directory: ${filePath}`);
  }
}

await codegenDirectoryToTypeScript('src');

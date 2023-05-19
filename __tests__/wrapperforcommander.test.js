import { test, expect, describe } from '@jest/globals';
import * as fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'path';

import compareFiles from '../src/wrapperforcommander.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const data1 = getFixturePath('file3.yml');
const data2 = getFixturePath('file4.yml');
const data3 = getFixturePath('file1.json');
const data4 = getFixturePath('file2.json');

describe.each([
  [data1, data2, 'plain', 'rightPlain.txt'],
  [data1, data2, 'json', 'rightJson.json'],
  [data1, data2, undefined, 'rightStylish.txt'],
  [data3, data4, 'stylish', 'rightStylish.txt'],
])('test for compare different files', (filedata1, filedata2, format, expected) => {
  test(`returns ${expected}`, () => {
    expect(compareFiles(filedata1, filedata2, format)).toBe(
      fs.readFileSync(getFixturePath(expected), 'utf-8'),
    );
  });
});

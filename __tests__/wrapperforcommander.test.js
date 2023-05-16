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
/** **some comment1 */

describe.each([
  {
    a: data1,
    b: data2,
    expected: 'rightStylish.txt',
    format: 'stylish',
  },
  {
    a: data1,
    b: data2,
    expected: 'rightPlain.txt',
    format: 'plain',
  },
  {
    a: data1,
    b: data2,
    expected: 'rightJson.txt',
    format: 'json',
  },
  {
    a: data3,
    b: data4,
    expected: 'rightStylish.txt',
  },
  {
    a: data3,
    b: data4,
    expected: 'rightStylish.txt',
    format: 'stylish',
  },
  {
    a: data3,
    b: data4,
    expected: 'rightPlain.txt',
    format: 'plain',
  },
  {
    a: data3,
    b: data4,
    expected: 'rightJson.txt',
    format: 'json',
  },
  {
    a: data3,
    b: data4,
    expected: 'rightStylish.txt',
  },
])('.add($a, $b)', ({
  a, b, expected, format,
}) => {
  test(`mytest ${expected}`, () => {
    expect(compareFiles(a, b, format)).toBe(fs.readFileSync(getFixturePath(expected), 'utf8'));
  });
});

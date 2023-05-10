import { test, expect, describe } from '@jest/globals';
import * as fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'path';

import wrapperforcommander from '../bin/wrapperforcommander.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const data1 = getFixturePath('file3.yml');
const data2 = getFixturePath('file4.yml');

/** **some comment1 */
const rightAnswer1 = fs.readFileSync(getFixturePath('rightStylish.txt'), 'utf8');
const rightAnswer2 = fs.readFileSync(getFixturePath('rightPlain.txt'), 'utf8');
const rightAnswer3 = fs.readFileSync(getFixturePath('rightJson.txt'), 'utf8');

describe.each([
  {
    a: data1,
    b: data2,
    expected: rightAnswer1,
    format: 'stylish',
  },
  {
    a: data1,
    b: data2,
    expected: rightAnswer2,
    format: 'plain',
  },
  {
    a: data1,
    b: data2,
    expected: rightAnswer3,
    format: 'json',
  },
])('.add($a, $b)', ({
  a, b, expected, format,
}) => {
  test('mytest', () => {
    expect(wrapperforcommander(a, b, format)).toBe(expected);
  });
});

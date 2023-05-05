import { test, expect } from '@jest/globals';
import * as fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'path';

import wrapperforcommander from '../bin/wrapperforcommander.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const data1 = getFixturePath('file1.yml');
const data2 = getFixturePath('file2.yml');

/** **some comment1 */

// const rightAnswer1 = fs.readFileSync(getFixturePath('rightStylish.txt'), 'utf8');
const rightAnswer2 = fs.readFileSync(getFixturePath('result_plain.txt'), 'utf8');
// const rightAnswer3 = fs.readFileSync(getFixturePath('rightJson.txt'), 'utf8');

// test('test forWrapper1', () => {
//   expect(wrapperforcommander(data1, data2, 'stylish')).toBe(rightAnswer1);
// });

test('testPlain', () => {
  expect(wrapperforcommander(data1, data2, 'plain')).toBe(rightAnswer2);
});

// test('test forWrapper3', () => {
//   expect(wrapperforcommander(data1, data2, 'json')).toBe(rightAnswer3);
// });

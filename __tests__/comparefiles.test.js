import { test, expect } from '@jest/globals';
import * as fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'path';

import comparefiles from '../bin/comparefiles.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const data1 = getFixturePath('file1.json');
const data2 = getFixturePath('file2.json');

const data3 = getFixturePath('file1.yml');
const data4 = getFixturePath('file2.yml');
/** **some comment */

const rightAnswer = fs.readFileSync(getFixturePath('right.txt'), 'utf8');

test('testComparefiles', () => {
  expect(comparefiles(data1, data2)).toBe(rightAnswer);
  expect(comparefiles(data3, data4)).toBe(rightAnswer);
});

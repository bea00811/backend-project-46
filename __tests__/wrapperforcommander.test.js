import { test, expect } from '@jest/globals';
import * as fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'path';

import wrapperforcommander from '../bin/wrapperforcommander.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const data1 = getFixturePath('file1.json');
const data2 = getFixturePath('file2.json');

/** **some comment1 */

const rightAnswer1 = fs.readFileSync(getFixturePath('right.txt'), 'utf8');

test('test forWrapper', () => {
  expect(wrapperforcommander(data1, data2, 'stylish')).toBe(rightAnswer1);
});

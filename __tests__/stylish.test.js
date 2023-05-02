import { test, expect } from '@jest/globals';
import * as fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'path';

import stylish from '../bin/stylish.js';
import getRightTree from '../bin/comparefilesdeep.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const data1 = getFixturePath('file3.json');
const data2 = getFixturePath('file4.json');

/** **some comment1 */

const rightAnswer1 = fs.readFileSync(getFixturePath('rightStylish.txt'), 'utf8');

test('test forStylish', () => {
  expect(stylish(getRightTree(data1, data2))).toBe(rightAnswer1);
});

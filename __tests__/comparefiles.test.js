import { test, expect } from '@jest/globals';
import * as fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'path';

import comparefiles from '../bin/comparefiles.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const data1 = fs.readFileSync(getFixturePath('file1.json'), 'utf8');
const data2 = fs.readFileSync(getFixturePath('file2.json'), 'utf8');

const rightAnswer = {
  '- follow': 'false',
  '  host': 'hexlet.io',
  '- proxy': '123.234.53.22',
  '- timeout': '50',
  '+ timeout': '20',
  '+ verbose': 'true',
};

test('comparefiles', () => {
  expect(comparefiles(data1, data2)).toBe(rightAnswer);
});

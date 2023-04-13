#!/usr/bin/env node
import * as fs from 'fs';

const data1 = fs.readFileSync('/file1.json', { encoding: 'utf8' });
// const data2 = await fs.readFile('/../fixtures/file2.json', { encoding: 'utf8' });

console.log(data1);
// console.log(data2);

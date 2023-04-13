#!/usr/bin/env node
import * as fs from 'fs';
import { program } from 'commander';
import compareFiles from './comparefiles.js';
// const command = (names) => {
//   for (const name of names) {
//     console.log(`Hello, ${name}!`);
//   }
// };

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .option('-f, --format <type> ', 'output format')
  .argument('filepath1')
  .argument('filepath2')
  .action((filepath1, filepath2) => {
    const data1 = fs.readFileSync(filepath1, { encoding: 'utf8' });
    const data2 = fs.readFileSync(filepath2, { encoding: 'utf8' });
    console.log(data1);
    console.log(typeof data2);
    compareFiles(data1, data2);
  })
  .parse(process.argv);

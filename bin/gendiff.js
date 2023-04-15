#!/usr/bin/env node

import { program } from 'commander';
import compareFiles from './comparefiles.js';

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .option('-f, --format <type> ', 'output format')
  .argument('filepath1')
  .argument('filepath2')
  .action((filepath1, filepath2) => {
    // console.log(filepath1.split('.')[1]);
    // console.log(filepath2.split('.')[1]);
    // console.log(getFileFormat(data1));
    // console.log(getFileFormat(data2));
    compareFiles(filepath1, filepath2);
  })
  .parse(process.argv);

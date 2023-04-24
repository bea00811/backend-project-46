#!/usr/bin/env node

import { program } from 'commander';
import compareFiles from './comparefiles.js';
import getparsedData from './getparsedData.js';
import compareFilesDeep from './comparefilesdeep.js';

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
    // compareFiles(filepath1, filepath2);
    const data1 = getparsedData(filepath1);
    const data2 = getparsedData(filepath2);

    compareFilesDeep(data1, data2);
  })
  .parse(process.argv);

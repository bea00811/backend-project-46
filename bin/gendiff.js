#!/usr/bin/env node

import { program } from 'commander';


import wrapperforcommander from './wrapperforcommander.js';

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .option('-f, --format <type>', 'add the specified type of cheese', 'stylish')
  // .option('-l, --lower', 'only use lowercase letters')
  // .option('-u, --upper', 'only use uppercase letters')
  // .option('-f, --format [type]', 'output format')
  // .option('-s, --stylish', 'only use stylish format')
  // .option('-u, --plain', 'only use plain format')

  .argument('filepath1')
  .argument('filepath2')
  .action((filepath1, filepath2) => {
    // console.log(filepath1.split('.')[1]);
    // console.log(filepath2.split('.')[1]);
    // console.log(getFileFormat(data1));
    // console.log(getFileFormat(data2));
    // compareFiles(filepath1, filepath2);
  

    // const options = program.opts();
    // const { stylish, plain } = options;

    console.log(wrapperforcommander(filepath1, filepath2, program.opts().format));
    // console.log(program.opts());
    // console.log(formatter(getRightTree(data1, data2, program.opts().format)));
    // console.log(`cheese: ${program.opts().format}`);
  })
  .parse(process.argv);

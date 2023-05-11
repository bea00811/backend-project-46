#!/usr/bin/env node

import { program } from 'commander';

import wrapperforcommander from '../src/wrapperforcommander.js';

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .option('-f, --format <type>', 'choose the format of diffs', 'stylish')

  .argument('filepath1')
  .argument('filepath2')
  .action((filepath1, filepath2) => {
    console.log(wrapperforcommander(filepath1, filepath2, program.opts().format));

    // console.log(formatter(getRightTree(data1, data2, program.opts().format)));
    // console.log(`cheese: ${program.opts().format}`);
  })
  .parse(process.argv);

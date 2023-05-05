#!/usr/bin/env node

import { program } from 'commander';

import wrapperforcommander from './wrapperforcommander.js';

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-V, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'choose the format of diffs', 'stylish')

  .argument('filepath1')
  .argument('filepath2')
  .action((filepath1, filepath2) => {
    console.log(wrapperforcommander(filepath1, filepath2, program.opts().format));
  })
  .parse();

#!/usr/bin/env node
 
import {program } from 'commander';
 
 
program
 .description(`Compares two configuration files and shows a difference`)
  .version('0.8.0')
 .helpOption('-h, --help', 'output usage information')
 .option('-f, --format <type>', 'output format')
   .argument('<filepath1>',  'type here filepath1')
 .argument('<filepath2>',  'type here filepath2')
 .action(() => {
   console.log('я исполняемый файл')
  
  
   })
 .parse();
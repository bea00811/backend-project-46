#!/usr/bin/env node
import stylish from './stylish.js';
import getRightTree from './comparefilesdeep.js';

const wrapperforcommander = (data1, data2, formatoption) => {
  if (formatoption === 'stylish') {
    return stylish(getRightTree(data1, data2));
  }
  if (formatoption === 'plain') {
    return 'its plain';
  }
  return 'its nothng';
};
// console.log(stylish (getRightTree(data1, data2, options.type)));
export default wrapperforcommander;

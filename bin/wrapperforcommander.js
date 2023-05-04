#!/usr/bin/env node
import stylish from './stylish.js';
import getRightTree from './comparefilesdeep.js';
import getparsedData from './getparsedData.js';

const wrapperforcommander = (filepath1, filepath2, formatoption) => {
  const data1 = getparsedData(filepath1);
  const data2 = getparsedData(filepath2);

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

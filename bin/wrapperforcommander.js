#!/usr/bin/env node
import stylish from '../formatters/stylish.js';
import plain from '../formatters/plain.js';
import json from '../formatters/json.js';
import getRightTree from './comparefilesdeep.js';
import getparsedData from '../parsers/getparsedData.js';

const wrapperforcommander = (filepath1, filepath2, formatoption) => {
  const data1 = getparsedData(filepath1);
  const data2 = getparsedData(filepath2);

  if (formatoption === 'plain') {
    return plain(getRightTree(data1, data2));
  }
  if (formatoption === 'json') {
    return json(getRightTree(data1, data2));
  }
  return stylish(getRightTree(data1, data2));
};

export default wrapperforcommander;

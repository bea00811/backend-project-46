#!/usr/bin/env node
import _ from 'lodash';
import * as fs from 'fs';
import parser from './parser.js';

console.log('Hello.I am here to show that file executes:)');

const compareFilesDeep = (data1, data2) => {
  const makeNodes = (key, value, type, children) => ({
    key,
    value,
    type,
    children,
  });

  const arrayOfKeysBothFiles = _.union(Object.keys(data1), Object.keys(data2));
  const result = [];
  arrayOfKeysBothFiles.map((item) => {
    if (_.isPlainObject(_.get(data1, item)) && _.isPlainObject(_.get(data2, item))) {
      const valueData1 = _.get(data1, item);
      const valueData2 = _.get(data2, item);
      result.push(makeNodes(item, 'value', 'nested', compareFilesDeep(valueData1, valueData2)));
    }

    if (_.get(data1, item) === _.get(data2, item)) {
      result.push(makeNodes(item, data1[item], 'unchanged2', []));
    }

    if (
      typeof _.get(data1, item) !== 'object'
      && typeof _.get(data2, item) !== 'object'
      && _.has(data1, item)
      && _.has(data2, item)
      && _.get(data1, item) !== _.get(data2, item)
    ) {
      result.push(makeNodes(item, data1[item], 'changed', []));
    }
    if (!_.has(data1, item)) {
      result.push(makeNodes(item, data2[item], 'added', []));
    }
    if (!_.has(data2, item)) {
      result.push(makeNodes(item, data1[item], 'removed', []));
    }
  });

  console.log(result);
  return result;
};

export default compareFilesDeep;

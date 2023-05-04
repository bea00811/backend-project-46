#!/usr/bin/env node

import _ from 'lodash';

const makeString = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

const plain = (tree) => {
  const cb = (node, result = '', path = '') => {
    const {
      key, oldvalue, type, newValue, children,
    } = node;
    const nodeName = `${path}${key}`.slice(1);
    const oldValueString = makeString(oldvalue);
    const newValueString = makeString(newValue);
    switch (type) {
      case 'root':
        return children.map((item) => cb(item, result, `${path}${key}.`)).join('\n');
      case 'nested':
        return children.flatMap((item) => cb(item, result, `${path}${key}.`)).join('\n');
      case 'added':
        return `${result}Property '${nodeName}' was added with value: ${oldValueString}`;
      case 'removed':
        return `${result}Property '${nodeName}' was removed`;
      case 'changed':
        return `${result}Property '${nodeName}' was updated. From ${oldValueString} to ${newValueString}`;
      default:
        return [];
    }
  };
  return cb(tree);
};

export default plain;

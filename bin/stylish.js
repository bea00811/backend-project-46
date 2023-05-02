#!/usr/bin/env node
import _ from 'lodash';

const spaceToLeft = 2;
const spaceForOneLevel = 4;

const makeSpaceForValues = (value, replacer = ' ', spaceCount = 1) => {
  if (!_.isObject(value)) {
    return String(value);
  }
  const iter = (currentValue, replaceInner, depth) => {
    const entries = Object.entries(currentValue);
    return entries.reduce((acc, [key, val]) => {
      const newAcc = typeof val !== 'object'
        ? `${replaceInner.repeat(depth)}${key}: ${val}\n`
        : `${replaceInner.repeat(depth)}${key}: ${iter(
          val,
          replaceInner,
          depth + spaceForOneLevel,
        )}${replaceInner.repeat(depth)}}\n`;
      return acc + newAcc;
    }, '{\n');
  };
  return `${iter(value, replacer, spaceCount)}${' '.repeat(spaceCount - spaceForOneLevel)}}`;
};

const makeLine = (item, depth) => {
  if (item.type === 'nested') {
    return `${' '.repeat(spaceForOneLevel * (depth - 1) + spaceToLeft)}  ${item.key}: {\n`;
  }
  return '';
};

const formatter = (tree) => {
  const iter = (currentTree, replacer = '', depth = 0) => {
    const {
      key, oldvalue, type, newValue, children,
    } = currentTree;
    const oldValueString = makeSpaceForValues(oldvalue, ' ', (depth + 1) * spaceForOneLevel);
    const newValueString = makeSpaceForValues(newValue, ' ', (depth + 1) * spaceForOneLevel);

    if (type === 'root') {
      return `{\n${replacer}${children
        .map((item) => iter(item, makeLine(item, depth + 1), depth + 1)).join('\n')}\n${' '.repeat(spaceForOneLevel * depth * spaceForOneLevel)}}`;
    }
    if (type === 'nested') {
      return `${replacer}${children
        .map((item) => iter(item, makeLine(item, depth + 1), depth + 1))
        .join('\n')}\n${' '.repeat(spaceToLeft * depth * spaceToLeft)}}`;
    }

    if (type === 'changed') {
      return `${replacer}${' '.repeat(
        spaceForOneLevel * (depth - 1) + spaceToLeft,
      )}- ${key}: ${oldValueString}\n${' '.repeat(
        spaceForOneLevel * (depth - 1) + spaceToLeft,
      )}+ ${key}: ${newValueString}`;
    }

    if (type === 'added') {
      return `${replacer}${' '.repeat(
        spaceForOneLevel * (depth - 1) + spaceToLeft,
      )}+ ${key}: ${oldValueString}`;
    }

    if (type === 'removed') {
      return `${replacer}${' '.repeat(
        spaceForOneLevel * (depth - 1) + spaceToLeft,
      )}- ${key}: ${oldValueString}`;
    }

    return `${replacer}${' '.repeat(
      spaceForOneLevel * (depth - 1) + spaceToLeft,
    )}- ${key}: ${oldValueString}`;
  };

  return iter(tree);
};

export default formatter;

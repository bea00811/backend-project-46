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
  const iter = (node, result = '', path = '') => {
    const {
      key, oldvalue, type, newValue, children,
    } = node;
    const nodeName = `${path}${key}`.slice(1);
    const oldValueString = makeString(oldvalue);
    const newValueString = makeString(newValue);

    if (type === 'root') {
      return children.map((item) => iter(item, result, `${path}${key}.`)).join('\n');
    }
    if (type === 'nested') {
      return children.flatMap((item) => iter(item, result, `${path}${key}.`)).join('\n');
    }

    if (type === 'changed') {
      return `${result}Property '${nodeName}' was updated. From ${oldValueString} to ${newValueString}`;
    }

    if (type === 'added') {
      return `${result}Property '${nodeName}' was added with value: ${oldValueString}`;
    }

    if (type === 'removed') {
      return `${result}Property '${nodeName}' was removed`;
    }

    return [];
  };

  return iter(tree).trim();
};

export default plain;

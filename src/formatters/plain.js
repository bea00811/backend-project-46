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
      key, oldValue, type, newValue, children,
    } = node;
    const nodeName = `${path}${key}`.slice(1);
    const oldValueString = makeString(oldValue);
    const newValueString = makeString(newValue);

    switch (type) {
      case 'root':
        return children.map((item) => iter(item, result, `${path}${key}.`)).join('\n');
      case 'nested':
        return children.flatMap((item) => iter(item, result, `${path}${key}.`)).join('\n');
      case 'changed':
        return `${result}Property '${nodeName}' was updated. From ${oldValueString} to ${newValueString}`;
      case 'added':
        return `${result}Property '${nodeName}' was added with value: ${oldValueString}`;
      case 'removed':
        return `${result}Property '${nodeName}' was removed`;

      default:
        return [];
    }
  };

  return iter(tree).trim();
};

export default plain;

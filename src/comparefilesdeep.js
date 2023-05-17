import _ from 'lodash';

const makeNodes = (key, type, children, oldValue, newValue) => {
  if (type === 'nested') {
    return {
      key,
      oldValue: null,
      newValue: null,
      type,
      children,
    };
  }
  if (type === 'added' || type === 'removed') {
    return {
      key,
      oldValue,
      type,
      children,
    };
  }

  if (type === 'unchanged') {
    return {
      key,
      oldValue,
      newValue: oldValue,
      type,
      children,
    };
  }
  return {
    key,
    oldValue,
    newValue,
    type,
    children,
  };
};

const compareFilesDeep = (data1, data2) => {
  const arrayOfKeysBothFiles = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));
  // const result = [];
  const result = arrayOfKeysBothFiles.map((item) => {
    if (_.isPlainObject(_.get(data1, item)) && _.isPlainObject(_.get(data2, item))) {
      const valueData1 = _.get(data1, item);
      const valueData2 = _.get(data2, item);
      return makeNodes(item, 'nested', compareFilesDeep(valueData1, valueData2));
    }

    if (_.get(data1, item) === _.get(data2, item)) {
      return makeNodes(item, 'unchanged', [], data1[item]);
    }

    if (_.has(data1, item) && _.has(data2, item) && _.get(data1, item) !== _.get(data2, item)) {
      return makeNodes(item, 'changed', [], data1[item], data2[item]);
    }

    if (!_.has(data2, item)) {
      return makeNodes(item, 'removed', [], data1[item]);
    }

    return makeNodes(item, 'added', [], data2[item]);
  });

  return result;
};

const getRightTree = (path1, path2) => {
  const rightTree = {
    key: '',
    type: 'root',
    children: compareFilesDeep(path1, path2),
  };

  return rightTree;
};

export default getRightTree;

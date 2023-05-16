import _ from 'lodash';

const makeNodes = (key, oldvalue, newValue, type, children) => ({
  key,
  oldvalue,
  newValue,
  type,
  children,
});

const compareFilesDeep = (data1, data2) => {
  const arrayOfKeysBothFiles = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));
  // const result = [];
  const result = arrayOfKeysBothFiles.map((item) => {
    if (_.isPlainObject(_.get(data1, item)) && _.isPlainObject(_.get(data2, item))) {
      const valueData1 = _.get(data1, item);
      const valueData2 = _.get(data2, item);
      return makeNodes(item, null, null, 'nested', compareFilesDeep(valueData1, valueData2));
    }

    if (_.get(data1, item) === _.get(data2, item)) {
      return makeNodes(item, data1[item], data2[item], 'unchanged', []);
    }

    if (_.has(data1, item) && _.has(data2, item) && _.get(data1, item) !== _.get(data2, item)) {
      return makeNodes(item, data1[item], data2[item], 'changed', []);
    }

    if (!_.has(data2, item)) {
      return makeNodes(item, data1[item], data2[item], 'removed', []);
    }

    return makeNodes(item, data2[item], data1[item], 'added', []);
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

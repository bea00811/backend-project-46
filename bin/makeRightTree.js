#!/usr/bin/env node
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
      // let element1 = makeNodes(item,'value','nested', compareFilesDeep(valueData1,valueData2))
      //  result = {...result, element1 }
    }

    if (_.get(data1, item) === _.get(data2, item)) {
      return makeNodes(item, data1[item], data2[item], 'unchanged', []);
      // let element2 = makeNodes(item, data1[item],'unchanged', [])
      // result = {...result, element2 }
    }

    if (_.has(data1, item) && _.has(data2, item) && _.get(data1, item) !== _.get(data2, item)) {
      return makeNodes(item, data1[item], data2[item], 'changed', []);
      // let element3 = makeNodes(item,data1[item],'changed', [])
      // result = {...result, element3 }
    }

    // let element4 = makeNodes(item, data2[item],'added', [])
    // result = {...result, element4 }

    if (!_.has(data2, item)) {
      return makeNodes(item, data1[item], data2[item], 'removed', []);
      // let element5 = makeNodes(item,data1[item],'removed', [])
      // result = {...result, element5 }
    }

    return makeNodes(item, data2[item], data1[item], 'added', []);
  });

  return result;
};

const getRightTree = (path1, path2) => {
  const rightTree = {
    key: '',
    type: 'root',
  };
  rightTree.children = compareFilesDeep(path1, path2);

  return rightTree;
};

export default getRightTree;

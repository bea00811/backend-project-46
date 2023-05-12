import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';
import getRightTree from '../comparefilesdeep.js';

const formatter = (data1, data2, formatoption) => {
  if (formatoption === 'plain') {
    return plain(getRightTree(data1, data2));
  }
  if (formatoption === 'json') {
    return json(getRightTree(data1, data2));
  }

  if (formatoption === 'stylish') {
    return stylish(getRightTree(data1, data2));
  }

  // if (formatoption === undefined) {
  //   return stylish(getRightTree(data1, data2));
  // }
  return new Error(`Dear user, your format ${formatoption} is wrong. Please type correctly.`);
};

export default formatter;

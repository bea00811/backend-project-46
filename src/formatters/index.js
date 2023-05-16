import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formatter = (tree, formatOption) => {
  if (formatOption === 'plain') {
    return plain(tree);
  }
  if (formatOption === 'json') {
    return json(tree);
  }

  if (formatOption === 'stylish') {
    return stylish(tree);
  }

  return new Error(`Dear user, your format ${formatOption} is wrong. Please type correctly.`);
};

export default formatter;

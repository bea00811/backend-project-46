import sum from '../bin/sum.js';
// const sum = require('../bin/sum.js');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

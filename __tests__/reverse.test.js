import reverse from '../bin/reverse.js';
// const reverse = require('../bin/reverse.js');

test('reverse', () => {
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('')).toEqual('');
});

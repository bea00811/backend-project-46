import comparefiles from '../bin/comparefiles.js';

const file1 = {
  host: 'hexlet.io',
  timeout: 50,
  proxy: '123.234.53.22',
  follow: false,
};

const file2 = {
  timeout: 20,
  verbose: true,
  host: 'hexlet.io',
};

const myJSON1 = JSON.stringify(file1);
const myJSON2 = JSON.stringify(file2);

const rightAnswer = {
  '- follow': 'false',
  '  host': 'hexlet.io',
  '- proxy': '123.234.53.22',
  '- timeout': '50',
  '+ timeout': '20',
  '+ verbose': 'true',
};

test('comparefiles', () => {
  expect(comparefiles(myJSON1, myJSON2)).toBe(rightAnswer);
});

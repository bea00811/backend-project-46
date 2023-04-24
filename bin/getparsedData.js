import * as fs from 'fs';
import parser from './parser.js';

const getparsedData = (filepath1) => {
  const filedata1 = fs.readFileSync(filepath1, { encoding: 'utf8' });
  const format1 = filepath1.split('.')[1];
  const data1 = parser(format1, filedata1);

  return data1;
};
export default getparsedData;

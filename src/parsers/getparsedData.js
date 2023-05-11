import * as fs from 'fs';
import parser from './parser.js';
import getFileFormat from './getFileFormat.js';

const getparsedData = (filepath1) => {
  const filedata1 = fs.readFileSync(filepath1, { encoding: 'utf8' });
  const format1 = getFileFormat(filepath1);
  const data1 = parser(format1, filedata1);

  return data1;
};
export default getparsedData;

import * as fs from 'fs';
import * as path from 'path';
import parser from './parser.js';
import getFileFormat from './getFileFormat.js';

const getparsedData = (filepath1) => {
  const fullPath = path.resolve(process.cwd(), filepath1);
  const filedata1 = fs.readFileSync(fullPath).toString();
  const format1 = getFileFormat(filepath1);
  const data1 = parser(format1, filedata1);

  return data1;
};
export default getparsedData;

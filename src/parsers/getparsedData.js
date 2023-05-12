import * as fs from 'fs';
import * as path from 'path';
import parser from './parser.js';
import getFileFormat from './getFileFormat.js';

const getFileData = (filepath) => {
  const fullPath = path.resolve(process.cwd(), filepath);
  const filedata = fs.readFileSync(fullPath).toString();
  return filedata;
};

const getparsedData = (filepath) => {
  const format1 = getFileFormat(filepath);
  const filedata = getFileData (filepath)

  const data1 = parser(format1, filedata);
  return data1;
};
export default getparsedData;

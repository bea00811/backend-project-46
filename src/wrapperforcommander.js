import formatter from './formatters/index.js';
import parser from './parsers/parser.js';
import getFileData from './parsers/getFileData.js';
import getFileFormat from './parsers/getFileFormat.js';
import getRightTree from './comparefilesdeep.js';

const getparsedData = (filepath) => {
  const format = getFileFormat(filepath);
  const filedata = getFileData(filepath);
  const parsedData = parser(format, filedata);
  return parsedData;
};

const wrapperforcommander = (filepath1, filepath2, formatoption = 'stylish') => {
  const data1 = getparsedData(filepath1);
  const data2 = getparsedData(filepath2);
  const tree = getRightTree(data1, data2);
  return formatter(tree, formatoption);
};

export default wrapperforcommander;

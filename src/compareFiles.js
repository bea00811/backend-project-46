import getparsedData from './parsers/getparsedData.js';
import formatter from './formatters/index.js';

const wrapperforcommander = (filepath1, filepath2, formatoption) => {
  const data1 = getparsedData(filepath1);
  const data2 = getparsedData(filepath2);
  return formatter(data1, data2, formatoption);
};

export default wrapperforcommander;

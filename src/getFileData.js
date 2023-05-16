import * as fs from 'fs';
import * as path from 'path';

const getFileData = (filepath) => {
  const fullPath = path.resolve(process.cwd(), filepath);
  const filedata = fs.readFileSync(fullPath).toString();
  return filedata;
};

export default getFileData;

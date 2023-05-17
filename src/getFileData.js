import * as fs from 'fs';
import * as path from 'path';

const getFileData = (filepath) => {
  const fullPath = path.resolve(process.cwd(), filepath);
  const fileData = fs.readFileSync(fullPath).toString();
  return fileData;
};

export default getFileData;

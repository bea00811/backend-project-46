import _ from 'lodash';
import * as fs from 'fs';
import parser from './parser.js';

const compareFiles = (filepath1, filepath2) => {
  const data1 = fs.readFileSync(filepath1, { encoding: 'utf8' });
  const data2 = fs.readFileSync(filepath2, { encoding: 'utf8' });

  const format1 = filepath1.split('.')[1];
  const format2 = filepath2.split('.')[1];

  let dataContent1;
  let dataContent2;
  if (format1 === format2) {
    dataContent1 = parser(format1, data1);
    dataContent2 = parser(format2, data2);
  }
  // Преобразовываю в массив массивов
  const arr1 = Object.entries(dataContent1);
  const arr2 = Object.entries(dataContent2);
  // Solved whith hier functions

  // ключ есть в обоих файлах, и его значения совпадают.
  const equalFile1File2 = arr1.filter((item1) => arr2.find((item2) => _.isEqual(item1, item2)));

  // ключ есть только в одном файле
  const diffFile1 = arr1.filter((e) => arr2.findIndex((i) => i[0] === e[0]) === -1);
  const diffFile2 = arr2.filter((e) => arr1.findIndex((i) => i[0] === e[0]) === -1);

  // значение по ключу отличается
  const difValue1 = arr1.filter((item1) => arr2.find((item2) => {
    if (item1[0] === item2[0] && item1[1] !== item2[1]) {
      return true;
    }
    return false;
  }));
  const difValue2 = arr2.filter((item1) => arr1.find((item2) => {
    if (item1[0] === item2[0] && item1[1] !== item2[1]) {
      return true;
    }
    return false;
  }));

  // Записываем отфильтрованные массивы  в один большой объект

  const obj = {};

  equalFile1File2.reduce((result, current) => {
    const newResult = result;
    newResult[`  ${current[0]}`] = `${current[1]}`;
    return newResult;
  }, obj);

  diffFile1.reduce((result, current) => {
    const newResult = result;
    newResult[`- ${current[0]}`] = `${current[1]}`;
    return newResult;
  }, obj);

  diffFile2.reduce((result, current) => {
    const newResult = result;
    newResult[`+ ${current[0]}`] = `${current[1]}`;
    return newResult;
  }, obj);

  difValue1.reduce((result, current) => {
    const newResult = result;
    newResult[`- ${current[0]}`] = `${current[1]}`;
    return newResult;
  }, obj);

  difValue2.reduce((result, current) => {
    const newResult = result;
    newResult[`+ ${current[0]}`] = `${current[1]}`;
    return newResult;
  }, obj);

  // Это один большой объект, уже отфильтрованный

  const myobj = Object.entries(obj);

  // Отсортировала объект обратно в массив массивов
  const sortedArr2 = [];
  myobj.map(([key, value]) => sortedArr2.push([key, value]));

  // Отсорт-а массив массивов в алфав порядке и чтобы первый файл шел первым если  ключи равны

  const sortedArr32 = sortedArr2.sort((a, b) => {
    if (a[0].slice(2) === b[0].slice(2)) {
      return 0;
    }
    if (a[0].slice(2) > b[0].slice(2)) {
      return 1;
    }
    return -1;
  });

  // sorted right string is here!!!

  const compareFilesString = JSON.stringify(Object.fromEntries(sortedArr32), null, ' ');
  console.log(compareFilesString);
  return compareFilesString;
};

export default compareFiles;

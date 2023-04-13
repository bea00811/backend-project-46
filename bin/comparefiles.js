import _ from 'lodash';

const compareFiles = (file1, file2) => {
  // Display the file data
  const data1Parsed = JSON.parse(file1);
  const data2Parsed = JSON.parse(file2);

  // Преобразовываю в массив массивов
  const arr1 = Object.entries(data1Parsed);
  const arr2 = Object.entries(data2Parsed);
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

  const makeObject = (littleObj) => {
    littleObj.reduce((result, current) => {
      result[`  ${current[0]}`] = `${current[1]}`;
      return result;
    }, obj);
  };

  makeObject(equalFile1File2);
  makeObject(diffFile1);
  makeObject(diffFile2);
  makeObject(difValue1);
  makeObject(difValue2);

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

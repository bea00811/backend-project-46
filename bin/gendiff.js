#!/usr/bin/env node

import { program } from 'commander';
import * as fs from 'fs';
import _ from 'lodash';
// const command = (names) => {
//   for (const name of names) {
//     console.log(`Hello, ${name}!`);
//   }
// };

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .option('-f, --format <type> ', 'output format')
  .argument('filepath1')
  .argument('filepath2')
  .action((filepath1, filepath2) => {
    console.log('filepath1:', filepath1);
    console.log('filepath2:', filepath2);
    const data1 = fs.readFileSync(filepath1, { encoding: 'utf8' });
    const data2 = fs.readFileSync(filepath2, { encoding: 'utf8' });
    // Display the file data
    const data1Parsed = JSON.parse(data1);
    const data2Parsed = JSON.parse(data2);

    // Преобразовываю в массив массивов
    const arr1 = Object.entries(data1Parsed);
    const arr2 = Object.entries(data2Parsed);
    // Solved whith hier functions

    // ключ есть в обоих файлах, и его значения совпадают.
    const equalFile1File2 = arr1.filter((item1) => arr2.find((item2) => _.isEqual(item1, item2)));

    // ключ есть только в одном файле
    const diffFile1 = arr1.filter((e) => arr2.findIndex((i) => i[0] == e[0]) === -1);
    const diffFile2 = arr2.filter((e) => arr1.findIndex((i) => i[0] == e[0]) === -1);

    // значение по ключу отличается
    const diffOnlyValarr1 = arr1.filter((item1) => arr2.find((item2) => item1[0] === item2[0] && item1[1] !== item2[1]));
    const diffOnlyValarr2 = arr2.filter((item1) => arr1.find((item2) => item1[0] === item2[0] && item1[1] !== item2[1]));

    // Записываем отфильтрованные массивы  в один большой объект

    const obj = {};

    const res5 = equalFile1File2.reduce((result, current) => {
      result[`  ${current[0]}`] = `${current[1]}`;
      return result;
    }, obj);

    const res = diffFile1.reduce((result, current) => {
      result[`- ${current[0]}`] = `${current[1]}`;
      return result;
    }, obj);

    const res2 = diffFile2.reduce((result, current) => {
      result[`+ ${current[0]}`] = `${current[1]}`;
      return result;
    }, obj);

    const res3 = diffOnlyValarr1.reduce((result, current) => {
      result[`- ${current[0]}`] = `${current[1]}`;
      return result;
    }, obj);

    const res4 = diffOnlyValarr2.reduce((result, current) => {
      result[`+ ${current[0]}`] = `${current[1]}`;
      return result;
    }, obj);

    // Это один большой объект, пока не отфильтрованный
    console.log(obj);
    console.log(Object.entries(obj));

    const myobj = Object.entries(obj);
    console.log(myobj);

    // Отсортировала объект обратно в массив массивов
    const sortedArr2 = [];
    for (const [key, value] of myobj) {
      sortedArr2.push([key, value]);
    }
    console.log(sortedArr2);

    // Отсортировала массив массивов в алфавитном порядке и чтобы первый файл шел первым если  ключи равны
    const sortedArr3 = sortedArr2.sort((a, b) => ((a[0].slice(2) === b[0].slice(2) ? 0 : a[0].slice(2) > b[0].slice(2)) ? 1 : -1));
    console.log(sortedArr3);
    // sorted right string is here!!!
    console.log(JSON.stringify(Object.fromEntries(sortedArr3), null, ' '));
  })
  .parse(process.argv);

console.log("I'm console log");

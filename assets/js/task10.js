"use strict";
/*Задание 10. Преобразовать набор вложенных массивов в один массив 
одного уровня вложености [[0, 1], [2, 3], [4, 5]] в [0, 1, 2, 3, 4, 5].*/

//Создание 2-мерного массива
let userArray = [
  [0, 1],
  [2, 3],
  [4, 5],
];
let userModArray = [];

//Функция преобразования массива
function ModificationOfArray(array) {
  let modArray = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      modArray.push(array[i][j]);
    }
  }
  return modArray;
}
//Функция вывода массива 2-мерного
function showMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join(" "));
  }
  return "";
}

//Вызов функции
console.log("Исходный массив = ");
console.log(showMatrix(userArray));
console.log("Преобразованный массив = ");
console.log(ModificationOfArray(userArray).join(" "));

//Или просто:)
console.log("Второй вариант = ");
console.log(userArray[0].concat(userArray[1], userArray[2]).join(" "));
"use strict";
/*Задание 11. Квадратная матрица. Вывести главную диагональ мастрицы. 
Обнулить элементы ниже главной диагонали.*/

//Создание квадратной матрицы целых чисел из 10 эл.
let sizeOfSqureMatrix = 10;
let squareMatrix = [];
for (let i = 0; i < sizeOfSqureMatrix; i++) {
  squareMatrix[i] = [];
  for (let j = 0; j < sizeOfSqureMatrix; j++) {
    squareMatrix[i][j] = parseInt(Math.random() * 10);
  }
}

//Функция вывода главной диагонали квадратной матрицы
function showMainAxisOfSquareMatrix(squareMatrix) {
  let mainAxis = [];
  let size = squareMatrix[0].length;
  console.log("Главная диагональ квадратной матрицы =");
  for (let i = 0; i < size; i++) {
    mainAxis.push(squareMatrix[i][i]);
  }
  console.log(mainAxis.join(" "));
  console.log("");
}

//Функция обнуления элементов ниже главной диагонали квадратной матрицы
function makeZeroElementsBelowMainAxis(squareMatrix) {
  let size = squareMatrix[0].length;
  for (let i = 1; i < size; i++) {
    for (let j = 0; j < i; j++) {
      squareMatrix[i][j] = 0;
    }
  }
  return squareMatrix;
}

//Функция вывода 2 мерной матрицы
function showMatrix(matrix) {
   for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join(" "));
  }
  return "";
}

//Вызов функций
console.log("Исходная квадратная матрица =");
console.log(showMatrix(squareMatrix));
showMainAxisOfSquareMatrix(squareMatrix);
makeZeroElementsBelowMainAxis(squareMatrix);
console.log("Квадратная матрица после обнуления элементов ниже главной оси =");
console.log(showMatrix(squareMatrix));

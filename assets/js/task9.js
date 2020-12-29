"use strict";
/*Задание 9. Объединить два массива в один и отсортировать.*/

//Создание 2 массивов целых чисел
let lengthOfUserArray = 10;
let userArray1 = new Array(lengthOfUserArray);
for (let i = 0; i < userArray1.length; i++) {
  userArray1[i] = parseInt(Math.random() * 10);
}
let userArray2 = new Array(lengthOfUserArray);
for (let i = 0; i < userArray2.length; i++) {
  userArray2[i] = parseInt(Math.random() * 10);
}

//Функция объединения 2 массивов
function ConcatOfTwoArrays(userArray1, userArray2) {
  let concatArrays = userArray1.concat(userArray2);
  return concatArrays;
}

//Функция сортировки в порядке убывания
function SortReverseOrderArray(userArray) {
  return userArray.sort((a, b) => b - a);
}

//Вызов функций
let concatArray = ConcatOfTwoArrays(userArray1, userArray2);
console.log(
  "Отсортированный массив состоящий из 2 массивов в порядке убывания"
);
console.log(SortReverseOrderArray(concatArray));

//Вариант решения 2 =
console.log('Вариант решения №2');
console.log(userArray1.concat(userArray2).sort((a, b) => b - a));
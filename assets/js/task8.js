"use strict";
/*Задание 8. Определить количество учеников в классе, чей рост превышает средний.*/

//Массив роста учеников в см
let arrayOfHeights = [1.65, 1.67, 1.82, 1.74, 1.84, 1.72, 1.71, 1.8];

//Функция вычисления среднего значения в массиве
function AverageNumberInArray(array) {
  let sum = 0;
  let avg;
  array.forEach((element) => {
    sum += element;
  });
  avg = +(sum / array.length).toFixed(2);
  return avg;
}

//Функция вычисления количества элементов выше заданного значения в массиве
function QuantityOfElementsBiggerThanInArray(array, number) {
  let quantity = 0;
  array.forEach((element) => {
    if (element > number) {
      quantity++;
    }
  });
  return quantity;
}

//Вызов функций
console.log("Средний рост учеников = " + AverageNumberInArray(arrayOfHeights));
console.log("Количество учеников в классе, чей рост превышает средний =");
console.log(QuantityOfElementsBiggerThanInArray(arrayOfHeights, AverageNumberInArray(arrayOfHeights)));

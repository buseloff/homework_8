"use strict";
/*Задание 4. Найти число (из трех заданых\введенных пользователем) с максимальной суммой цифр.
 */

let userNumber1 = prompt("Введите число 1", 1554336);
let userNumber2 = prompt("Введите число 2", 1536);
let userNumber3 = prompt("Введите число 3", 11212121);

//Функция вычисления суммы цифр числа
function SumOfNumbers(userNumber) {
  let proverka = Number(userNumber);
  let arrayOfNumbers = [];
  let sumOfNumbers = 0;

  if (!isNaN(proverka)) {
    // Цифры введенного числа попадают в массив
    for (const item of userNumber) {
      if (item == ".") {
        continue;
      }
      arrayOfNumbers.push(+item);
    }
  } else {
    alert("Введенное значение не является числом");
  }
  // Расчет суммы цифр
  arrayOfNumbers.forEach((item) => (sumOfNumbers += item));
  return sumOfNumbers;
}

//Функция расчета максимального числа в массиве
function BiggestNumberInArray(userArray){
  let biggestNumber = userArray[0];
  for (const item of userArray) {
    if (item > biggestNumber) {
      biggestNumber = item;
    }
  }
  return biggestNumber;
}

//Функция расчета числа в массиве с максимальной суммой цифр

function getMaxSumOfNumbers(userNumber1, userNumber2, userNumber3) {

//Введенные пользователем числа попадают в массив
let arrayOfUserNumbers = [userNumber1, userNumber2, userNumber3]
let arrayOfUserSumOfNumbers = [];

//Вычисляется массив суммы цифр каждого числа пользователя
for (let i = 0; i<arrayOfUserNumbers.length; i++) {
  arrayOfUserSumOfNumbers[i] = SumOfNumbers(arrayOfUserNumbers[i]);
}

//Находится максимальное число
let biggestNumber = BiggestNumberInArray(arrayOfUserSumOfNumbers);

//По индексу максимального числа выводится число пользователя с максимальной суммой цифр
alert(`Число c максимальной суммой цифр = 
${arrayOfUserNumbers[arrayOfUserSumOfNumbers.indexOf(biggestNumber)]}`);
}

//Вызов функции
getMaxSumOfNumbers(userNumber1, userNumber2, userNumber3);
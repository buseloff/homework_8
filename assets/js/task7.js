"use strict";
/*Задание 7. Проверить, находится ли введенное число в массиве.*/

//Создание массива целых чисел из 10 эл.
let lengthOfUserArray = 10;
let arrayTest = new Array(lengthOfUserArray);
for (let i = 0; i < arrayTest.length; i++) {
  arrayTest[i] = parseInt(Math.random() * 100);
}

//Функция возвращает true если число содержится в массиве
function HasNumberInArray(array, number) {
  return array.includes(number);
}

let userNumber;
//Ввод числа пользователем
userNumber = prompt("Введите число", 50);

//Если введено число вызывается функция, если не число - выводится сообщение
if (!isNaN(userNumber)) {
  console.log("Содержит ли массив " + arrayTest + " число " + userNumber);
  if (HasNumberInArray(arrayTest, Number(userNumber))) {
    console.log("Содержит");
  } else {
    console.log("Не содержит");
  }
} else {
  console.log("Введено не числовое значение");
}

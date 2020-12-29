"use strict";
/*Задание 12. Вывести массив первых букв в словах предложения.*/

//Заданное предложение
let userSentence = "Lorem ipsum dolor sit amet consectetur adipisicing elit";

//Функция возвращающая массив слов в предложении
function ArrayOfWords(userString) {
  let arrayOfWords = userString.split(" ");
  return arrayOfWords;
}

//Функция возвращающая массив первых букв в массиве слов
function ArrayOfLetters(arrayOfWords) {
  let arrayOfLetters = [];
  for (const item of arrayOfWords) {
    arrayOfLetters.push(item[0]);
  }
  return arrayOfLetters;
}

//Вызов функций
console.log("Заданное предложение = ");
console.log(userSentence);
console.log("Отсортированный массив первых букв в словах предложения = ");
console.log(ArrayOfLetters(ArrayOfWords(userSentence)).sort());

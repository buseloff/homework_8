"use strict";
/*Задание 13. Поменять порядок слов предложения на обратный.*/

//Заданное предложение
let userSentence = "Lorem ipsum dolor sit amet consectetur adipisicing elit";

//Функция возвращающая массив слов в предложении
function ArrayOfWords(userString) {
  let arrayOfWords = userString.split(" ");
  return arrayOfWords;
}

//Функция возвращающая массив развернутый массив обратно
function ReverseArray(userArray) {
  return userArray.reverse();
}

//Вызов функций
console.log("Заданное предложение = ");
console.log(userSentence);
console.log("Слова в предложении в обратном порядке = ");
console.log(ReverseArray(ArrayOfWords(userSentence)).join(" "));

//Вариант решения №2"
console.log("Вариант решения №2 = ");
console.log(userSentence.split(" ").reverse().join(" "));

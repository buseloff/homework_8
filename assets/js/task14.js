"use strict";
/*Задание 14. Создайте функцию-конструктор Книга. Выведите созданные объекты.*/

//Функция создания объекта книга
function Book(title, author, ISBN, price) {
  this.title = title;
  this.author = author;
  this.ISBN = ISBN;
  this.price = price;
}

//Создание объектов
let book1 = new Book("Harry Potter", "Joahn Rolling", 4654545, 25.6);
let book2 = new Book("War and Peace", "Leo Tolstoy", 46456456, 35.5);
let book3 = new Book("Martin Eden", "Jack London", 7454455, 15.5);

//Функция вывода объекта
function showObject(book) {
  for (const key in book) {
    if (book.hasOwnProperty(key)) {
      const element = book[key];
      console.log(`${key} = ${element}`);
    }
  }
  console.log(`------------------`);
}

//Вывод объектов
console.log(`Вывод книг`);
showObject(book1);
showObject(book2);
showObject(book3);

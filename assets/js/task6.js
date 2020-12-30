//"use strict";
/*Задание 6.Вывести квадрат Пифагора.
 */

let userDateOfBirth = prompt(
  "Введите дату рождения в числовом формате",
  07101952
);

//Функция вычисления суммы цифр числа
function SumOfNumbers(userNumber) {
  let proverka = Number(userNumber);
  let arrayOfNumbers = [];
  let sumOfNumbers = 0;

  if (!isNaN(proverka)) {
    // Цифры введенного числа попадают в массив
    for (const item of userNumber) {
      arrayOfNumbers.push(+item);
    }
  } else {
    alert("Введенное значение не является числом");
  }
  // Расчет суммы цифр
  arrayOfNumbers.forEach((item) => (sumOfNumbers += item));
  return sumOfNumbers;
}

//Функция вычисления и вывода значений квадратa Пифагора
function SquareOfPifagor(userDateOfBirth) {
  //Если первая цифра 0 она удаляется
  if (userDateOfBirth[0] == "0") {
    userDateOfBirth = userDateOfBirth.slice(1);
  }
  //Первое рабочее число - сложение цифр даты рождения
  let userNumber1 = SumOfNumbers(userDateOfBirth);
  //Второе рабочее число - сложение цифр первого чила
  let userNumber2 = SumOfNumbers(String(userNumber1));
  //Третье рабочее число - из первого вычитаем удвоенную первую  цифру дня рождения
  let userNumber3 = userNumber1 - 2 * Number(userDateOfBirth[0]);
  //Четвертое рабочее число - складываем цыфры третьего, если третье 10, 11 или 12
  // то четвертое рабочее число равно третьему
  let userNumber4;
  if (userNumber3 >= 10 && userNumber3 <= 12) {
    userNumber4 = userNumber3;
  } else {
    userNumber4 = SumOfNumbers(String(userNumber3));
  }

  //Склеиваем дату рождения и все числа в строку
  let userNumber = "";
  userNumber = userNumber
    .concat(userDateOfBirth)
    .concat(userNumber1)
    .concat(userNumber2)
    .concat(userNumber3)
    .concat(userNumber4);

  //Строку преобразовываем в массив чисел
  let arrayOfNumbers = [];
  for (const item of userNumber) {
    arrayOfNumbers.push(+item);
  }

  //Подсчитываем количество вхождений цифр от 1 до 9 в массиве чисел и выводим в консоль
  console.log("Ваша матрица Пифагора:");
  for (let i = 1; i <= 9; i++) {
    let count = 0;
    arrayOfNumbers.forEach((item) => {
      if (item == i) {
        count++;
      }
    });
    console.log(`Количество цифр ${i} = ${count}`);
  }
}

//Вызов функции
console.log("Астрологический квадрат Пифагора:");
SquareOfPifagor(userDateOfBirth);

console.log("-------------------------------------");

//Функция вычисления и вывода значений математического квадратa Пифагора
function SquareOfPifagorMath() {
  
  console.log("Математический квадрат Пифагора:");
  //Массив для вычисления значений квадарата
  let linesOfSquare = [];
  //Массив для форматированного вывода строк квадарата, чтобы каждое значение занимало по 2 символа
  let linesOfSquareString = [];
  for (let i = 0; i <= 9; i++) {
    if (i == 0) {
      linesOfSquare.push(" ");
      for (let j = 1; j <= 10; j++) {
        linesOfSquare.push(j);
      }
      for (let k = 0; k <= 10; k++) {
        if (linesOfSquare[k] > 9) {
          linesOfSquareString.push(String(linesOfSquare[k]));
          continue;
        }
        linesOfSquareString.push(String(linesOfSquare[k]) + " ");
      }
      console.log(linesOfSquareString.join(" "));
      linesOfSquare.length = 0;
      linesOfSquareString.length = 0;

      continue;
    }

    linesOfSquare.push(i);
    linesOfSquare.push(i);
    for (let j = 1; j <= 9; j++) {
      linesOfSquare.push(linesOfSquare[linesOfSquare.length - 1] + i);
    }
    for (let k = 0; k <= 10; k++) {
      if (linesOfSquare[k] > 9) {
        linesOfSquareString.push(String(linesOfSquare[k]));
        continue;
      }
      linesOfSquareString.push(String(linesOfSquare[k]) + " ");
    }
    console.log(linesOfSquareString.join(" "));
    linesOfSquare.length = 0;
    linesOfSquareString.length = 0;
  }
}

//Вызов функции
SquareOfPifagorMath();

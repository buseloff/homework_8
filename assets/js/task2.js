"use strict";
/*   Задание 2. Решите квадратное уравнение ax2 + bx + c = 0 (пользователь вводит коэф. a,b,c).
 */
let a, b, c;
//ввод параметров квадратного уравнения пользователем
a = parseFloat(prompt("Введите а", 10));
b = parseFloat(prompt("Введите b", 100));
c = parseFloat(prompt("Введите c", 10));

//Функция вычисления решений квадратного уравнения
function calculateEquation(par_a, par_b, par_c) {
  let discriminant;
  let x1;
  let x2;
  let sqrtOfDisriminant;
  discriminant = par_b ** 2 - 4 * par_a * par_c;

  if (discriminant < 0) {
    alert(`Корней в уравнения нет`);
  } else if (discriminant == 0) {
    x1 = -par_b / (2 * par_a);
    alert(`Уравнение имеет одно решение = ${x1}`);
  } else {
    sqrtOfDisriminant = +Math.pow(discriminant, 1 / 2).toFixed(2);
    x1 = sqrtOfDisriminant - par_b;
    x1 = +(x1 / (2 * par_a)).toFixed(2);
    x2 = -sqrtOfDisriminant - par_b;
    x2 = +(x2 / (2 * par_a)).toFixed(2);
    alert(`Уравнение имеет два решения x1 = ${x1} и x2 = ${x2}`);
  }
}

//Вызов функции с параметрами пользователя
calculateEquation(a, b, c);

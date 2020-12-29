"use strict";
/*   Задание 1. Решить у = -2,4x2+5x-3 в диапазоне от -2 до 2 с шагом 0,5.
 */

 //Шаг и диапазон
let step = 0.5;
let limit1 = -2;
let limit2 = 2;

//Функция вычисления решений уравнения, передаются в массив
function calculateExpression(limit1, limit2, step) {
  let x;
  let y = [];
  for (x = limit1; x <= limit2; x += step) {
    y.push(+(-2.4 * x * x + 5 * x - 3).toFixed(2));
  }
  return y;
}

//Вызов функции
console.log("Значения функции: ");
for (const item of calculateExpression(limit1, limit2, step)) {
  console.log(item);
}

"use strict";
/*    Задание 3. Какой будет результат? a=true, b=true, c=false.
      a and b and c,
      a or b or c,
      a and b or c,
      a or b and c,
      not a,
      not a and not b,
      a and b and not c.
 */
let a = true;
let b = true;
let c = false;

function ResultsOfBooleanExpressions(a, b, c) {
  console.log(`Значения переменных: a = ${a}, b = ${b}, c = ${c}`);
  console.log(`Значения логических выражений:`);
  console.log(` a and b and c = ${a && b && c}`);
  console.log(` a or b or c = ${a || b || c}`);
  console.log(` a and b or c = ${(a && b) || c}`);
  console.log(` a or b and c = ${a || (b && c)}`);
  console.log(` not a = ${!a}`);
  console.log(` not a and not b = ${!a && !b}`);
  console.log(` a and b and not c = ${a && b && !c}`);
}

ResultsOfBooleanExpressions(a, b, c);

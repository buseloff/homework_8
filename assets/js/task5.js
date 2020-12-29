"use strict";
/* Вывести геометрической узор из * (ислользовать циклы и посимвольный вывод)
 ***********
 *----*----*
 *----*----*
 *----*----*
 *----*----*
 ***********
 */

let quantityOfColumns = 11;
let quantityOfRows = 6;
let stringOfStars = "";
let stringOfDifSymbols = "";

//Вывод в консоль 
for (let i = 1; i <= quantityOfColumns; i++) {
  stringOfStars += "*";
}

for (let i = 1; i <= quantityOfColumns; i++) {
  if (i != 1 && i != 6 && i != 11) {
    stringOfDifSymbols += "-";
    continue;
  }
  stringOfDifSymbols += "*";
}

for (let i = 1; i <= quantityOfRows; i++) {
  if (i != 1 && i != 6) {
    console.log(stringOfDifSymbols);
    continue;
  }
  console.log(stringOfStars);
}





//Вывод в документ
for (let j = 1; j <= quantityOfRows; j++) {
  if (j != 1 && j != 6) {
    for (let i = 1; i <= quantityOfColumns; i++) {
      if (i != 1 && i != 6 && i != 11) {
        document.write("-");
        continue;
      }
      document.write("*");
    }
    document.writeln("<br />");
    continue;
  }

  for (let i = 1; i <= quantityOfColumns; i++) {
    document.write("*");
  }

  document.writeln("<br />");
}

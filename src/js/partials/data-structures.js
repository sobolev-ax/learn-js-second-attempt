

alert( getDecimal(12.345) ); // 0.345
alert( getDecimal(1.2) ); // 0.2
alert( getDecimal(-1.2) ); // 0.2

function getDecimal(num) {
  return num - Math.floor(num);
}


/*
var numberOne = +prompt("Первое число:", "") || 0;
var numberTwo = +prompt("Второе число:", "") || 0;

alert(numberOne + numberTwo);
*/

/*

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

*/

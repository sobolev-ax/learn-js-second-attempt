

var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

console.log( menu );

multiplyNumeric(menu);

console.log( menu );

multiplyNumeric(menu);

console.log( menu );

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};
function multiplyNumeric(obj) {
  for (var key in obj) {
    if ( isNumeric( obj[key] ) ) {
      obj[key] *= 2;
    };
  };
};



/*

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

console.log( sumOfValues(salaries) );
console.log( sumOfValuesMax(salaries) );

function sumOfValues(obj) {
  var sum = 0;
  for (var key in obj) {
    sum += obj[key];
  }
  return sum;
}

function sumOfValuesMax(obj) {
  var sum = 0;
  var name = "";
  for (var key in obj) {
    if ( obj[key] > sum ) {
      sum = obj[key];
      name = key;
    };
  };
  return sum ? name : "нет сотрудников";
};

*/


/*

function isEmpty(obj) {
  var properties = 0;

  for (var key in obj) {
    properties++;
  }

  return properties ? false : true;
}

var schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) ); // false

*/

/*

var user = {};
user["name"] = "Вася";
user["surname"] = "Петров";
user["name"] = "Сергей";
delete user["name"];

*/

// Квадртаные скобки позволяют использовать в качестве имени свойства лубую строку.
// person['любимый стиль музыки'] = 'Классика';

/*

var obj = {};
obj.test; // добавили свойство со значением undefined

// проверим наличие свойств test и заведомо отсутствующего blabla
alert( obj.test === undefined ); // true
alert( obj.blabla === undefined ); // true

*/

/*

function extractCurrencyValue(str) {
  return +str.slice(1);
}
console.log( extractCurrencyValue("$120") );

*/


/*

function truncate(str, maxLength) {
  var resultStr = str;

  if ( str.length > maxLength ) {
    resultStr = str.slice(0, maxLength - 3) + "...";
  };

  return resultStr;
}

console.log (
  truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) );

console.log ( truncate("Всем привет!", 20) );

console.log ( truncate("What I'd like to tell on this topic is", 20) );

*/

/*

console.log( checkSpam('buy ViAgRA now') );
console.log( checkSpam('free xxxxx') );
console.log( checkSpam("innocent rabbit") );

function checkSpam(str) {
  var strLoverCase = str.toLowerCase();
  if ( ~strLoverCase.indexOf("xxx") || ~strLoverCase.indexOf("viagra") ) {
    return true;
  }
  return false;
}

*/

/*

function ucFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

*/

/*

setTimeout( function () {
  console.log(getRandom(5, 10))
}, 1000);
setTimeout( function () {
  console.log(getRandom(0, 5))
}, 2000);
setTimeout( function () {
  console.log(getRandom(500, 1000))
}, 3000);
setTimeout( function () {
  console.log(getRandom(20, 25))
}, 4000);
setTimeout( function () {
  console.log(getRandom(352, 354))
}, 5000);
setTimeout( function () {
  console.log(getRandom(800 ,888))
}, 6000);

function getRandom (min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
}

*/


/*

setTimeout( function () {
  console.log(getRandom(10))
}, 1000);
setTimeout( function () {
  console.log(getRandom(100))
}, 2000);
setTimeout( function () {
  console.log(getRandom(1000))
}, 3000);
setTimeout( function () {
  console.log(getRandom(25))
}, 4000);
setTimeout( function () {
  console.log(getRandom(354))
}, 5000);
setTimeout( function () {
  console.log(getRandom(888))
}, 6000);

function getRandom (max) {
  return parseInt( max * Math.random() );
}

*/

/*

console.log( fib(77) );
console.log( fibBinet(77) );

function fib(n) {
  var a = 1,
    b = 0,
    x;
  for (i = 0; i < n; i++) {
    x = a + b;
    a = b
    b = x;
  }
  return b;
}
function fibBinet(n) {
  var phi = (1 + Math.sqrt(5)) / 2;

  return Math.pow(phi, n) / Math.sqrt(5);
}

*/



/*
console.log( getDecimal(12.345) ); // 0.345
console.log( getDecimal(1.2) ); // 0.2
console.log( getDecimal(-1.2) ); // 0.2
console.log( getDecimal(1.3) ); // 0.3
console.log( getDecimal(5) ); // 0

function getDecimal(num) {
  var numRound = Math.round(num * 1000) / 1000;
  if (numRound < 0) numRound *= -1;
  return Math.round( (numRound - parseInt(numRound)) * 1000 ) / 1000;
}
*/

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

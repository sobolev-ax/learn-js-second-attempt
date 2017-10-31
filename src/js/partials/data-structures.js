



/*

var strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"
];

console.log( unique(strings) ); // кришна, харе, 8-()

function unique(strings) {
  var arr = [],
      obj = {};

  for (var i = 0; i < strings.length; i++) {
    obj[ strings[i] ] = true;
  };

  for (var key in obj) {
    arr.push( key );
  };

  return arr;

};

*/
/*

var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

console.log( aclean(arr) );

function aclean(arr) {
  var objTemp = {},
      arrTemp = [];

  for (var i = 0; i < arr.length; i++) {
    var word = arr[i]
      .toLowerCase()
      .split("")
      .sort()
      .join("");

    objTemp[word] = i;
  };

  for(var key in objTemp) {
    arrTemp.push( arr[objTemp[key]] )
  }

  arr = arrTemp;

  return arr;
};

*/
/*

var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

printList(list);
console.log("------------------------------")
printListRecursion(list);
console.log("------------------------------")
printReverseList(list);
console.log("------------------------------")
printReverseListRecursion(list);
console.log("------------------------------")

function printList(list) {
  var link = list;

  while (link) {

    console.log(link);
    link = link.next;

  };

};
function printListRecursion(list) {

  console.log(list);

  if (list.next) {
    printListRecursion(list.next)
  };

};
function printReverseList(list) {
  var link = list;
  var arr = [];

  while (link) {

    arr.push( link );
    link = link.next;

  };

  arr.reverse();

  for(var i = 0; i < arr.length; i++) {
    console.log( arr[i] );
  };

};
function printReverseListRecursion(list) {

  if (list.next) {

    printReverseListRecursion(list.next)

  };

  console.log(list);

};

*/



/*

var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

people.sort(function (a, b) {
  return a.age - b.age;
});

// теперь people: [vovochka, masha, vasya]
console.log(people);

*/



/*

var arr = [1, 2, 3, 4, 5];

arr.sort(function (a, b) {

  return Math.random() - 0.5;

});

console.log( arr ); // элементы в случайном порядке, например [3,5,1,2,4]

*/


/*

var arr = ["HTML", "JavaScript", "CSS"];

var arrSorted = arr
  .concat()
  .sort();

console.log( ( arrSorted ) ); // CSS, HTML, JavaScript
console.log( ( arr ) ); // HTML, JavaScript, CSS (без изменений)

*/

/*

var arr = [5, 2, 1, -10, 8];

arr.sort(function (a, b) {
  return b - a;
});

console.log( arr );

*/

/*

arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log( arr ); // массив изменился: остались [3, 1]

function filterRangeInPlace(arr, a, b) {

  for(var i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= a) continue;

    arr.splice(i,1);

  };

};

*/

/*

var obj = {
  className: 'menu'
};

console.log( removeClass(obj, 'open') ); // obj.className='menu'
console.log( removeClass(obj, 'blabla') ); // без изменений (нет такого класса)
console.log( removeClass(obj, 'menu') );

function removeClass(obj, name) {
  var arr = obj["className"].split(" ");

  while (arr.indexOf(name) != -1) {
    arr.splice(arr.indexOf(name), 1);
  };

  if ( arr.length > 1 ) {
    obj["className"] = arr.join(" ");
  } else {
    obj["className"] = arr.join("");
  }

  return obj["className"];
};

*/


/*

console.log( camelize("background-color") );
console.log( camelize("list-style-image") );
console.log( camelize("-webkit-transition") );

function camelize(str) {
  var arr = str.split("-"),
      result;

  for (var i = 1; i < arr.length; i++) {
    arr[i] =
      arr[i]
      .charAt(0)
      .toUpperCase()
      +
      arr[i].slice(1)
  };

  result = arr.join("");

  return result;
}

*/

/*

var obj = {
  className: 'open menu'
};

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

console.log( obj.className ); // "open menu new me"

function addClass(obj, cls) {
  var arr = obj.className.split(' ');

  if ( !!arr.indexOf(cls) ) {
    arr.push(cls);

    if (obj.className === "") {
      obj.className = arr.join('');
    } else {
      obj.className = arr.join(' ');
    }
  };
};

*/

/*

console.log( getMaxSubSum([-1, 2, 3, -9]) ); //= 5
console.log( getMaxSubSum([2, -1, 2, 3, -9]) ); //= 6
console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); //= 11
console.log( getMaxSubSum([-2, -1, 1, 2]) ); //= 3;
console.log( getMaxSubSum([100, -9, 2, -3, 5]) ); //= 100
console.log( getMaxSubSum([1, 2, 3]) ); //= 6

function getMaxSubSum(arr) {

  var sumMax = 0, sumCurr = 0, sumPrev = 0;

  for (var i = 0; i < arr.length; i++) {

    sumCurr += arr[i];

    if (sumCurr >= 0) {

      sumPrev = sumCurr;

    } else if (sumCurr < 0) {

      sumCurr = 0;

    }

    if (sumPrev > sumMax) {
      sumMax = sumPrev;
    }

  };

  return sumMax;

};

function getMaxSubSum(arr) {
  var maxSum = 0,
    partialSum = 0;
  for (var i = 0; i < arr.length; i++) {
    partialSum += arr[i];
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }
  return maxSum;
}

*/


/*

var count = 100,
    mas   = [],
    masPr = [],
    sum = 0,
    i, j, iPrime;

for(i = 0; i < count; i++) {

  mas.push(true);

};

console.log(mas);

iPrime = 2;


while( Math.pow(iPrime, 2) < count) {

  for(j = 2, i = 0; i < count; i++) {

    if( j * iPrime === i ) {

      mas[i] = false;
      j++;

    };

  };

  for(i = iPrime + 1; i < count; i++) {

    if( mas[i] !== false ) {

      iPrime = i;
      break;

    };

  };

};

console.log(mas);

for(i = 2; i < count; i++) {

  if( mas[i] !== false ) {

    masPr.push( i );

  };

};

for(i = 0; i < masPr.length; i++) {

  sum += masPr[i];

};

console.log(masPr);
console.log(sum);

*/





/*

var arr = [5, 3, 8, 1];

var filtered = filterRange(arr, 1, 4);

console.log( filtered );

function filterRange(arr, a, b) {
  var result = [];

  for (var j = 0, i = 0; i < arr.length; i++) {

    if ( arr[i] >= a && arr[i] <= b) {

      result.push( arr[i] );

    };

  };

  return result;
};

*/

/*

arr = ["test", "2", 2, 1.5, false];

console.log( find(arr, "test") ); // 0
console.log( find(arr, 2) ); // 1
console.log( find(arr, 1.5) ); // 2

console.log( find(arr, 0) ); // -1

function find(arr, arg) {
  for (var i = 0; i < arr.length; i++) {
    if ( arr[i] === arg) return i;
  };
  return -1;
};

*/

/*

var numbers = [];

while (true) {
  var n = prompt("Число", "");

  if (!n || n === "") {
    break;
  };

  if ( isNumeric(n) ) {
    numbers.push(+n);
  };

};

var sum = 0;

for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
};

console.log(sum)

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

*/

/*

var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];

var rand = Math.floor(Math.random() * arr.length);

console.log( arr[rand] );

*/

/*

var styles = ["Джаз", "Блюз"];

console.log(styles);

styles[styles.length] = "Рок-н-Ролл";

console.log(styles);

styles[styles.length - 2] = "Классика";

console.log( styles.shift() );
console.log(styles);

styles.unshift("Регги", "Рэп");

console.log(styles);

*/

/*

var goods = [1,2,3,4,5,6,7,8,9,10,11];

console.log( goods[goods.length -1] );

goods.push("Компьютер");

goods[goods.length] = ("Компьютер");

console.log( goods );

*/

// Массив – это объект, где в качестве ключей выбраны цифры, с дополнительными методами и свойством length.


/*

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

*/


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

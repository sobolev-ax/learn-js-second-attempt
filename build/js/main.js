


/* 
var ladder = {
  step: 0,
  up: function() { // вверх по лестнице
    this.step++;
    return this;
  },
  down: function() { // вниз по лестнице
    this.step--;
    return this;
  },
  showStep: function() { // вывести текущую ступеньку
    alert( this.step );
    return this;
  }
};

ladder.up().up().down().up().up().up().down().showStep(); // 3

 */


/* 
var calculator = {
  read: function() {
    this.a = +prompt("a","");
    this.b = +prompt("b","");
  },
  sum: function() {
    return this.a + this.b;
  },
  mul: function() {
    return this.a * this.b;
  }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
 */

/* 
var user = {
    name: "Вася",
    hi: function() { alert(this.name); },
    bye: function() { alert("Пока"); }
  };
  var name = "aaaaa";  
  user.hi(); // Вася (простой вызов работает)


  
  // а теперь вызовем user.hi или user.bye в зависимости от имени
  (user.name == "Вася" ? user.hi : user.bye)(); // undefined
 */
/*
var a = 5;

function f() {
  console.log('внутри функции a = ' + a); // что выведет: 5 или undefined? - 5
  a = 777; // а так что поменяется, внешняя или внутренняя a?

  var obj = {
    a: 10
  }

  with(obj) {
    var a = 7; // как изменится вывод, если убрать 'var'?
  }

  console.log('obj.a после with = ' + obj.a); // что выведет: 10 или 7?
  console.log('внутри функции после with, a  = ' + a); // что выведет: 777 или 7?
}

f();

console.log('после f() внешняя а  = ' + a); // что выведет: 5, 777 или 7?
*/

/*

function f() {
  var value = Math.random();

  return function() { return value; };
}

// 3 функции, каждая ссылается на свой объект переменных,
// каждый со своим значением value
var arr = [f(), f(), f()];

console.log( arr[0]() );
console.log( arr[1]() );
console.log( arr[2]() );

*/

/*
(function () {

  var message = "Привет";

  function showMessage() {
    alert( message );
  }

  showMessage();

})();
*/


/*
// function makeArmy() {
//
//   var shooters = [];
//
//   for (var i = 0; i < 10; i++) {
//
//     var shooter = new Function('', 'console.log( ' + i +' )');
//
//     shooters.push(shooter);
//   }
//
//   return shooters;
// }

// function makeArmy() {
//
//   var shooters = [];
//
//   for (var i = 0; i < 10; i++) {
//
//     var shooter = function me() {
//       console.log(me.i);
//     };
//
//     shooter.i = i;
//
//     shooters.push(shooter);
//   }
//
//   return shooters;
// }

function makeArmy() {
  var shooters = [];

  for (var i = 0; i < 10; i++)(function (i) {
    var shooter = function () {
      alert(i);
    };

    shooters.push(shooter)

  })(i);

  return shooters;

}

var army = makeArmy();

army[0](); // стрелок выводит 10, а должен 0
army[5](); // стрелок выводит 10...
army[8](); // стрелок выводит 10...
// .. все стрелки выводят 10 вместо 0,1,2...9

*/



/*
function filter(arr, func) {
  var result = [];

  for(var i = 0; i < arr.length; i++) {
    var val = arr[i];

    if ( func(val) ) {
      result.push( arr[i] );
    }
    
  };

  return result;
};

function inBetween(a, b) {
  return function (x) {
    return x >= a && x <= b;
  }
}

function inArray(arr) {

  return function (x) {

    for (var i = 0; i < arr.length; i++) {

        if ( x === arr[i] ) {
          return true;
        };

    };

    return false;

  };

};


var arr = [1, 2, 3, 4, 5, 6, 7];

console.log(filter(arr, function(a) {
  return a % 2 == 0;
})); // 2,4,6

console.log( filter(arr, inBetween(3, 6)) ); // 3,4,5,6

console.log( filter(arr, inArray([1, 2, 10])) ); // 1,2
*/

/*
var users = [{
  name: "Вася",
  surname: 'Иванов',
  age: 20
}, {
  name: "Петя",
  surname: 'Чапаев',
  age: 25
}, {
  name: "Маша",
  surname: 'Медведева',
  age: 18
}];


users.sort(byField('name'));
users.forEach(function(user) {
  console.log( user.name );
}); // Вася, Маша, Петя

users.sort(byField('age'));
users.forEach(function(user) {
  console.log( user.name );
}); // Маша, Вася, Петя

function byField(field) {
  return function (a, b) {
    return a[field] > b[field] ? 1 : -1;
  };
}
*/


/*
function makeBuffer() {
  var string = "";

  function Buffer(value) {
    if (value !== undefined) {
      string += value;
    } else {
      return string;
    }
  };

  Buffer.clear = function () {
    string = "";
  };

  return Buffer;

};

var buffer1 = makeBuffer();

// добавить значения к буферу
buffer1('Замыкания');
buffer1(' Использовать');
buffer1(' Нужно!');

// получить текущее значение
console.log( buffer1() ); // Замыкания Использовать Нужно!

var buffer2 = makeBuffer();
buffer2(0);
buffer2(1);
buffer2(0);

console.log( buffer2() ); // '010'

var buffer3 = makeBuffer();

buffer3("Тест");
buffer3(" тебя не съест ");
console.log( buffer3() ); // Тест тебя не съест

buffer3.clear();

console.log( buffer3() ); // ""
*/


/*
function sum(a) {
  return function (b) {
    return a + b;
  }
}

console.log( sum(1)(2) );
console.log( sum(5)(-1) );
*/

/*
var test = 42;

function a() {
  console.log(test);
}

function b() {
  var test = 13;
  a();
}

b(); // в этой строке мы запускаем функцию b, которая запускает функцию a.
*/

/*
var a = 5

(function() {
  alert(a)
})()
*/

/*
function test() {

  alert( window );

  window = 5;

  alert( window );
}

test()
*/


/*
function makeCounter() {
  var currentCount = 1;

  return function() {
    return currentCount++;
  };
}

var counter = makeCounter(); // [[Scope]] -> {currentCount: 1}

console.log( counter() ); // 1, [[Scope]] -> {currentCount: 1}
console.log( counter() ); // 2, [[Scope]] -> {currentCount: 2}
console.log( counter() ); // 3, [[Scope]] -> {currentCount: 3}
*/

/*

function formatDateString(date) {
  var arrDate  = [
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  ];

  arrDate[1] += 1;

  for(var i = 0; i < arrDate.length; i++) {

    arrDate[i] += "";

    if (arrDate[i].length === 1) {
      arrDate[i] = "0" + arrDate[i];
    };

    if (arrDate[i].length === 4) {
      arrDate[i] = arrDate[i].slice(2);
    };

  };

  return arrDate[2] + "." + arrDate[1] + "." + arrDate[0] + " "
    + arrDate[3] + ":" + arrDate[4];
};

function formatDate(date) {
  var dateNow    = new Date(),
      difference = dateNow - date,
      result;

  if (difference < 1000) {

    result = "только что";

  } else if(difference < 1000 * 60) {

    result = difference / 1000 + " сек. назад";

  } else if (difference < 1000 * 60 * 60) {

    result = difference / (1000 * 60) + " мин. назад";

  } else {

    result = formatDateString(date);

  }

  return result;

};

console.log( formatDate(new Date(new Date - 1)) ); // "только что"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

console.log( formatDate(new Date(new Date - 86400 * 1000)) ); // вчерашняя дата в формате "дд.мм.гг чч:мм"

*/


/*
var d = new Date(2014, 0, 30); // 30 января 2014

console.log( formatDate(d) ); // '30.01.14'

function formatDate(date) {
  var arrDate  = [
    date.getFullYear(),
    date.getMonth(),
    date.getDate() ];

  arrDate[1] += 1;

  for(var i = 0; i < arrDate.length; i++) {

    arrDate[i] += "";

    if (arrDate[i].length === 1) {
      arrDate[i] = "0" + arrDate[i];
    };

    if (arrDate[i].length === 4) {
      arrDate[i] = arrDate[i].slice(2);
    };

  };

  return arrDate[2] + "." + arrDate[1] + "." + arrDate[0];
};
*/


/*console.log(
  getSecondsToTomorrow()
);

function getSecondsToTomorrow() {
  var today = new Date(),
      tomorrow = new Date(
        today.getFullYear(), today.getMonth(), today.getDate() + 1);

  return parseInt( (tomorrow - today) / 1000 );
};*/

/*

console.log( getSecondsToday() );

function getSecondsToday() {
  var dateEnd  = new Date(),
      dateStart = new Date(),
      milliseconds;

  dateStart.setHours(0,0,0,0);

  milliseconds = dateEnd - dateStart;

  return parseInt( milliseconds / 1000 );
};

*/

/*
console.log(
  getLastDayOfMonth(2012, 1)
); // = 29

function getLastDayOfMonth(year, month) {
  var monthPrev = month !== 11 ? month + 1 : 0,
      date = new Date(year, monthPrev, 0);

  return date.getDate();
}
*/
/*

var date = new Date(2015, 0, 2);

console.log( getDateAgo(date, 1) ); // 1, (1 января 2015)
console.log( getDateAgo(date, 2) ); // 31, (31 декабря 2014)
console.log( getDateAgo(date, 365) ); // 2, (2 января 2014)

function getDateAgo(date, days) {
  var dateNew = new Date( date );

  dateNew.setDate( dateNew.getDate() - days );

  return dateNew.getDate();
};

*/
/*

var date = new Date(2012, 0, 3);  // 3 янв 2012
alert( getLocalDay(date) );       // вторник, выведет 2

function getLocalDay(date) {
  return date.getDay() ? date.getDay() : 7;
};

*/
/*

var date = new Date(2012,0,3);  // 3 января 2012
alert( getWeekDay(date) );      // Должно вывести 'вт'

function getWeekDay(date) {
  var days = {
    0: "вс",
    1: "пн",
    2: "вт",
    3: "ср",
    4: "чт",
    5: "пт",
    6: "сб"
  };

  return days[date.getDay()];

};

*/
/*

console.log( new Date(2012, 01, 20, 03, 12, 00, 00) );

*/

/*

console.log( sum() ); //= 0
console.log( sum(1) ); //= 1
console.log( sum(1, 2) ); //= 3
console.log( sum(1, 2, 3) ); //= 6
console.log( sum(1, 2, 3, 4) ); //= 10


function sum() {
  var sum = 0;

  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  };

  return sum;
};

*/
/*

function f(x) {
  if (arguments.length) return 1;

  return 0;
}

console.log( f(undefined) ); // 1
console.log( f() ); // 0

*/


/*

var arr = [ 1, 2, 3, 4, 5 ];

console.log( getSums( arr ) ); // [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]

function getSums(arr) {
  var arrRes = [];

  arr.reduce(function (value, current) {

    value = value + current;

    arrRes.push( value );

    return value;
  }, 0);

  return arrRes;
};

*/
/*

var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = arr.map(function (item, i, arr) {
  return item.length;
});

console.log( arrLength ); // 4,5,2,5

*/

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



/*
function pow (x, n) {
  var result = 1;

  for (var i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

var x = prompt("x?", '');
var n = prompt("n?", '');

if (n < 0) {
  alert('Степень ' + n + 'не поддерживается, введите целую степень, большую 0');
} else {
  alert( pow(x, n) );
}
*/

// Как правило, лучше располагать функции под кодом, который их использует.
// Дело в том, что при чтении такого кода мы хотим знать в первую очередь, что
// он делает, а уже затем какие функции ему помогают.
// Лучше быстро обработать простые случаи, вернуть результат, а дальше разбираться со сложным,
// без дополнительного уровня вложенности.
// Вставляйте дополнительный перевод строки туда, где это сделает код более читаемым.
// Не должно быть более 9 строк кода подряд без вертикального отступа.


/* 
(function g() { return 1; });

alert(g);

 */

//Если функция задана как Function Expression, ей можно дать имя.
//Оно будет доступно только внутри функции (кроме IE8-).
//Это имя предназначено для надёжного рекурсивного вызова функции, даже если она записана в другую переменную.


/* 
var f = function sayHi(name) {
  console.log( sayHi ); // изнутри функции - видно (выведет код функции)
};

//console.log( sayHi ); // снаружи - не видно (ошибка: undefined variable 'sayHi')

f();

 */
/* 
var results = [0,1];

function fib(n) {
  if (n === 0) return results[0];

  if (n === 1) return results[1];

  if (!results[n]) {
    results[n] = fib(n - 2) + fib(n - 1);
  }

  return results[n];
}

function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  var fib_1 = 0, 
      fib_2 = 1,
      fib;

  for (var i = 0; i < n; i++) {
    fib = fib_1 + fib_2;

    fib_2 = fib_1;
    fib_1 = fib;
  }

  return fib;
}

console.log( fib(1) ); // 1
console.log( fib(2) ); // 1
console.log( fib(3) ); // 2
console.log( fib(4) ); // 3
console.log( fib(5) ); // 5
console.log( fib(6) ); // 8
console.log( fib(7) ); // 13
console.log( fib(77)); // 5527939700884757

 */

/* 
function factorial(n) {
  if ( n === 1 ) return n;
  return n * factorial( n - 1 );
}

console.log ( factorial(1) ); // = 1
console.log ( factorial(2) ); // = 2
console.log ( factorial(3) ); // = 6
console.log ( factorial(4) ); // = 24
console.log ( factorial(5) ); // = 120
 */


/* 
function sumTo(n) {
  for (var i = 1; 1 < n; n--) {
    i += n;
  }
  return i;
}
function sumTo(n) {
  if ( n > 1 ) {
    return n + sumTo(n-1)
  }
  return n;
}
function sumTo(n) {
  return ( 1 + n ) * n / 2;
}
console.log( sumTo(1) ); // = 1
console.log( sumTo(2) ); // = 3
console.log( sumTo(3) ); // = 6
console.log( sumTo(4) ); // = 10
console.log( sumTo(100) ); // = 5050
console.log( sumTo(100000) ); // = 5000050000

 */


// Рекурсия - когда функция вызывает сама себя.
// Базис рекурсии - значение, на котором рекурсия заканчивается.
// Глубина рекурсии - общее количество вложенных вызовов (10 000). Глубина рекурсии равна максимальному числу контекстов, одновременно хранимых в стеке.
// Контекст выполнения – это служебная информация, которая соответствует текущему запуску функции. Она включает в себя локальные переменные функции и конкретное место в коде, на котором находится интерпретатор.


/* 
// Функциональное выражение, которое не записывается в переменную, называют анонимной функцией.

// Function Declaration – функция, объявленная в основном потоке кода.
// Function Expression – объявление функции в контексте какого-либо выражения, например присваивания.

var sum = new Function('a,b', ' return a+b; ');

var result = sum(1, 2);
alert( result ); // 3

 */

/* 
function pow(a,n) {
  var pow = a;
  for (var i = 1; i < n; i++) {
    pow = pow * a;
  }
  return pow;
}

var a = +prompt("a","");
var n = +prompt("n","");

alert ( pow(a,n) )

 */

/* 
function min(a,b) {
  return (a > b) ? b : a;
}

 */

/* 
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?') ;
}
function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?') ;
}

 */
/* 
var a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}

switch (a) {
  case 0:
    alert( 0 );
    break;
  case 1:
    alert( 1 );
    break;
  case 2:
  case 3:
    alert( '2,3' );
    break;
}

 */


/* 
switch (browser) {
  case 'IE':
    alert( 'О, да у вас IE!' );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Да, и эти браузеры мы поддерживаем' );
    break;

  default:
    alert( 'Мы надеемся, что и в вашем браузере все ок!' );
}
if ( browser === "IE" ) {
  alert( 'О, да у вас IE!' );
} else if ( browser === "Chrome" || browser === "Firefox" || browser === "Safari" || browser === "Opera" ) {
  alert( 'Да, и эти браузеры мы поддерживаем' );
} else {
  alert( 'Мы надеемся, что и в вашем браузере все ок!' );
}

 */

/* 
outer: for (var i = 2; i <= 10; i++) {
  for (var j = 2; j < i; j++) {
    if ( !(i % j) ) continue outer;
  }
  alert (i);
}

 */


/* 
var i = 0;
while ( i < 100 ) {
  i = +prompt("Введите число", "");
  if (!i || i == "") break;
}

 */
/* 
var i = 0;
while ( i < 3 ) {
  alert( "номер " + i + "!" );
  i++;
}

 */

/* 
for(var i = 2; i <= 10; i++) {
  if (!(i % 2)) {
    alert(i);
  }
}

 */
/* 
"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5
 = "$45"
"4" - 2
 = 2
"4px" - 2
 = NaN
7 / 0
 = Infinity
" -9\n" + 5 = " -9\n5"
" -9\n" - 5 = -14
5 && 2
 = 2
2 && 5
 = 5
5 || 0
 = 5
0 || 5 = 5
null + 1 = 1 // (3)
undefined + 1 = NaN // (4)
null == "\n0\n" = false // (5)
+null == +"\n0\n" = true // (6)

 */
/* 
var age = 12;
if ( !(age >= 14 && age <= 90) ) {

}

 */

/* 
var message, login;

message = 
(login == 'Вася')     ? 'Привет' :
(login == 'Директор') ? 'Здравствуйте' :
(login == '')         ? 'Нет логина' : 
'';

 */

/* 
result = (a + b < 4) ? 'Мало' : 'Много';

 */
/* 
var userName = prompt("Кто пришел?", "");

if (userName === null || userName === "" ) {
  alert("Вход отменён");

} else if(userName === "Админ") {

  var password = prompt("Пароль?", "");

  if (password === null || password === "" ) {
    alert("Вход отменён");
  } else if(password === "Чёрный Властелин") {
    alert("Добро пожаловать!");
  } else {
    alert("Пароль неверен");
  }

} else {

  alert("Я вас не знаю");

}

 */


/* 
var comparision = +prompt("Введите число", 0);

if (comparision === 0) {
  alert(0);
} else if (comparision < 1){
  alert(-1);
} else if (comparision > 0){
  alert(1);
} 

 */


/* 
var javaScriptName = prompt("Каково «официальное» название JavaScript?","");
if ( javaScriptName === "ECMAScript" ) {
  alert("Верно!");
} else {
  alert("Не знаете? «ECMAScript»!");
}

 */


/* 

var userName = prompt("Ваше имя?", "");
alert(userName);

 */

/* 
function isInteger(num) {
  return (num ^ 0) === num;
}

alert( isInteger(1) ); // true
alert( isInteger(1.5) ); // false
alert( isInteger(-0.5) ); // false

 */

/*

var str = "Проверка";

if (~str.indexOf("верка")) { // Сочетание "if (~...indexOf)" читается как "если найдено"
  alert( 'найдено!' );
}

*/

// Округление 12.345 ^ 0

/*

var ACCESS_ADMIN = 1;          // 00001
var ACCESS_GOODS_EDIT = 2;   // 00010
var ACCESS_GOODS_VIEW = 4;     // 00100
var ACCESS_ARTICLE_EDIT = 8; // 01000
var ACCESS_ARTICLE_VIEW = 16;  // 10000

var guest = ACCESS_ARTICLE_VIEW | ACCESS_GOODS_VIEW; // 10100
var editor = guest | ACCESS_ARTICLE_EDIT | ACCESS_GOODS_EDIT; // 11110
var admin = editor | ACCESS_ADMIN; // 11111

alert(editor & ACCESS_ADMIN); // 0, доступа нет
alert(editor & ACCESS_ARTICLE_EDIT); // 8, доступ есть

var check = ACCESS_GOODS_VIEW | ACCESS_GOODS_EDIT; // 6, 00110

alert( admin & check ); // не 0, значит есть доступ к просмотру ИЛИ изменению

*/



/*

var access = parseInt("11000", 2);
alert(access);
var access2 = access.toString(2);
alert( access2 );

*/


/*

var ourPlanetName = "Земля";
var userName = "Петя";

*/



/*

var admin, name;
name = "Василий";
admin = name;
alert(admin);

*/

/*

alert("Я – JavaScript!");

function addScript(src){
    var script = document.createElement('script');
    script.src = src;
    script.async = false; // чтобы гарантировать порядок
    document.head.appendChild(script);
}

addScript('1.js'); // загружаться эти скрипты начнут сразу
addScript('2.js'); // выполнятся, как только загрузятся
addScript('3.js'); // но, гарантированно, в порядке 1 -> 2 -> 3

*/



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
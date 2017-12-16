

try {
  
    console.log('Начало блока try');  // (1) <--
  
    lalala; // ошибка, переменная не определена!
  
    console.log('Конец блока try');  // (2)
  
  } catch(e) {
  
    console.log('name: ' + e.name + "\n message: " + e.message + "\n stack: " + e.stack); // (3) <--
  
  }
  
  console.log("Потом код продолжит выполнение...");






/* 
//Eval-калькулятор

function calculator() {
  var ev, result;

  ev = prompt("Выражение: ", "");
  result = eval(ev);

  console.log(result);
  return result;
}

calculator();

 */

/* 
function throttle(func, ms) {
  
    var isThrottled = false,
      savedArgs,
      savedThis;
  
    function wrapper() {
  
      if (isThrottled) { // (2)
        savedArgs = arguments;
        savedThis = this;
        return;
      }
  
      func.apply(this, arguments); // (1)
  
      isThrottled = true;
  
      setTimeout(function() {
        isThrottled = false; // (3)
        if (savedArgs) {
          wrapper.apply(savedThis, savedArgs);
          savedArgs = savedThis = null;
        }
      }, ms);
    }
  
    return wrapper;
}
 */

/* 
var fn = debounce(f, 1000);

fn(1); // вызов отложен на 1000 мс
fn(2); // предыдущий отложенный вызов игнорируется, текущий (2) откладывается на 1000 мс

// через 1 секунду будет выполнен вызов f(1)

setTimeout( function() { fn(3) }, 1100); // через 1100 мс отложим вызов еще на 1000 мс
setTimeout( function() { fn(4) }, 1200); // игнорируем вызов (3)

// через 2200 мс от начала выполнения будет выполнен вызов f(4)


function f() {
  console.log("f()");
 }

function debounce(f, ms){

  var notRun = false,
      timerId;

  return function() {

    var savedThis = this,
        savedArguments = arguments;

    if ( notRun ) {

      stack = true;
      
        timerId = setTimeout(function(){
          
            f.apply(savedThis, arguments);
            console.log(ms)
            stack = false;
    
        }, ms);

    } else {

      stack = true;

      clearTimeout(timerId);
      
      timerId = setTimeout(function(){
        
          f.apply(savedThis, savedArguments);
          console.log(ms)
          stack = false;
  
      }, ms);

    }

  }

}
 */

/* 
var f1000 = delay(f, 1000);
var f1500 = delay(f, 1500);

f1000("тест"); // выведет "тест" через 1000 миллисекунд
f1500("тест2"); // выведет "тест2" через 1500 миллисекунд


function f(x) {
  console.log( x );
}

function delay(f, time){

  return function() {
    var savedThis = this;
    var savedArgs = arguments;

    setTimeout(function() {
    
      f.apply(savedThis, savedArgs);
    
    }, time);

  }
  
};
 */

/* 
printNumbersInterval();

function printNumbersInterval() {

  var i      = 0, 
      finish = 20;

  var timerId = setTimeout(function print() {

    console.log( ++i );

    if( i == finish ) {

      clearTimeout( timerId );

    } else {

      timerId = setTimeout(print, 100);

    }

  }, 100);

};
 */

/* 
printNumbersInterval();

function printNumbersInterval(){

  var count = 20;

  var timerId = setInterval(function tick(){

    console.log( 20 - (--count) );

    if ( !count ) {
      clearInterval( timerId );
    }

  }, 100);

};
 */


/* 
// setTimeout - внутренняя ссылка исчезнет после исполнения функции
// минимальная задержка 4s
// setInterval - ссылка исчезнет при очистке таймера
 */
/* 
//var timerId = setTimeout(func / code, delay[, arg1, arg2 ...])
// clearTimeout(timerId);
// Таймеры это надстройка над java script
//-- setInterval, clearInterval()
// Модальные окна замораживают время в chrome/safari/opera
// setInterval не гарантирует паузы во время исполнения
var timerId = setTimeout(function tick(){

  alert("тик");

  timerId = setTimeout(tick, 2000);

}, 2000);
 */
/* 
var leader = {
    name: "Василий Иванович"
  };
  
  var soldier = {
    name: "Петька"
  };
  
  // эти объекты ссылаются друг на друга!
  leader.soldier = soldier;
  soldier.leader = leader;
  
  var team = [leader, soldier];

  
  console.log( team[0] )
   */

/* 
var leader = {
    name: "Василий Иванович",
    age: 35
};

var js =  JSON.stringify( leader);

console.log( js );

js = JSON.parse(js);

console.log( js );
 */

/* 
var str = '{"title":"Конференция","date":"2014-11-30T12:00:00.000Z"}';

var event = JSON.parse(str, function(key, value){
    
    if (key == 'date') return new Date(value);

    return value;

});

alert( event.date.getDate() )
 */
/* 
 function formatDate(date) {

    if (typeof date == 'number') {
      // перевести секунды в миллисекунды и преобразовать к Date
      date = new Date(date * 1000);
    } else if (typeof date == 'string') {
      // строка в стандартном формате автоматически будет разобрана в дату
      date = new Date(date); 
    } else if (Array.isArray(date)) { 
      date = new Date(date[0], date[1], date[2]);
    }
    // преобразования для поддержки полиморфизма завершены, 
    // теперь мы работаем с датой (форматируем её)
  
    return date.toLocaleString("ru", {day: '2-digit', month: '2-digit', year: '2-digit'});
  
  }


console.log( formatDate('2011-10-02') ); // 02.10.11
console.log( formatDate(1234567890) ); // 14.02.09
console.log( formatDate([2014, 0, 1]) ); // 01.01.14
console.log( formatDate(new Date(2014, 0, 1)) ); // 01.01.14
console.log( formatDate({}) ); // formatDate error!
 */

/* 
function sayHi(who) {

    if( who.forEach ) {

        who.forEach(sayHi);

    } else {

        alert( "Привет: " + who );

    }
}
 */

/* 
function getClass(obj) {
    return {}.toString.call(obj).slice(8, -1);
  }
  
  console.log( getClass(new Date) ); // Date
  console.log( getClass([1, 2, 3]) ); // Array
 */

/* 
console.log( typeof 1 );         // 'number'
console.log( typeof true );      // 'boolean'
console.log( typeof "Текст" );   // 'string'
console.log( typeof undefined ); // 'undefined'
console.log( typeof null );      // 'object' (ошибка в языке)
console.log( typeof alert );     // 'function'

console.log( typeof {} ); // 'object'
console.log( typeof [] ); // 'object'
console.log( typeof new Date ); // 'object'
 */
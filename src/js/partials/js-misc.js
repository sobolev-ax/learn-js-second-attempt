

function Machine(power) {
  this._power = power;
  this._enabled = false;

  var self = this;

  this.enable = function() {
    self._enabled = true;
  };

  this.disable = function() {
    console.log("Machine is disable")
    self._enabled = false;
  };
}

function Fridge(power) {
  Machine.apply(this, arguments);

  var self = this;

  self.food = [];

  var parentDisable = this.disable;
  
  this.disable = function() {
    if ( isEmpty() ) {
      parentDisable();
    } else {
      console.log("Выключить нельзя, в холодильнике еда")
    }
  };

  this.addFood = function(){
    if ( !self._enabled ) {
      throw new Error("Ошибка, холодильник выключен")
    }

    for (var i = 0; i < arguments.length; i++) {
      if ( !isFull() ) {
        self.food.push( arguments[i] );
      } else {
        throw new Error("Ошибка, слишком много еды")
      }
    }
  }

  this.getFood = function(){
    return self.food.slice();
  }

  this.filterFood = function(func){
    var result = [];

    for (var i = 0; i < self.food.length; i++) {
      if( func( self.food[i] ) ) result.push( self.food[i] );
    }

    return result
  }

  this.removeFood = function(item){
    var index = self.food.indexOf(item);

    console.log("removeFood: " + index)

    if (index != -1) {
      self.food.splice(index, 1);
    }
  }

  function maxLength() {
    return self._power / 100
  }

  function isFull() {
    if ( self.food.length >= maxLength() ) {
      return true;
    }

    return false;
  }

  function isEmpty() {
    if ( self.food.length === 0 ) {
      return true;
    }
    return false;
  }
}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("кус-кус");
fridge.disable(); // ошибка, в холодильнике есть еда



/* 
function Machine(power) {
  this._power = power;
  this._enabled = false;

  var self = this;

  this.enable = function() {
    self._enabled = true;
  };

  this.disable = function() {
    self._enabled = false;
  };
}

function Fridge(power) {
  Machine.apply(this, arguments);

  var self = this;

  self.food = [];

  this.addFood = function(){
    if ( !self._enabled ) {
      throw new Error("Ошибка, холодильник выключен")
    }

    for (var i = 0; i < arguments.length; i++) {
      if ( !isFull() ) {
        self.food.push( arguments[i] );
      } else {
        throw new Error("Ошибка, слишком много еды")
      }
    }
  }

  this.getFood = function(){
    return self.food.slice();
  }

  this.filterFood = function(func){
    var result = [];

    for (var i = 0; i < self.food.length; i++) {
      if( func( self.food[i] ) ) result.push( self.food[i] );
    }

    return result
  }

  this.removeFood = function(item){
    var index = self.food.indexOf(item);

    console.log("removeFood: " + index)

    if (index != -1) {
      self.food.splice(index, 1);
    }
  }

  function maxLength() {
    return self._power / 100
  }

  function isFull() {
    if ( self.food.length >= maxLength() ) {
      return true;
    }

    return false;
  }
}

var fridge = new Fridge(500);

fridge.enable();

fridge.addFood({
  title: "котлета",
  calories: 100
});
fridge.addFood({
  title: "сок",
  calories: 30
});
fridge.addFood({
  title: "зелень",
  calories: 10
});
fridge.addFood({
  title: "варенье",
  calories: 150
});

fridge.removeFood("нет такой еды"); // без эффекта
console.log( fridge.getFood().length ); // 4

var dietItems = fridge.filterFood(function(item) {
  return item.calories < 50;
});

dietItems.forEach(function(item) {
  console.log( item.title ); // сок, зелень
  fridge.removeFood(item);
});
console.log("-------------------------")

console.log( fridge.getFood() );
console.log( fridge.getFood().length ); // 2
 */

/* 
function Machine(power) {
  this._power = power;
  this._enabled = false;

  var self = this;

  this.enable = function() {
    self._enabled = true;
  };

  this.disable = function() {
    self._enabled = false;
  };
}

function Fridge(power) {
  Machine.apply(this, arguments);

  var self = this;

  self.food = [];

  this.addFood = function(){
    if ( !self._enabled ) {
      throw new Error("Ошибка, холодильник выключен")
    }

    for (var i = 0; i < arguments.length; i++) {
      if ( !isFull() ) {
        self.food.push( arguments[i] );
      } else {
        throw new Error("Ошибка, слишком много еды")
      }
    }
  }

  this.getFood = function(){
    return self.food.slice();
  }

  function maxLength() {
    return self._power / 100
  }

  function isFull() {
    if ( self.food.length >= maxLength() ) {
      return true;
    }

    return false;
  }
}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "варенье");

var fridgeFood = fridge.getFood();
console.log( fridgeFood ); // котлета, сок, варенье

// добавление элементов не влияет на еду в холодильнике
fridgeFood.push("вилка", "ложка");

console.log( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье */

/* 
function Machine(power) {

  this._enabled = false;

  this.enable = function() {
    this._enabled = true;
  };

  this.disable = function() {
    this._enabled = false;
  };
}

function CoffeeMachine(power) {
  Machine.apply(this, arguments);

  var waterAmount = 0,
      timerId;

  var parentEnable = this.enable;
  var parentDisable = this.disable;

  this.enable = function() {
    parentEnable.call(this);
  };

  this.disable = function() {
    parentDisable.call(this);
    clearTimeout(timerId);
    timerId = null;
  };

  this.setWaterAmount = function(amount) {
    waterAmount = amount;
  };

  function onReady() {
    alert('Кофе готово!');
  }

  this.run = function() {
    if (this._enabled) {
      timerId = setTimeout(function() {
        timerId = null;
        onReady()
      }, 1000)
    } else { 
      throw new Error("Кофеварка выключена")
    };
  };

}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run();
coffeeMachine.disable(); // остановит работу, ничего не выведет
 */


/* 
 function Machine(power) {
  this._enabled = false;

  this.enable = function() {
    this._enabled = true;
  };

  this.disable = function() {
    this._enabled = false;
  };
}

function CoffeeMachine(power) {
  Machine.apply(this, arguments);

  var waterAmount = 0;

  this.setWaterAmount = function(amount) {
    waterAmount = amount;
  };

  function onReady() {
    alert('Кофе готово!');
  }

  this.run = function() {
    if (this._enabled) setTimeout(onReady, 1000);
    else  throw new Error("Кофеварка выключена");
  };

}

var coffeeMachine1 = new CoffeeMachine(10000);
coffeeMachine1.run(); // ошибка, кофеварка выключена!

var coffeeMachine2 = new CoffeeMachine(10000);
coffeeMachine2.enable();
coffeeMachine2.run(); // ...Кофе готов!
 */

/* 
function Machine(power) {
  this._power = power; // (1)

  this._enabled = false;

  this.enable = function() {
    this._enabled = true;
  };

  this.disable = function() {
    this._enabled = false;
  };
}

function CoffeeMachine(power) {
  Machine.apply(this, arguments); // (2)

  alert( this._enabled ); // false
  alert( this._power ); // 10000
}

var coffeeMachine = new CoffeeMachine(10000);
 */


/* 
function CoffeeMachine(power, capacity) {
  var waterAmount = 0;

  var timerId;

  this.isRunning = function() {
    return !!timerId;
  };

  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.setWaterAmount = function(amount) {
    // ... проверки пропущены для краткости
    waterAmount = amount;
  };

  this.getWaterAmount = function(amount) {
    return waterAmount;
  };

  function onReady() {
    alert( 'Кофе готов!' );
  }

  this.setOnReady = function(newOnReady) {
    onReady = newOnReady;
  };

  this.run = function() {
    timerId = setTimeout(function() {
      timerId = null;
      onReady();
    }, getTimeToBoil());
  };

}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

alert( 'До: ' + coffeeMachine.isRunning() ); // До: false

coffeeMachine.run();
alert( 'В процессе: ' + coffeeMachine.isRunning() ); // В процессе: true

coffeeMachine.setOnReady(function() {
  alert( "После: " + coffeeMachine.isRunning() ); // После: false
});

 */


/* 
function CoffeeMachine(power, capacity) {
  var waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  var startTime, nowTime, timerTime;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.setWaterAmount = function(amount) {
    waterAmount = amount;
  };

  this.getWaterAmount = function(amount) {
    return waterAmount;
  };

  function onReady() {
    alert( 'Кофе готов!' );
  }

  this.isRunning = function() {
    nowTime = new Date();

    if (nowTime - startTime < timerTime) return true;

    return false;
  }

  this.setOnReady = function(newOnReady) {
    onReady = newOnReady;
  };

  this.run = function() {

    timerTime = getTimeToBoil();
    startTime = new Date();

    setTimeout(function() {
      onReady();
    }, timerTime);
  };

}


var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

alert( 'До: ' + coffeeMachine.isRunning() ); // До: false

coffeeMachine.run();
alert( 'В процессе: ' + coffeeMachine.isRunning() ); // В процессе: true

coffeeMachine.setOnReady(function() {
  alert( "После: " + coffeeMachine.isRunning() ); // После: false
});

 */

/* 
function CoffeeMachine(power, capacity) {
  var waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.setWaterAmount = function(amount) {
    // ... проверки пропущены для краткости
    waterAmount = amount;
  };

  this.getWaterAmount = function(amount) {
    return waterAmount;
  };

  function onReady() {
      alert( 'Кофе готов!' );
    }

  this.run = function() {
    setTimeout(function(){
      onReady()
    }, getTimeToBoil());
  };

  this.setOnReady = function(func){
    onReady = func.bind(this);
  }

}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(150);

coffeeMachine.setOnReady(function() {
  var amount = coffeeMachine.getWaterAmount();
  alert( 'Готов кофе: ' + amount + 'мл' ); // Кофе готов: 150 мл
});

coffeeMachine.run();
 */


/*
function CoffeeMachine(power, capacity) {
  var waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.setWaterAmount = function(amount) {
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить больше, чем " + capacity);
    }

    waterAmount = amount;
  };

  function onReady() {
    alert( 'Кофе готов!' );
  }

  this.run = function() {
    setTimeout(onReady, getTimeToBoil());
  };

  this.addWater = function(value) {
    this.setWaterAmount(waterAmount + value)
  }

}

var coffeeMachine = new CoffeeMachine(100000, 400);
coffeeMachine.addWater(200);
coffeeMachine.addWater(100);
coffeeMachine.addWater(300); // Нельзя залить больше, чем 400
coffeeMachine.run();
 */


/* 
function CoffeeMachine(power, capacity) {
  var waterAmount;
  
  this.setWaterAmount = function(amount) {
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить воды больше, чем " + capacity);
    }

    waterAmount = amount;
  };

  this.getWaterAmount = function() {
    return waterAmount;
  };

  this.getPower = function(){
    return power;
  }

}

var machine  = new CoffeeMachine(100, 150);

alert( machine.getPower() );
 */
/* 
function User() {
  var firstName,
      surname,
      self = this;

  this.setFirstName = function(str) {
    firstName = str;
  }

  this.setSurname = function(str) {
    surname = str;
  }

  this.getFullName = function() {
    return firstName + " " + surname;
  }
}

var user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");

alert( user.getFullName() ); // Петя Иванов
 */

/* 
function CoffeeMachine(power, capacity) {
  var waterAmount = 0;

  this.waterAmount = function(amount) {
    // вызов без параметра, значит режим геттера, возвращаем свойство
    if (!arguments.length) return waterAmount;

    // иначе режим сеттера
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить воды больше, чем " + capacity);
    }

    waterAmount = amount;
  };

}

var coffeeMachine = new CoffeeMachine(1000, 500);

// пример использования
coffeeMachine.waterAmount(450);
alert( coffeeMachine.waterAmount() ); // 450

 */

/* 
function CoffeeMachine(power, capacity) { // capacity - ёмкость кофеварки
  var waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  // "умная" установка свойства
  this.setWaterAmount = function(amount) {
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить воды больше, чем " + capacity);
    }

    waterAmount = amount;
  };

  this.getWaterAmount = function() {
    return waterAmount;
  };

  function onReady() {
    alert( 'Кофе готов!' );
  }

  this.run = function() {
    setTimeout(onReady, getTimeToBoil());
  };

}

var coffeeMachine = new CoffeeMachine(1000, 500);
try {
  coffeeMachine.setWaterAmount(600); // упс, ошибка!
} catch (e) {
  alert(e)
}
 */


/* 
function CoffeeMachine(power) {
  this.waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  var self = this,
      timerId;

  function getBoilTime() {
    return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  function onReady() {
    alert( 'Кофе готово!' );
  }

  this.run = function() {
    timerId = setTimeout(onReady, getBoilTime());
  };

  this.stop = function() {
    clearTimeout(timerId);
  };

}

var coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();
coffeeMachine.stop(); // кофе приготовлен не будет
 */

/* 
"use strict"

function CoffeeMachine(power) {

  this.waterAmount = 0;

  // физическая константа - удельная теплоёмкость воды для getBoilTime
  var WATER_HEAT_CAPACITY = 4200;

  // расчёт времени для кипячения
  var getBoilTime = function() {
    return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power; // ошибка!
  }.bind(this);

  // что делать по окончании процесса
  function onReady() {
    alert( 'Кофе готов!' );
  }

  this.run = function() {
    setTimeout(onReady, getBoilTime.call(this));
  };

}

var coffeeMachine = new CoffeeMachine(1000);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();
 */

/* 
"use strict"

function CoffeeMachine(power) {

  this.waterAmount = 0;

  // физическая константа - удельная теплоёмкость воды для getBoilTime
  var WATER_HEAT_CAPACITY = 4200;

  // расчёт времени для кипячения
  function getBoilTime() {
    return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power; // ошибка!
  }

  // что делать по окончании процесса
  function onReady() {
    alert( 'Кофе готов!' );
  }

  this.run = function() {
    setTimeout(onReady, getBoilTime.call(this));
  };

}

var coffeeMachine = new CoffeeMachine(1000);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();
 */

/* 

try {
  var data = '{ "name": "Вася", "age": 30 }';

                                                                  try {
                                                                    // ...
                                                                    try {
                                                                      // ...
                                                                      blabla(); // ошибка!
                                                                    } catch (e) {
                                                                      // ...
                                                                      alert(e.name)
                                                                      if (e.name != 'SyntaxError') {
                                                                        throw e; // пробрасываем
                                                                      }
                                                                    }
                                                                    blabla(); // ошибка!
                                                                  } catch (e) {
                                                                    // ...
                                                                    alert(e.name)
                                                                    if (e.name != 'SyntaxError') {
                                                                      throw e; // пробрасываем
                                                                    }
                                                                  }
} catch (e) {
  alert( "Поймал во внешнем catch: " + e ); // ловим
}
 */


/* 
try {
  
    console.log('Начало блока try');  // (1) <--
  
    lalala; // ошибка, переменная не определена!
  
    console.log('Конец блока try');  // (2)
  
  } catch(e) {
  
    console.log('name: ' + e.name + "\n message: " + e.message + "\n stack: " + e.stack); // (3) <--
  
  }
  
  console.log("Потом код продолжит выполнение...");
 */





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
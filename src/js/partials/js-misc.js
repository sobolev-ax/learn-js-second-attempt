


/* 
var eventMixin = {
  on: function(eventName, handler) {
    if (!this._eventHandlers) this._eventHandlers = {};
    if (!this._eventHandlers[eventName]) {
      this._eventHandlers[eventName] = [];
    }
    this._eventHandlers[eventName].push(handler);
  },


  off: function(eventName, handler) {
    var handlers = this._eventHandlers && this._eventHandlers[eventName];
    if (!handlers) return;
    for(var i=0; i<handlers.length; i++) {
      if (handlers[i] == handler) {
        handlers.splice(i--, 1);
      }
    }
  },


  trigger: function(eventName ) {

    if (!this._eventHandlers || !this._eventHandlers[eventName]) {
      return; // обработчиков для события нет
    }

    // вызвать обработчики
    var handlers = this._eventHandlers[eventName];
    for (var i = 0; i < handlers.length; i++) {
      handlers[i].apply(this, [].slice.call(arguments, 1));
    }

  }
};

// Класс Menu с примесью eventMixin
function Menu() {
 
}

for(var key in eventMixin) {
  Menu.prototype[key] = eventMixin[key];
}

// Генерирует событие select при выборе значения
Menu.prototype.choose = function(value) {
  this.trigger("select", value);
}

// Создадим меню
var menu = new Menu();

// При наступлении события select вызвать эту функцию
menu.on("select", function(value) {
  alert("Выбрано значение " + value);
});

// Запускаем выбор (событие select вызовет обработчики)
menu.choose("123");
 */
/* 
// примесь
var sayHiMixin = {
  sayHi: function() {
    alert("Привет " + this.name);
  },
  sayBye: function() {
    alert("Пока " + this.name);
  }
};

// использование:
function User(name) {
  this.name = name;
}

// передать методы примеси
for(var key in sayHiMixin) User.prototype[key] = sayHiMixin[key];

// User "умеет" sayHi
new User("Вася").sayHi(); // Привет Вася
 */

/* 
function FormatError(message) {
  this.name = "FormatError";

  this.message = message;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }

}

FormatError.prototype = Object.create(SyntaxError.prototype);
FormatError.prototype.constructor = FormatError;

// Использование

var err = new FormatError("ошибка форматирования");

alert( err.message ); // ошибка форматирования
alert( err.name ); // FormatError
alert( err.stack ); // стек на момент генерации ошибки

alert( err instanceof SyntaxError ); // true
 */


/* 
// Объявление
function PropertyError(property) {
  this.name = "PropertyError";

  this.property = property;
  this.message = "Ошибка в свойстве " + property;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor); // (*)
  } else {
    this.stack = (new Error()).stack;
  }

}

PropertyError.prototype = Object.create(Error.prototype);
PropertyError.prototype.constructor = PropertyError;

// Генерация ошибки
function readUser(data) {

  var user = JSON.parse(data);

  if (!user.age) {
    throw new PropertyError("age");
  }

  if (!user.name) {
    throw new PropertyError("name");
  }

  return user;
}

// Запуск и try..catch

try {
  var user = readUser('{ "age": 25 }');
} catch (err) {
  if (err instanceof PropertyError) {
    if (err.property == 'name') {
      // если в данном месте кода возможны анонимы, то всё нормально
      alert( "Здравствуйте, Аноним!" );
    } else {
      alert( err.message ); // Ошибка в свойстве ...
    }
  } else if (err instanceof SyntaxError) {
    alert( "Ошибка в синтаксисе данных: " + err.message );
  } else {
    throw err; // неизвестная ошибка, не знаю что с ней делать
  }
}

 */

/* 
function f() {
  alert( new Error().stack );
}

f(); 
 */
/* 
function Animal() {}

function Rabbit() {}
Rabbit.prototype = Object.create(Animal.prototype);

var rabbit = new Rabbit();

alert( rabbit.__proto__ == Rabbit.prototype );
alert( rabbit.__proto__.__proto__ == Animal.prototype );
alert( rabbit.__proto__.__proto__.__proto__ == Object.prototype );

 */


/* 
function A() {}

function B() {}

A.prototype = B.prototype = {};

var a = new A();

alert( a.__proto__ == B.prototype ); // true

 */

// Не друзья: instanceof и фреймы

/* 
function Animal() {}

function Rabbit() {}
Rabbit.prototype = Object.create(Animal.prototype);

var rabbit = new Rabbit();

alert( rabbit.constructor == Rabbit ); // что выведет?
 */
/* 
function Menu(state) {
  this._state = state || Menu.STATE_CLOSED;
};

Menu.STATE_OPEN = 1;
Menu.STATE_CLOSED = 0;

Menu.prototype.open = function() {
  this._state = Menu.STATE_OPEN;
};

Menu.prototype.close = function() {
  this._state = Menu.STATE_CLOSED;
};

Menu.prototype._stateAsString = function() {
  switch (this._state) {
    case Menu.STATE_OPEN:
      return 'открыто';

    case Menu.STATE_CLOSED:
      return 'закрыто';
  }
};

Menu.prototype.showState = function() {
  console.log(this._stateAsString());
};


function AnimatingMenu(state) {
  Menu.apply(this, arguments);
}

AnimatingMenu.STATE_ANIMATING = 2;

AnimatingMenu.prototype = Object.create(Menu.prototype);
AnimatingMenu.prototype.constructor = AnimatingMenu;

AnimatingMenu.prototype.open = function() {
  this._state = this.STATE_ANIMATING;

  var self = this;

  this._timerId = setTimeout(function(){
    Menu.prototype.open.call(self);
  }, 1000);
};

AnimatingMenu.prototype.close = function() {
  clearTimeout(this._timerId);
  Menu.prototype.close.apply(this);
};

AnimatingMenu.prototype._stateAsString = function() {
  switch (this._state) {
    case this.STATE_ANIMATING:
      return 'анимация';

    default:
      return Menu.prototype._stateAsString.call(this);
  }
};

// использование..

var menu = new AnimatingMenu();

menu.showState(); // закрыто

menu.open();
menu.showState(); // анимация

setTimeout(function() {
  menu.showState(); // открыто

  menu.close();
  menu.showState(); // закрыто (закрытие без анимации)
}, 1000);
 */

/* function Clock(options) {
  this._template = options.template;
}

Clock.prototype._render = function render() {
  var date = new Date();

  var hours = date.getHours();
  if (hours < 10) hours = '0' + hours;

  var min = date.getMinutes();
  if (min < 10) min = '0' + min;

  var sec = date.getSeconds();
  if (sec < 10) sec = '0' + sec;

  var output = this._template.replace('h', hours).replace('m', min).replace('s', sec);

  console.log(output);
};

Clock.prototype.stop = function() {
  clearInterval(this._timer);
};

Clock.prototype.start = function() {
  this._render();
  var self = this;
  this._timer = setInterval(function() {
    self._render();
  }, 1000);
};

function extend(Child, Parent) {
  Child.prototype = inherit(Parent.prototype);
  Child.prototype.constructor = Child;
  Child.parent = Parent.prototype;
}

function inherit(proto) {
  function F() {}
  F.prototype = proto;
  return new F;
}

function ClockInterval(options) {
  Clock.apply(this, arguments);

  this._interval = options.interval ? options.interval: 1000;
}

extend(ClockInterval, Clock)

ClockInterval.prototype.start = function() {
  this._render();
  var self = this;
  this._timer = setInterval(function() {
    self._render();
  }, this._interval);
};



var clock = new Clock({
  template: 'h:m:s'
});
clock.start();

var clockInterval = new ClockInterval({
  template: 'h:m:s',
  interval: 500
});
clockInterval.start();
 */

/* 
function Clock(options) {

  this._template = options.template;

}

Clock.prototype._render = function() {
  var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var min = date.getMinutes();
    if (min < 10) min = '0' + min;

    var sec = date.getSeconds();
    if (sec < 10) sec = '0' + sec;

    var output = this._template.replace('h', hours).replace('m', min).replace('s', sec);

    console.clear();
    console.log(output);
}

Clock.prototype.stop = function() {
  clearInterval(this.timer);
};

Clock.prototype.start = function() {
  var render = this._render.bind(this);
  render();
  this.timer = setInterval(render, 1000);
}

var clock = new Clock({
  template: 'h:m:s'
});
clock.start();
 */






/* 
function Animal(name) {
  this.name = name;

  this.walk = function() {
    alert( "ходит " + this.name );
  };

}

function Rabbit(name) {
  Animal.apply(this, arguments);
}
Rabbit.prototype = Object.create(Animal.prototype);

Rabbit.prototype.walk = function() {
  alert( "прыгает " + this.name );
};

var rabbit = new Rabbit("Кроль");
rabbit.walk();
 */

/* 
// 1. Конструктор Animal
function Animal(name) {
  this.name = name;
  this.speed = 0;
}

// 1.1. Методы -- в прототип

Animal.prototype.stop = function() {
  this.speed = 0;
  alert( this.name + ' стоит' );
}

Animal.prototype.run = function(speed) {
  this.speed += speed;
  alert( this.name + ' бежит, скорость ' + this.speed );
};

// 2. Конструктор Rabbit
function Rabbit(name) {
  this.name = name;
  this.speed = 0;
}

// 2.1. Наследование
Rabbit.prototype = Object.create(Animal.prototype);
console.dir(Rabbit.prototype);
Rabbit.prototype.constructor = Rabbit;

// 2.2. Методы Rabbit
Rabbit.prototype.jump = function() {
  this.speed++;
  alert( this.name + ' прыгает, скорость ' + this.speed );
}
 */

/* 
function Hamster() {
  this.food = []; // пустой "живот"
}

Hamster.prototype.found = function(something) {
  this.food.push(something);
};

// Создаём двух хомяков и кормим первого
var speedy = new Hamster();
var lazy = new Hamster();

speedy.found("яблоко");
speedy.found("орех");

alert( speedy.food.length ); // 2
alert( lazy.food.length ); // 2 (!??)
 */



/* 
function CoffeeMachine(power) {
  this._waterAmount = 0;
  this._WATER_HEAT_CAPACITY = 4200;
}

CoffeeMachine.prototype.run = function() {
  setTimeout(function() {
    alert( 'Кофе готов!' );
  }, this._getTimeToBoil()); //
};

CoffeeMachine.prototype.setWaterAmount = function(amount) {
  this._waterAmount = amount;
};

CoffeeMachine.prototype._getTimeToBoil = function() {
  return this._waterAmount * this._WATER_HEAT_CAPACITY * 80 / this.power;
}


var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();
 */

/* 
function Animal(name) {
  this._name = name; // защищённое свойство
  this.isLive = true // открытое свойство
}

Animal.prototype.sayHi = function() {
  alert( this._name ); // методы и свойства записываем в prototype
}

var animal = new Animal("Зверь");
animal.sayHi(); // Зверь
 */



/* 
Function.prototype.defer = function(ms){
  var f = this;
  return function(a, b) {
    var arg = arguments;
    setTimeout(function(){
      f.apply(this, arg)
    }, ms)
  }
};

function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.

 */


/* 
Function.prototype.defer = function(ms) {
  setTimeout(this, ms)
}

Object.defineProperty(Function.prototype, "defer", {
  enumerable: false
});


function f() {
  alert( "привет" );
}

f.defer(1000); // выведет "привет" через 1 секунду

 */



/* 
if (!Object.create) {

  Object.create = function(proto) {
    function F() {}
    F.prototype = proto;
    return new F;
  };

}
 */


/* 
Object.prototype.each = function(f) {

  for (var prop in this) {
    var value = this[prop];
    f.call(value, prop, value);
  }

};

// поправить объявление свойства, установив флаг enumerable: false
Object.defineProperty(Object.prototype, 'each', {
  enumerable: false
});

// Теперь все будет в порядке
var obj = {
  name: 'Вася',
  age: 25
};

obj.each(function(prop, val) {
  alert( prop ); // name -> age
});
 */


/* 
String.prototype.repeat = function(times) {
  // this - значение примитива
  return new Array(times + 1).join(this);
};

alert( "ля".repeat(3) ); // ляляля
 */
/* 
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert( this.name );
};

var rabbit = new Rabbit("Rabbit");

rabbit.sayHi();         //
Rabbit.prototype.sayHi();         //
Object.getPrototypeOf(rabbit).sayHi();          //
rabbit.__proto__.sayHi();         //
 */
/* 
function Menu(options) {
  var arg = Object.create(null)
  options.width = options.width || 300; // по умолчанию ширина 300
}
 */


/* 
//Начнём с этого кода. Что он выведет?
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

var rabbit = new Rabbit();

alert( rabbit.eats );
//Добавили строку (выделена), что будет теперь?

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

var rabbit = new Rabbit();

Rabbit.prototype = {};

alert( rabbit.eats );
//А если код будет такой? (заменена одна строка):

function Rabbit(name) {}
Rabbit.prototype = {
  eats: true
};

var rabbit = new Rabbit();

Rabbit.prototype.eats = false;

alert( rabbit.eats );
//А такой? (заменена одна строка)

function Rabbit(name) {}
Rabbit.prototype = {
  eats: true
};

var rabbit = new Rabbit();

delete rabbit.eats; // (*)

alert( rabbit.eats );
//И последний вариант:

function Rabbit(name) {}
Rabbit.prototype = {
  eats: true
};

var rabbit = new Rabbit();

delete Rabbit.prototype.eats; // (*)

alert( rabbit.eats );
 */


/* 
function inherit(proto) {
  function F() {}
  F.prototype = proto;
  var object = new F;
  return object;
}

if (!Object.create) Object.create = inherit;
// es5-shim
 */

/* 
function Rabbit(name) {
  this.name = name;
  alert( name );
}

var rabbit = new Rabbit("Кроль");

var rabbit2 = new rabbit.constructor("Крольчиха");
 */

/* 
function Rabbit() {}

Rabbit.prototype = {
  constructor: Rabbit
};
 */

/* 
var head = {
  glasses: 1
};

var table = {
  pen: 3,
  __proto__: head
};

var bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

var pockets = {
  money: 2000,
  __proto__: bed
};

console.log(pockets.pen == 3);
console.log(bed.glasses == 1);
console.log(table.money == undefined);
 */




/* 
var animal = {
  eat: function() {
    this.full = true;
  }
};

var rabbit = {
  __proto__: animal
};

rabbit.eat();



for (var key in rabbit) {
  if ( !rabbit.hasOwnProperty(key) ) continue;
  console.log( key + " : " + rabbit[key] );
}
 */
/* 
obj.hasOwnProperty("toString") ? obj.toString : undefined;
 */

/* 
var parent = {
  surname: "sobolev"
}

var obj = {
  name: "sasha",
  old: 26
}

obj.__proto__ = parent;

for (var key in obj) {
  if ( !obj.hasOwnProperty(key) ) continue;
  console.log( key + " : " + obj[key] );
}
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
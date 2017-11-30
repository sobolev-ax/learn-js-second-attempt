



/* 
function Article() {
  
  this.created = new Date();

  Article.count++;
  Article.date = this.created;
  
  Article.showStats = function() {
    alert("Всего: " + this.count + ", Последняя: " + this.date);
  }

}

Article.count = 0;

new Article();
new Article();

Article.showStats(); // Всего: 2, Последняя: (дата)

new Article();

Article.showStats(); // Всего: 3, Последняя: (дата)
 */

/*
function User() {

  this.sayHi = function() {

    console.log( this.name );

  };

};

User.createAnonymous = function() {
  
  var user = new User;
  
  user.name = 'anonymous';

  return user;

};

User.createFromData = function(userData) {

  var user = new User();

  user.name = userData.name;
  user.age = userData.age;

  return user;

}

// Использование

var guest = User.createAnonymous();
guest.sayHi(); // Аноним

var knownUser = User.createFromData({
  name: 'Вася',
  age: 25
});
knownUser.sayHi(); // Вася
 */


/* 
console.log(Article)

Article.count = 0;

Article.showCount = function() {
  console.log( this.count );
}

new Article();
new Article();

Article.showCount();

console.log(Article)


function Article() {
  
    Article.count++;
  
}
 */

/* 
function User(fullName) {

  this.fullName = fullName;

  function getFirstName(fullName) {
    return fullName.split(" ")[0];
  }

  function getLastName(fullName) {
    return fullName.split(" ")[1];
  }

  Object.defineProperty(this, "firstName", {

    get: function () {
      return getFirstName(this.fullName);
    },

    set: function (value) {
      this.fullName = value + " " + this.fullName.split(" ")[1];
    }

  });

  Object.defineProperty(this, "lastName", {

    get: function () {
      return getLastName(this.fullName);
    },

    set: function (value) {
      this.fullName = this.fullName.split(" ")[0] + " " + value;
    }

  });

}

var vasya = new User("Василий Попкин");

// чтение firstName/lastName
console.log( vasya.firstName ); // Василий
console.log( vasya.lastName ); // Попкин

// запись в lastName
vasya.lastName = 'Сидоров';

console.log( vasya.fullName ); // Василий Сидоров
 */
/* 
var user = {
  firstName: "Вася",
  surname: "Петров",

  get fullName() {
    return this.firstName + ' ' + this.surname;
  },

  set fullName(value) {
    var split = value.split(' ');
    this.firstName = split[0];
    this.surname = split[1];
  }
};

alert( user.fullName ); // Вася Петров (из геттера)

user.fullName = "Петя Иванов";
alert( user.firstName ); // Петя  (поставил сеттер)
alert( user.surname ); // Иванов (поставил сеттер)
 */

/* 
var calc = new Calculator();

console.log( calc.calculate("3 + 7") ); // 10

var powerCalc = new Calculator;
powerCalc.addMethod("*", function(a, b) {
  return a * b;
});
powerCalc.addMethod("/", function(a, b) {
  return a / b;
});
powerCalc.addMethod("**", function(a, b) {
  return Math.pow(a, b);
});

var result = powerCalc.calculate("2 ** 3");
console.log( result ); // 8

function Calculator() {

  var operationsFunc = {
    "+": function(a, b) {
      return a + b;
    },
    "-": function(a, b) {
      return a - b;
    }
  };

  this.calculate = function(stringValue) {
    
    var partsArr = stringValue.split(" "),
        op = partsArr[1],
        a = +partsArr[0],
        b = +partsArr[2];

    if (!methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return operationsFunc[op](a, b);

  };

  this.addMethod = function(name, func) {
    operationsFunc[name] = func;
  }
}
 */

/* 
function Accumulator(startingValue) {12

  this.value = +startingValue;

  this.read = function() {
    this.value += +prompt("number", "0")
  }
}

var accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
alert( accumulator.value ); // выведет текущее значение
 */
/*
function Calculator() {
  this.read = function() {
    this.a = +prompt("number one: ", "0");
    this.b = +prompt("number two: ", "0");
  }
  this.sum = function() {
    return this.a + this.b;
  }
  this.mul = function() {
    return this.a * this.b;
  }
}

var calculator = new Calculator();
calculator.read();

console.log( "Сумма=" + calculator.sum() );
console.log( "Произведение=" + calculator.mul() );
 */

/*
var obg = {}

function A() {
  return obg;
}
function B() {
  return obg;
}

var a = new A;
var b = new B;

alert( a == b ); // true
 */

/* 
function User(firstName, lastName) {
  // вспомогательная переменная
  var phrase = "Привет";

  //  вспомогательная вложенная функция
  function getFullName() {
      console.log( firstName + " " + lastName );
      return firstName + " " + lastName;
    }

  this.sayHi = function() {
    alert( phrase + ", " + getFullName() ); // использование
  };
}

var vasya = new User("Вася", "Петров");
console.log(vasya);
vasya.sayHi(); // Привет, Вася Петров
//vasya.getFullName(); // не будет работать
*/

/*
console.log( sum(1)(2) );//== 3; // 1 + 2
console.log( sum(1)(2)(3) );//== 6; // 1 + 2 + 3
console.log( sum(5)(-1)(2) );//== 6
console.log( sum(6)(-1)(-2)(-3) );//== 0
console.log( sum(0)(1)(2)(3)(4)(5) );//== 15

function sum(a) {
  var result = a;

  


  function f(b) {

      result += b;

      return f;
  };

  f.valueOf = function() {
    return result;
  }
  f.toString = function() {
    return result;
  }

  return f;

}
 */

/* 
console.log( {}[0] );
console.log( {} + {} );
 */


/*

// chaining

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

ladder.up().up().down().up().down().showStep(); // 1
 */
/* 
var calculator = {

  read: function() {
    this.a = +prompt("Число a:", "");
    this.b = +prompt("Число b:", "");
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
var name = "";

var user = {
  name: "Василий",

  export: function() {
    return this;
  }

};

alert( user.export().name );
 */
/* 
var user = {
  firstName: "Василий",

  export: this
};

alert( user.export.firstName );
 */

/* 
var obj = {
  go: function() {
    alert(this)
  }
};

(obj.go)() 
 */
/* 
function work(a, b) {
  alert( a + b ); // work - произвольная функция
}

function makeLogging(f, log) {
  function wrapper() {

  }

  return wrapper;
}

var log = [];
work = makeLogging(work, log);

work(1, 2); // 3
work(4, 5); // 9

for (var i = 0; i < log.length; i++) {
  var args = log[i]; // массив из аргументов i-го вызова
  console.log( 'Лог:' + args.join() ); // "Лог:1,2", "Лог:4,5"
}
 */

/* 
function work(a) {
  // work - произвольная функция, один аргумент
}

function makeLogging(f, log) {
  function wrapper(a) {
    log.push(a);
    return f.call(this, a);
  }

  return wrapper;
}

var log = [];
work = makeLogging(work, log);

work(1); // 1, добавлено в log
work(5); // 5, добавлено в log

for (var i = 0; i < log.length; i++) {
  console.log( 'Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
}
*/


/*
"use strict";

function ask(question, answer, ok, fail) {
  var result = prompt(question, '');
  if (result.toLowerCase() == answer.toLowerCase()) ok();
  else fail();
}

var user = {
  login: 'Василий',
  password: '12345',

  // метод для вызова из ask
  loginDone: function(result) {
    alert( this.login + (result ? ' вошёл в сайт' : ' ошибка входа') );
  },

  checkPassword: function() {
    ask(
      "Ваш пароль?",
      this.password,
      this.loginDone.bind(this, true),
      this.loginDone.bind(this, false)
    );
  }
};

var vasya = user;
user = null;
vasya.checkPassword();
*/


/*
"use strict";

function ask(question, answer, ok, fail) {
  var result = prompt(question, '');
  if (result.toLowerCase() == answer.toLowerCase()) ok();
  else fail();
}

var user = {
  login: 'Василий',
  password: '12345',

  loginOk: function() {
    alert( this.login + ' вошёл в сайт' );
  },

  loginFail: function() {
    alert( this.login + ': ошибка входа' );
  },

  checkPassword: function() {
    ask("Ваш пароль?", this.password, this.loginOk.bind(this), this.loginFail.bind(this));
  }
};

user.checkPassword();
*/

/*
function ask(question, answer, ok, fail) {
  var result = prompt(question, '');
  if (result.toLowerCase() == answer.toLowerCase()) ok();
  else fail();
}

 ask("Выпустить птичку?", "да", fly, die);

 function fly() {
 alert( 'улетела :)' );
 }

 function die() {
 alert( 'птичку жалко :(' );
 }
*/


/*
function mul(a, b) {
  return a * b;
};

// double умножает только на два
var double = mul.bind(null, 2); // контекст фиксируем null, он не используется
var triple = mul.bind(null, 3);

console.log( double(3) ); // = mul(2, 3) = 6
console.log( double(4) ); // = mul(2, 4) = 8
console.log( double(5) ); // = mul(2, 5) = 10

console.log( triple(3) ); // = mul(3, 3) = 9
console.log( triple(4) ); // = mul(3, 4) = 12
console.log( triple(5) ); // = mul(3, 5) = 15
*/

/*
// Методы bind и call/apply близки по синтаксису, но есть важнейшее отличие.
//
//   Методы call/apply вызывают функцию с заданным контекстом и аргументами.
//
//   А bind не вызывает функцию. Он только возвращает «обёртку»,
// которую мы можем вызвать позже, и которая передаст вызов в исходную функцию, с привязанным контекстом.

function applyAll() {
  return arguments[0].apply(null, [].slice.call(arguments, 1) );

}

function sum() { // суммирует аргументы: sum(1,2,3) = 6
  return [].reduce.call(arguments, function(a, b) {
    return a + b;
  });
}

function mul() { // перемножает аргументы: mul(2,3,4) = 24
  return [].reduce.call(arguments, function(a, b) {
    return a * b;
  });
}

// Применить Math.max к аргументам 2, -2, 3
console.log( applyAll(Math.max, 2, -2, 3) ); // 3

// Применить Math.min к аргументам 2, -2, 3
console.log( applyAll(Math.min, 2, -2, 3) ); // -2

console.log( applyAll(sum, 1, 2, 3) ); // -> sum(1, 2, 3) = 6
console.log( applyAll(mul, 2, 3, 4) ); // -> mul(2, 3, 4) = 24
*/


/*
function sumArgs() {
  return [].reduce.call(arguments, function(a, b) {
    return a + b;
  });
}

console.log( sumArgs(1, 2, 3) );
*/


/*
function Article() {
  this.created = new Date();
  // ... ваш код ...

  Article.created = this.created;

  if ( Article.count !== undefined) {
    Article.count++;
  } else {
    Article.count = 1;
  }



  Article.showStats = function() {
   console.log("Всего: " + Article.count + ", Последняя: " + Article.created);
  };
};

new Article();
new Article();

Article.showStats(); // Всего: 2, Последняя: (дата)

new Article();

Article.showStats(); // Всего: 3, Последняя: (дата)
*/



/*
function User(fullName) {
  this.fullName = fullName;

  Object.defineProperty(this, "lastName", {
    get: function() {
      return this.fullName.split(" ")[1];
    },
    set: function(value) {
      this.fullName = this.firstName + " " + value;
    }
  });

  Object.defineProperty(this, "firstName", {
    get: function() {
      return this.fullName.split(" ")[0]
    },
    set: function(value) {
      this.fullName =  value + " " + this.lastName;
    }
  });
}

var vasya = new User("Василий Попкин");



// чтение firstName/lastName
console.log( vasya.firstName ); // Василий
console.log( vasya.lastName ); // Попкин

// запись в lastName
vasya.lastName = 'Сидоров';

console.log( vasya.fullName ); // Василий Сидоров
*/

/*
function Calculator() {

  var methods = {
    "-": function(a, b) {
      return a - b;
    },
    "+": function(a, b) {
      return a + b;
    }
  };

  this.calculate = function(str) {

    var split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]

    if (!methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return methods[op](a, b);
  }

  this.addMethod = function(name, func) {
    methods[name] = func;
  };
}

var calc = new Calculator;

calc.addMethod("*", function(a, b) {
  return a * b;
});
calc.addMethod("/", function(a, b) {
  return a / b;
});
calc.addMethod("**", function(a, b) {
  return Math.pow(a, b);
});

var result = calc.calculate("2 ** 3");
console.log( result ); // 8
*/


/*
function Accumulator(a) {
  
  this.value = a;

  this.read = function() {
    var num = +prompt("num?","");
    this.value += num;
  }
}

var accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
alert( accumulator.value ); // выведет текущее значение
*/



/* 
// Функция - конструктор
function Calculator() {
  this.a = 0;
  this.b = 0;

  this.read = function() {
    this.a = +prompt("a?","");
    this.b = +prompt("b?","");
  }
  this.sum = function() {
    return this.a + this.b;
  }
  this.mul = function() {
    return this.a * this.b;
  }
};

var calculator = new Calculator();
calculator.read();

console.log( "Сумма=" + calculator.sum() );
console.log( "Произведение=" + calculator.mul() );

 */

/* 
console.log( sum(1)(2) )// == 3; // 1 + 2
console.log( sum(1)(2)(3) ) // == 6; // 1 + 2 + 3
console.log( sum(5)(-1)(2) ) //== 6
console.log( sum(6)(-1)(-2)(-3) )// == 0
console.log( sum(0)(1)(2)(3)(4)(5) )//== 15

function sum(a) {
  var currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  };

  f.toString = function() {
    return currentSum;
  }

  return f;
};
 */
/* 
console.log( new Date(0) - 0 ); // число
console.log( new Array(1)[0] + "" ); // ""
console.log( ({})[0] ); // undefined
console.log( [1] + 1 ); // 11
console.log( [1,2] + [3,4] ); // 1,2,3,4
console.log( [] + null + 1 ); // NaN
console.log( [ [0] ] [0][0] ); // 0 
console.log( ({} + {}) ); //
 */


/* 
console.log( + {} );
 */
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
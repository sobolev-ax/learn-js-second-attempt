




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
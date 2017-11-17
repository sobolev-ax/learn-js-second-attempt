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

console.log( sum(1)(2) )// == 3; // 1 + 2
console.log( sum(1)(2)(3) ) // == 6; // 1 + 2 + 3
console.log( sum(5)(-1)(2) ) //== 6
console.log( sum(6)(-1)(-2)(-3) )// == 0
console.log( sum(0)(1)(2)(3)(4)(5) )//== 15

function sum(a) {
  var result = 0;
  
  return function plus(b) {
    if (b != undefined) return plus()
  };
};

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
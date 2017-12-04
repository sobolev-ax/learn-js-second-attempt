
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
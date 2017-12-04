

function formatDate(date) { 
    var type = {}.toString.call(
            date
        ).slice(8, 9).toLowerCase(),
        operations = {
            s: function () {

                var arr = date.split("-").reverse();

                arr[2] = arr[2].slice(2);

                return arr.join(".");

            },
            n: function() {

                var objDate = new Date(date);

                console.log( date )

                /* return objDate.getDate() + "." + 
                objDate.getMonth() + 1 + 
                "." + objDate.getFullYear() */

            },
            a: function() {
                
            },
            d: function() {
                
            },
            o: function() {
                return "formatDate error!"
            }
        }

    //console.log(type)

    return operations[type]();

 }


console.log( formatDate('2011-10-02') ); // 02.10.11
console.log( formatDate(1234567890) ); // 14.02.09
console.log( formatDate([2014, 0, 1]) ); // 01.01.14
console.log( formatDate(new Date(2014, 0, 1)) ); // 01.01.14
console.log( formatDate({}) ); // formatDate error!


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
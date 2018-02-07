console.log('\n---------------------------------------------Задача 3\n');

(() => {
  /*
   * Полифилл для matches
   */
  if (Element.prototype.closest === undefined) {
    Element.prototype.closest = () => {};
  }
})();


(() => {
  /*
   * Полифилл для matches
   */
  if (Element.prototype.matches === undefined) {
    Element.prototype.matches = Element.prototype.matchesSelector ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector;
  }
})();

/* function factorial(n) {
  var result = 1;

  for (var i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}

var n = 5;
var k = 3;

var answer = factorial(n)*factorial(n)/(factorial(k)*factorial(n-k)*factorial(n-k));

console.log(answer); */


/* function getNewCode(code, length) {
  if (code >= 97 && code <= 122) {
    if (code + length > 122) {
      length = length - (122 - code);
      code = 96 + length;
    } else {
      code = code + length;
    }
  }
  if (code >= 65 && code <= 90) {
    if (code + length > 90) {
      length = length - (90 - code);
      code = 64 + length;
    } else {
      code = code + length;
    }
  }
  return String.fromCharCode(code);
}
var str = 'Mbgdhyy Ybgmxva Lvahhe!';
var mass = String.prototype.split.call(str, ' ');
var maxLength;

for (var i = 0; i < mass.length; i++) {
  if (i === 0) {
    maxLength = mass[i].length;
  } else if (maxLength < mass[i].length) {
    maxLength = mass[i].length;
  }
}

for (var i = 0; i < mass.length; i++) {
  var wordMass = String.prototype.split.call(mass[i], '');

  for (var j = 0; j < wordMass.length; j++) {
    var code = wordMass[j].charCodeAt(0);
    wordMass[j] = getNewCode(code, maxLength);
  }
  mass[i] = wordMass.join('');
}

console.log(mass.join(' ')); */


/* console.log выводит элемент в виде,
 * удобном для исследования HTML-структуры.
 * console.dir выводит элемент в виде JavaScript-объекта,
 * удобно для анализа его свойств.
 */
// console.log(document.body);
// console.dir(document.body);
/* querySelectorAll собирает найденные элементы в «псевдомассив»
Этот перебор происходит очень быстро */

/* Результаты поиска getElementsBy* – живые!
Возвращает специальный объект, имеющий тип NodeList или HTMLCollection.
Он похож на массив, так как имеет нумерованные элементы и длину,
но внутри это не готовая коллекция, а «живой поисковой запрос»
При изменении документа – изменяется и результат запроса. */

console.log('\n---------------------------------------------Задача 2\n');
const li1 = document.querySelectorAll('#ul1 li');

Array.prototype.forEach.call(li1, (li) => {
  const text = li.childNodes[0].data.trim();
  const count = li.getElementsByTagName('li').length;
  console.log(`${text}: ${count}`);
});


console.log('\n---------------------------------------------Задача 1\n');
const table1 = document.getElementById('table1');
for (let i = 0; i < table1.rows.length; i++) {
  table1.rows[i].cells[i].style.backgroundColor = 'red';
}

// document.documentElement.firstElementChild
// document.body.firstElementChild.nextElementSibling
// document.body.firstElementChild.nextElementSibling.lastElementChild

/* for (let i = 0; i < document.body.children.length; i++) {
  console.log(document.body.children[i]);
} */

/* for (let i = 0; i < document.body.childNodes.length; i++) {
  console.log(document.body.childNodes[i]);
} */

console.log('\n---------------------------------------------Задача 0\n');
// Объектная модель браузера (BOM)
// BOM – это объекты для работы с чем угодно, кроме документа.
console.log('\n');
console.log(window.navigator.userAgent); // содержит информацию о браузере
console.log(window.navigator.platform); // содержит информацию о платформе

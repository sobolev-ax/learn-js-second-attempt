console.log('\n---------------------------------------------Задача 3\n');


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

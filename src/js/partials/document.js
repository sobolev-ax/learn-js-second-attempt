

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

// Объектная модель браузера (BOM)
// BOM – это объекты для работы с чем угодно, кроме документа.
console.log(window.navigator.userAgent); // содержит информацию о браузере
console.log(window.navigator.platform); // содержит информацию о платформе

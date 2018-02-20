(() => {
  console.log('\n---------------------------------------------Задача 4\n');
  Element.prototype.remove = function remove() {
    if (this.parentElement) {
      return this.parentElement.removeChild(this);
    }
    return null;
  };

  function removeChildren(elem) {
    console.log(elem.children);
    // const count = elem.children.length;
    while (elem.firstChild) {
      elem.firstChild.remove();
    }
  }
  const table4 = document.getElementById('table4');
  const ol4 = document.getElementById('ol4');
  removeChildren(table4); // очищает таблицу
  removeChildren(ol4); // очищает список

  const elem4 = document.getElementById('elem4');
  const text4 = '<h3>Привет!</h3>';

  elem4.innerHTML = text4;
  elem4.appendChild(document.createTextNode(text4));

  console.log(elem4.remove());


  const element4 = document.createElement('div');
  element4.innerHTML = '<b>Новый элемент</b>';
  function insertAfter(elem, refElem) {
    const element = elem.cloneNode(true);
    const next = refElem.nextSibling;
    const parent = refElem.parentElement;
    if (next) {
      parent.insertBefore(element, next);
    } else {
      parent.appendChild(element);
    }
  }
  const div4 = document.getElementById('div4');
  // вставить elem после первого элемента
  insertAfter(element4, div4.firstChild); // <--- должно работать
  // вставить elem за последним элементом
  insertAfter(element4, div4.lastChild); // <--- должно работать

  /*
  *Методы для создания узлов:

  document.createElement(tag) – создает элемент

  document.createTextNode(value) – создает текстовый узел
  elem.cloneNode(deep) – клонирует элемент,

  если deep == true, то со всеми потомками, если false – без потомков.

  *Вставка и удаление узлов:

  parent.appendChild(elem)

  parent.insertBefore(elem, nextSibling)

  parent.removeChild(elem)

  parent.replaceChild(newElem, elem)

  */

  // код с http://compatibility.shwups-cms.ch/en/polyfills/?&id=82
  (() => {
    const el = document.documentElement;
    if (!el.compareDocumentPosition && el.sourceIndex !== undefined) {
      Element.prototype.compareDocumentPosition = other =>
        (this !== other && this.contains(other) && 16) +
        (this !== other && other.contains(this) && 8) +
        (this.sourceIndex >= 0 && other.sourceIndex >= 0 ?
          (this.sourceIndex < other.sourceIndex && 4) +
          (this.sourceIndex > other.sourceIndex && 2) : 1
        ) + 0;
    }
  })();

  console.log('\n---------------------------------------------Задача 3\n');
  const list = document.getElementsByTagName('a');
  const listLength = list.length;
  for (let i = 0; i < listLength; i++) {
    const href = list[i].getAttribute('href');
    if (href &&
      href.indexOf('://') !== -1 &&
      href.indexOf('http://internal.com') === -1) {
      list[i].classList.add('external');
    }
  }

  const elem1 = document.getElementById('widget');
  const elemDataWidgetName = elem1.dataset.widgetName;
  console.log(elemDataWidgetName);

  (() => {
    if (document.documentElement.textContent === undefined) {
      Object.defineProperty(HTMLElement.prototype, 'textContent', {
        get: () => this.innerText,
        set: (value) => {
          this.innerText = value;
        },
      });
    }
  })();

  (() => {
    /*
    * Полифилл для closest
    */
    if (Element.prototype.closest === undefined) {
      Element.prototype.closest = (selector) => {
        let elem = this;
        do {
          if (elem.matches(selector)) {
            return elem;
          }
          elem = elem.parentElement;
        } while (elem);
        return null;
      };
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

  console.log('\n---------------------------------------------Задача 5\n');
  const ul5 = document.getElementById('ul5');
  let li5;
  let text;
  const flag = true;
  ul5.addEventListener('click', () => {
    if (!li5) {
      li5 = document.createElement('li');
    }
    while (flag) {
      text = prompt('Введите текст:', '');
      if (!text) {
        break;
      }
      const li = li5.cloneNode(false);
      li.innerText = text;
      ul5.appendChild(li);
    }
  });
})();
console.log('\n---------------------------------------------Задача 6\n');
(() => {
  function isEmptyObject(obj) {
    for (const i in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, i)) {
        return false;
      }
    }
    return true;
  }
  function createTree(container, data) {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    for (const key in data) {
      if ({}.hasOwnProperty.call(data, key)) {
        const liClone = li.cloneNode(false);
        liClone.innerText = key;
        if (isEmptyObject(data[key]) === false) {
          createTree(liClone, data[key]);
        }
        ul.appendChild(liClone);
      }
    }
    if (ul.firstElementChild) {
      container.appendChild(ul);
    }
  }
  const data6 = {
    Рыбы: {
      Форель: {},
      Щука: {},
    },
    Деревья: {
      Хвойные: {
        Лиственница: {},
        Ель: {},
      },
      Цветковые: {
        Берёза: {},
        Тополь: {},
      },
    },
  };
  const container6 = document.getElementById('container6');
  createTree(container6, data6);
})();

console.log('\n---------------------------------------------Задача 7\n');
(() => {
  const container = document.getElementById('container7');
  const li = container.getElementsByTagName('li');

  for (let i = 0; i < li.length; i++) {
    const text = li[i].firstChild.textContent;
    const lengthInner = li[i].querySelectorAll('li').length;
    if (lengthInner) {
      li[i].firstChild.textContent = `${text} [${lengthInner}]`;
    }
  }
})();

console.log('\n---------------------------------------------Задача 8\n');
(() => {
  function createCalendar(id, year, month) {
    const elem = document.getElementById(id);
    if (elem === null) {
      return; // exit from function
    }
    const monthCorrect = month - 1; // 1 january, 2 december
    const monthNext = monthCorrect + 1;
    const date = new Date(year, monthCorrect);
    const lastDay = new Date(year, monthNext, 0).getDate();
    const countOfCell = 7;

    const table = document.createElement('table');
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    const tbody = document.createElement('tbody');
    const thead = document.createElement('thead');

    let trClone;

    for (let i = 0; i < countOfCell; i++) {
      const tdClone = td.cloneNode(false);
      tr.appendChild(tdClone);
    }

    trClone = tr.cloneNode(true);
    for (let i = 0; i < countOfCell; i++) {
      let nameOfDay = '';
      switch (i) {
        case 0:
          nameOfDay = 'пн';
          break;
        case 1:
          nameOfDay = 'вт';
          break;
        case 2:
          nameOfDay = 'ср';
          break;
        case 3:
          nameOfDay = 'чт';
          break;
        case 4:
          nameOfDay = 'пт';
          break;
        case 5:
          nameOfDay = 'сб';
          break;
        case 6:
          nameOfDay = 'вс';
          break;
        default:
          break;
      }
      trClone.cells[i].style = 'background: rgba(120,120,120,.3)';
      trClone.cells[i].innerText = nameOfDay;
    }
    thead.appendChild(trClone);

    trClone = undefined;
    for (let i = 1; i <= lastDay; i++) {
      date.setDate(i);
      const day = date.getDay() === 0 ? 7 : date.getDay(); // 1, 2, 3, 4, 5, 6, 7

      if (trClone === undefined) {
        trClone = tr.cloneNode(true);
      } else if (day === 1) {
        tbody.appendChild(trClone);
        trClone = tr.cloneNode(true);
      }

      trClone.cells[day - 1].innerText = i;

      if (i + 1 === lastDay) {
        tbody.appendChild(trClone);
      }
    }

    table.appendChild(thead);
    table.appendChild(tbody);
    elem.appendChild(table);
  }

  createCalendar('container8', 2018, 2);
})();

console.log('\n---------------------------------------------Задача 9\n');
(() => {
  setTimeout(function time() {
    const date = new Date();
    const container = document.querySelector('#container9');
    const span = document.createElement('span');

    const spanHours = span.cloneNode(false);
    const spanMinutes = span.cloneNode(false);
    const spanSecond = span.cloneNode(false);

    spanHours.style = 'color: green';
    spanMinutes.style = 'color: red';
    spanSecond.style = 'color: blue';

    spanHours.innerText = `${date.getHours()} : `;
    spanMinutes.innerText = date.getMinutes();
    spanSecond.innerText = ` : ${date.getSeconds()}`;

    container.innerHTML = '';

    container.appendChild(spanHours);
    container.appendChild(spanMinutes);
    container.appendChild(spanSecond);
    setTimeout(time, 1000);
  });
})();

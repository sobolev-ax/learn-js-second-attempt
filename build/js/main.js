'use strict';

(function () {
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
  var table4 = document.getElementById('table4');
  var ol4 = document.getElementById('ol4');
  removeChildren(table4); // очищает таблицу
  removeChildren(ol4); // очищает список

  var elem4 = document.getElementById('elem4');
  var text4 = '<h3>Привет!</h3>';

  elem4.innerHTML = text4;
  elem4.appendChild(document.createTextNode(text4));

  console.log(elem4.remove());

  var element4 = document.createElement('div');
  element4.innerHTML = '<b>Новый элемент</b>';
  function insertAfter(elem, refElem) {
    var element = elem.cloneNode(true);
    var next = refElem.nextSibling;
    var parent = refElem.parentElement;
    if (next) {
      parent.insertBefore(element, next);
    } else {
      parent.appendChild(element);
    }
  }
  var div4 = document.getElementById('div4');
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
  (function () {
    var el = document.documentElement;
    if (!el.compareDocumentPosition && el.sourceIndex !== undefined) {
      Element.prototype.compareDocumentPosition = function (other) {
        return (undefined !== other && undefined.contains(other) && 16) + (undefined !== other && other.contains(undefined) && 8) + (undefined.sourceIndex >= 0 && other.sourceIndex >= 0 ? (undefined.sourceIndex < other.sourceIndex && 4) + (undefined.sourceIndex > other.sourceIndex && 2) : 1) + 0;
      };
    }
  })();

  console.log('\n---------------------------------------------Задача 3\n');
  var list = document.getElementsByTagName('a');
  var listLength = list.length;
  for (var i = 0; i < listLength; i++) {
    var href = list[i].getAttribute('href');
    if (href && href.indexOf('://') !== -1 && href.indexOf('http://internal.com') === -1) {
      list[i].classList.add('external');
    }
  }

  var elem1 = document.getElementById('widget');
  var elemDataWidgetName = elem1.dataset.widgetName;
  console.log(elemDataWidgetName);

  (function () {
    if (document.documentElement.textContent === undefined) {
      Object.defineProperty(HTMLElement.prototype, 'textContent', {
        get: function get() {
          return undefined.innerText;
        },
        set: function set(value) {
          undefined.innerText = value;
        }
      });
    }
  })();

  (function () {
    /*
    * Полифилл для closest
    */
    if (Element.prototype.closest === undefined) {
      Element.prototype.closest = function (selector) {
        var elem = undefined;
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

  (function () {
    /*
    * Полифилл для matches
    */
    if (Element.prototype.matches === undefined) {
      Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
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
  var li1 = document.querySelectorAll('#ul1 li');

  Array.prototype.forEach.call(li1, function (li) {
    var text = li.childNodes[0].data.trim();
    var count = li.getElementsByTagName('li').length;
    console.log(text + ': ' + count);
  });

  console.log('\n---------------------------------------------Задача 1\n');
  var table1 = document.getElementById('table1');
  for (var _i = 0; _i < table1.rows.length; _i++) {
    table1.rows[_i].cells[_i].style.backgroundColor = 'red';
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
  var ul5 = document.getElementById('ul5');
  var li5 = void 0;
  var text = void 0;
  var flag = true;
  ul5.addEventListener('click', function () {
    if (!li5) {
      li5 = document.createElement('li');
    }
    while (flag) {
      text = prompt('Введите текст:', '');
      if (!text) {
        break;
      }
      var li = li5.cloneNode(false);
      li.innerText = text;
      ul5.appendChild(li);
    }
  });
})();
console.log('\n---------------------------------------------Задача 6\n');
(function () {
  function isEmptyObject(obj) {
    for (var i in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, i)) {
        return false;
      }
    }
    return true;
  }
  function createTree(container, data) {
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    for (var key in data) {
      if ({}.hasOwnProperty.call(data, key)) {
        var liClone = li.cloneNode(false);
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
  var data6 = {
    Рыбы: {
      Форель: {},
      Щука: {}
    },
    Деревья: {
      Хвойные: {
        Лиственница: {},
        Ель: {}
      },
      Цветковые: {
        Берёза: {},
        Тополь: {}
      }
    }
  };
  var container6 = document.getElementById('container6');
  createTree(container6, data6);
})();

console.log('\n---------------------------------------------Задача 7\n');
(function () {
  var container = document.getElementById('container7');
  var li = container.getElementsByTagName('li');

  for (var i = 0; i < li.length; i++) {
    var text = li[i].firstChild.textContent;
    var lengthInner = li[i].querySelectorAll('li').length;
    if (lengthInner) {
      li[i].firstChild.textContent = text + ' [' + lengthInner + ']';
    }
  }
})();

console.log('\n---------------------------------------------Задача 8\n');
(function () {
  function createCalendar(id, year, month) {
    var elem = document.getElementById(id);
    if (elem === null) {
      return; // exit from function
    }
    var monthCorrect = month - 1; // 1 january, 2 december
    var monthNext = monthCorrect + 1;
    var date = new Date(year, monthCorrect);
    var lastDay = new Date(year, monthNext, 0).getDate();
    var countOfCell = 7;

    var table = document.createElement('table');
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var tbody = document.createElement('tbody');
    var thead = document.createElement('thead');

    var trClone = void 0;

    for (var i = 0; i < countOfCell; i++) {
      var tdClone = td.cloneNode(false);
      tr.appendChild(tdClone);
    }

    trClone = tr.cloneNode(true);
    for (var _i2 = 0; _i2 < countOfCell; _i2++) {
      var nameOfDay = '';
      switch (_i2) {
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
      trClone.cells[_i2].style = 'background: rgba(120,120,120,.3)';
      trClone.cells[_i2].innerText = nameOfDay;
    }
    thead.appendChild(trClone);

    trClone = undefined;
    for (var _i3 = 1; _i3 <= lastDay; _i3++) {
      date.setDate(_i3);
      var day = date.getDay() === 0 ? 7 : date.getDay(); // 1, 2, 3, 4, 5, 6, 7

      if (trClone === undefined) {
        trClone = tr.cloneNode(true);
      } else if (day === 1) {
        tbody.appendChild(trClone);
        trClone = tr.cloneNode(true);
      }

      trClone.cells[day - 1].innerText = _i3;

      if (_i3 + 1 === lastDay) {
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
(function () {
  setTimeout(function time() {
    var date = new Date();
    var container = document.querySelector('#container9');
    var span = document.createElement('span');

    var spanHours = span.cloneNode(false);
    var spanMinutes = span.cloneNode(false);
    var spanSecond = span.cloneNode(false);

    spanHours.style = 'color: green';
    spanMinutes.style = 'color: red';
    spanSecond.style = 'color: blue';

    spanHours.innerText = date.getHours() + ' : ';
    spanMinutes.innerText = date.getMinutes();
    spanSecond.innerText = ' : ' + date.getSeconds();

    container.innerText = '';

    container.appendChild(spanHours);
    container.appendChild(spanMinutes);
    container.appendChild(spanSecond);
    setTimeout(time, 1000);
  });
})();

console.log('\n---------------------------------------------Задача 10\n');
(function () {
  var html = '<li>3</li><li>4</li><li>5</li>';
  var elem = document.querySelector('#container10');

  elem.insertAdjacentHTML('beforeEnd', html);
})();

console.log('\n---------------------------------------------Задача 11\n');
(function () {
  var sort = document.querySelectorAll('[data-sort-table]');
  var sortLength = sort.length;

  if (sortLength === 0) {
    return;
  } // exit from function;

  var parent = sort[0].parentElement;
  var wrapper = {};

  var _loop = function _loop(i) {
    Object.defineProperty(wrapper, 'coll[' + i + ']', {
      enumerable: false,
      writable: true,
      value: []
    });
    Object.defineProperty(parent, 'coll[' + i + ']', {
      enumerable: false,
      writable: true,
      value: {}
    });
    Object.defineProperty(parent['coll[' + i + ']'], 'saved', {
      enumerable: false,
      writable: true,
      value: false
    });
    Object.defineProperty(parent['coll[' + i + ']'], 'sorted', {
      enumerable: false,
      writable: true,
      value: {
        string: false,
        number: false
      }
    });

    sort[i].addEventListener('click', function (e) {
      var elem = e.target;
      var tbody = elem.parentElement.parentElement;
      var allRows = tbody.rows;
      var index = elem.cellIndex;
      var lengthAllRows = tbody.rows.length;
      var method = elem.getAttribute('data-sort-table'); // number, string
      var sorting = {
        number: function number(a, b) {
          var num1 = +a.cells[index].innerText;
          var num2 = +b.cells[index].innerText;
          if (num1 > num2) return 1;
          return -1;
        },
        string: function string(a, b) {
          var str1 = a.cells[index].innerText.toLowerCase();
          var str2 = b.cells[index].innerText.toLowerCase();
          return str1.localeCompare(str2);
        }
      };

      if (!parent['coll[' + i + ']'].saved) {
        for (var j = 0; j < lengthAllRows - 1; j++) {
          wrapper['coll[' + i + ']'][j] = tbody.rows[j + 1];
        }
        parent['coll[' + i + ']'].saved = true;
      }

      if (!parent['coll[' + i + ']'].sorted[sorting[method]]) {
        wrapper['coll[' + i + ']'].sort(sorting[method]);
        parent['coll[' + i + ']'].sorted[sorting[method]] = true;
      } else {
        wrapper['coll[' + i + ']'].reverse();
      }

      var html = '';

      for (var _j = 0; _j < wrapper['coll[' + i + ']'].length; _j++) {
        tbody.removeChild(allRows[1]);
        html += wrapper['coll[' + i + ']'][_j].outerHTML;
      }

      parent.insertAdjacentHTML('afterEnd', html);
    });
  };

  for (var i = 0; i < sortLength; i++) {
    _loop(i);
  }
})();

console.log('\n---------------------------------------------Задача 12\n');
(function () {
  var anchor = document.createElement('a');

  anchor.setAttribute('href', '/');
  anchor.innerText = 'Нажми меня';

  anchor.style.borderStyle = 'grove';
  anchor.style.MozBorderRadius = '8px';
  anchor.style.WebkitBorderRadius = '8px';
  anchor.style.border = '2px groove green';
  anchor.style.display = 'block';
  anchor.style.height = '30px';
  anchor.style.lineHeight = '30px';
  anchor.style.width = '100px';
  anchor.style.textDecoration = 'none';
  anchor.style.textAlign = 'center';
  anchor.style.color = 'red';
  anchor.style.fontWeight = 'bold';

  document.querySelector('#container12').appendChild(anchor);
})();
console.log('\n---------------------------------------------Задача 13\n');
(function () {
  /**
  * Показывает уведомление, пропадающее через 1.5 сек
  *
  * @param options.top {number} вертикальный отступ, в px
  * @param options.left {number} левый отступ, в px
  * @param options.cssText {string} строка стиля
  * @param options.className {string} CSS-класс
  * @param options.html {string} HTML-текст для показа
  */
  function showNotification(options) {
    var notification = document.createElement('div');
    var s = notification.style;

    notification.innerText = options.html;
    notification.classList.add(options.className);
    if (options.className !== undefined) {
      notification.classList.add('notification');
    }

    if (options.cssText !== undefined) {
      s.cssText = options.cssText;
    }
    s.position = 'fixed';
    s.top = options.top + 'px';
    s.left = options.left + 'px';

    document.body.appendChild(notification);

    setTimeout(function () {
      document.body.removeChild(notification);
    }, 1500);
  }

  showNotification({
    top: 10,
    left: 10,
    html: 'Привет!!!',
    className: 'welcome',
    cssText: 'box-shadow: 0px 0px 3px rgba(120,120,120,.5)'
  });
  /* let i = 0;
  setInterval(() => {
    showNotification({
      top: 10,
      left: 10,
      html: `Привет ${++i}`,
      className: 'welcome',
      cssText: 'box-shadow: 0px 0px 3px rgba(120,120,120,.5)',
    });
  }, 2000); */

  /* function isHidden(elem) {
    return !elem.offsetWidth && !elem.offsetHeight;
  } */
})();
console.log('\n---------------------------------------------Задача 14\n');
(function () {
  var elem = document.querySelector('#container14');

  elem.addEventListener('click', function () {
    var height = elem.scrollHeight - elem.clientHeight - elem.scrollTop;
    console.log('scrollBottom: ' + height);
  });

  var div = document.createElement('div');

  div.style.overflowY = 'scroll';
  div.style.width = '50px';
  div.style.height = '50px';

  div.style.visibility = 'hidden';

  document.body.appendChild(div);
  var size = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);

  console.log('scrollbar: ' + size);
})();

console.log('\n---------------------------------------------Задача 15\n');
(function () {
  var div = document.getElementById('moving-div');
  var elem = document.createElement('div');
  // IE || другой браузер
  var computedStyle = div.currentStyle || getComputedStyle(div, '');

  elem.style.height = div.offsetHeight + 'px';
  elem.style.marginTop = computedStyle.marginTop;
  elem.style.marginBottom = computedStyle.marginBottom;

  div.parentElement.appendChild(elem);

  div.style.position = 'absolute';
  div.style.top = 0;
  div.style.right = 0;

  // width, height, border, margin, padding
})();

console.log('\n---------------------------------------------Задача 16\n');
(function () {
  var field = document.querySelector('#field');
  var ball = document.querySelector('#ball');

  ball.style.top = field.clientHeight / 2 - ball.offsetHeight / 2 + 'px';
  ball.style.left = field.clientWidth / 2 - ball.offsetWidth / 2 + 'px';
})();

console.log('\n---------------------------------------------Задача 17\n');
(function () {
  var elem = document.querySelector('#elem17');
  var box = document.querySelector('#container17');
  var width = box.clientWidth - (elem.offsetWidth - elem.clientWidth);

  elem.style.width = width + 'px';
  elem.style.width = width - (elem.offsetWidth - box.clientWidth) + 'px';
})();

console.log('\n---------------------------------------------Задача 18\n');
(function () {
  // Полифилл для pageYOffset в IE8
  if (!window.pageYOffset) {
    Object.defineProperty(window, 'pageYOffset', {
      get: function get() {
        return document.documentElement.scrollTop;
      }
    });
  }
  document.querySelector('#container18').addEventListener('click', function () {
    alert(window.pageYOffset);
  });
})();

console.log('\n---------------------------------------------Задача 19\n');
(function () {
  // выводит текущие координаты при клике
  document.getElementById('container19').onclick = function (e) {
    document.getElementById('coords19').innerHTML = e.clientX + ' : ' + e.clientY;
  };

  var field = document.getElementById('field19');
  var coords = field.getBoundingClientRect();

  console.log('Refresh page to update coords!');
  console.log('1. ' + coords.left + ' : ' + coords.top);
  console.log('2. ' + (coords.left + field.clientLeft) + ' : ' + (coords.top + field.clientTop));
  console.log('3. ' + (coords.left + field.clientLeft + field.clientWidth) + ' : ' + (coords.top + field.clientTop + field.clientHeight));
  console.log('4. ' + coords.right + ' : ' + coords.bottom);
})();

console.log('\n---------------------------------------------Задача 20\n');
(function () {
  /**
     * Позиционирует элемент elem относительно элемента anchor, как указано в
     * в position.
     *
     * @param {Node} anchor     Элемент-якорь, относительно которого задана позиция
     * @param {string} position Позиция: одно из top/right/bottom
     * @param {Node} elem       Элемент, который будет позиционирован
     */
  function positionAt(anchor, position, elem) {
    var e = elem.cloneNode(true);
    var coords = anchor.getBoundingClientRect();
    var height = elem.offsetHeight;
    var width = elem.offsetWidth;
    switch (position) {
      case 'top':
        e.style.top = coords.top - height + 'px';
        e.style.left = coords.left + 'px';
        break;
      case 'right':
        e.style.top = coords.top + 'px';
        e.style.left = coords.right + 'px';
        break;
      case 'bottom':
        e.style.top = coords.bottom + 'px';
        e.style.left = coords.left + 'px';
        break;
      case 'left':
        e.style.top = coords.top + 'px';
        e.style.left = coords.left - width + 'px';
        break;
      default:
        console.log('positionAt: unknown position');
        break;
    }
    elem.parentElement.replaceChild(e, elem);

    return e;
  }

  /**
   * Показывает заметку с текстом html на позиции position
   * относительно элемента anchor
   */
  function showNote(anchor, position, html) {
    var note = document.createElement('div');

    note.classList.add('note20');
    note.innerText = html;
    anchor.parentElement.appendChild(note);

    return positionAt(anchor, position, note);
  }

  // проверка работоспособности
  var blockquote = document.querySelector('#blockquote20');

  blockquote.addEventListener('click', function () {
    var note1 = showNote(blockquote, 'top', 'заметка сверху');
    var note2 = showNote(blockquote, 'right', 'заметка справа');
    var note3 = showNote(blockquote, 'bottom', 'заметка снизу');
    var note4 = showNote(blockquote, 'left', 'заметка слева');
    var parent = note1.parentElement;
    setTimeout(function () {
      parent.removeChild(note1);
      parent.removeChild(note2);
      parent.removeChild(note3);
      parent.removeChild(note4);
    }, 2000);
  });
})();

console.log('\n---------------------------------------------Задача 21\n');
(function () {})();

/* function delay(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });
}

delay(1000).then(() => alert('Hello!'));
 */
/* function httpGet(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = () => {
      if (this.status === 200) {
        resolve(this.response);
      } else {
        const error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };
    xhr.onerror = () => {
      reject(new Error('Network Error'));
    };
    xhr.send();
  });
}
 */
// Промисификация – это когда берут асинхронный функционал
// и делают для него обёртку, возвращающую промис.

/* // Создаётся объект promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // переведёт промис в состояние fulfilled с результатом "result"
    console.log('Here text of function');
    resolve('result');
  }, 1000);
  setTimeout(() => {
    reject(new Error('время вышло!'));
  }, 1000);
});

// promise.then навешивает обработчики на успешный результат или ошибку
promise
  .then(
    (result) => {
      // первая функция-обработчик - запустится при вызове resolve
      alert(`Fulfilled:  ${result}`); // result - аргумент resolve
    },
    (error) => {
      // вторая функция - запустится при вызове reject
      alert(`Fulfilled:  ${error}`); // error - аргумент reject
    },
  );
 */

/* let activeUsers = [
  { name: 'Вася' },
  { name: 'Петя' },
  { name: 'Маша' },
];

// вспомогательная информация о них,
// которая напрямую не входит в объект юзера,
// и потому хранится отдельно
let weakMap = new WeakMap();

weakMap.set(activeUsers[0], 1);
weakMap.set(activeUsers[1], 2);
weakMap.set(activeUsers[2], 3);
weakMap.set('Katya', 4); // Будет ошибка TypeError: "Katya" is not a non-null object

alert(weakMap.get(activeUsers[0])); // 1

activeUsers.splice(0, 1); // Вася более не активный пользователь

// weakMap теперь содержит только 2 элемента

activeUsers.splice(0, 1); // Петя более не активный пользователь

// weakMap теперь содержит только 1 элемент
 */
/* const set = new Set();

const vasya = { name: 'Вася' };
const petya = { name: 'Петя' };
const dasha = { name: 'Даша' };

// посещения, некоторые пользователи заходят много раз
set.add(vasya);
set.add(petya);
set.add(dasha);
set.add(vasya);
set.add(petya);

// set сохраняет только уникальные значения
alert(set.size); // 3

set.forEach(user => alert(user.name)); // Вася, Петя, Даша

// Set – коллекция для хранения множества значений,
// причём каждое значение может встречаться лишь один раз
 */

/* const recipeMap = new Map([
  ['огурцов', '500 гр'],
  ['помидоров', '350 гр'],
  ['сметаны', '50 гр'],
]);

recipeMap.forEach((value, key, map) => {
  alert(`${key}: ${value}`); // огурцов: 500 гр, и т.д.
});
 */
/* const recipeMap = new Map([
  ['огурцов', '500 гр'],
  ['помидоров', '350 гр'],
  ['сметаны', '50 гр'],
]);

// Перебор осуществляется в порядке вставки

// цикл по ключам
for (const fruit of recipeMap.keys()) {
  alert(fruit); // огурцов, помидоров, сметаны
}

// цикл по значениям [ключ,значение]
for (const amount of recipeMap.values()) {
  alert(amount); // 500 гр, 350 гр, 50 гр
}

// цикл по записям
for (const entry of recipeMap) { // то же что и recipeMap.entries()
  alert(entry); // огурцов,500 гр , и т.д., массивы по 2 значения
}
 */
/* let map = new Map();

map.set('1', 'str1'); // ключ-строка
map.set(1, 'num1'); // число
map.set(true, 'bool1'); // булевое значение

// в обычном объекте это было бы одно и то же,
// map сохраняет тип ключа
alert(map.get(1)); // 'num1'
alert(map.get('1')); // 'str1'

alert(map.size); // 3

map = new Map([
  ['1', 'str1'],
  [1, 'num1'],
  [true, 'bool1'],
]);

console.log(map);
 */
/* const range = {
  from: 1,
  to: 5,

  [Symbol.iterator]() {
    return this;
  },
  next() {
    if (this.current === undefined) {
      // инициализация состояния итерации
      this.current = this.from;
    }

    if (this.current <= this.to) {
      return {
        done: false,
        value: this.current++,
      };
    }
    // очистка текущей итерации
    delete this.current;
    return {
      done: true,
    };
  },
};
for (const num of range) {
  alert(num); // 1, затем 2, 3, 4, 5
}
// Произойдёт вызов Math.max(1,2,3,4,5);
alert(Math.max(...range)); // 5 (*)
 */
/* const range = {
  from: 1,
  to: 5,
};

// сделаем объект range итерируемым
range[Symbol.iterator] = () => {
  let current = this.from;
  const last = this.to;

  // метод должен вернуть объект с методом next()
  // метод next() возвращает объект со свойствами done и false
  return {
    next() {
      if (current <= last) {
        return {
          done: false,
          value: current++,
        };
      }
      return {
        done: true,
      };
    },
  };
};

for (const num of range) {
  alert(num); // 1, затем 2, 3, 4, 5
}
 */
/* for (const char of 'Привет') {
  alert(char);
  // Выведет по одной букве: П, р, и, в, е, т
} */

/* class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Rabbit extends Animal {
  constructor() {
    super();
    this.name = 'dd';
    alert(this);
  }
}

Rabbit();
 */
/* class Animal {
  constructor(name) {
    this.name = name;
  }

  walk() {
    alert(`I walk: ${this.name}`);
  }
}

class Rabbit extends Animal {
  walk() {
    super.walk();
    alert('...and jump!');
  }
}

new Rabbit('Вася').walk();
 */
/* const name = 'Вася';
const surname = 'Петров';
const user = {
  name,
  surname,
  get fullName() {
    return `${name} ${surname}`;
  },
};

alert(user.fullName); // Вася Петров
 */
/* let user = { name: "Вася", isAdmin: false };

// clone = пустой объект + все свойства user
let clone = Object.assign({}, user);
 */
/* let name = 'Вася';
let isAdmin = true;

let user = {
  name,
  isAdmin,
};
alert(JSON.stringify(user)); // {"name": "Вася", "isAdmin": true}
 */
/* alert('S\u0307\u0323'); // Ṩ
 */
/* let group = {
  title: "Наш курс",
  students: ["Вася", "Петя", "Даша"],

  showList: function() {
    const self = this;
    this.students.forEach(function(student) {
      alert(self.title + ': ' + student); // будет ошибка
    })
  }
}

group.showList()
 */
/* function f() {} // f.name == "f"

let gggg = function g() {}; // g.name == "g"

alert(`${f.name} ${gggg.name}`); // f g
 */
/* function showMenu({ title = 'Заголовок', width: w = 100, height: h = 200 } = {}) {
  alert(`${title} ${w} ${h}`);
}

showMenu(); // Заголовок 100 200
 */
/* const myArr = ['a', 'b'];
alert(myArr);
 */
/* let options = {
  title: 'Меню',
  width: 100,
  height: 200,
};

let { width: w, height: h, title } = options;

alert(title); // Меню
alert(w); // 100
alert(h); // 200
 */
/* let [firstName, lastName] = ['Илья', 'Кантор'];

alert(firstName); // Илья
alert(lastName); // Кантор
 */
/* function makeArmy() {
  const shooters = [];

  for (let i = 0; i < 10; i++) {
    shooters.push(() => {
      alert(i); // выводит свой номер
    });
  }

  return shooters;
}

const army = makeArmy();

army[0](); // 0
army[5](); // 5
 */

/* 
var eventMixin = {
  on: function(eventName, handler) {
    if (!this._eventHandlers) this._eventHandlers = {};
    if (!this._eventHandlers[eventName]) {
      this._eventHandlers[eventName] = [];
    }
    this._eventHandlers[eventName].push(handler);
  },


  off: function(eventName, handler) {
    var handlers = this._eventHandlers && this._eventHandlers[eventName];
    if (!handlers) return;
    for(var i=0; i<handlers.length; i++) {
      if (handlers[i] == handler) {
        handlers.splice(i--, 1);
      }
    }
  },


  trigger: function(eventName ) {

    if (!this._eventHandlers || !this._eventHandlers[eventName]) {
      return; // обработчиков для события нет
    }

    // вызвать обработчики
    var handlers = this._eventHandlers[eventName];
    for (var i = 0; i < handlers.length; i++) {
      handlers[i].apply(this, [].slice.call(arguments, 1));
    }

  }
};

// Класс Menu с примесью eventMixin
function Menu() {
 
}

for(var key in eventMixin) {
  Menu.prototype[key] = eventMixin[key];
}

// Генерирует событие select при выборе значения
Menu.prototype.choose = function(value) {
  this.trigger("select", value);
}

// Создадим меню
var menu = new Menu();

// При наступлении события select вызвать эту функцию
menu.on("select", function(value) {
  alert("Выбрано значение " + value);
});

// Запускаем выбор (событие select вызовет обработчики)
menu.choose("123");
 */
/* 
// примесь
var sayHiMixin = {
  sayHi: function() {
    alert("Привет " + this.name);
  },
  sayBye: function() {
    alert("Пока " + this.name);
  }
};

// использование:
function User(name) {
  this.name = name;
}

// передать методы примеси
for(var key in sayHiMixin) User.prototype[key] = sayHiMixin[key];

// User "умеет" sayHi
new User("Вася").sayHi(); // Привет Вася
 */

/* 
function FormatError(message) {
  this.name = "FormatError";

  this.message = message;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = (new Error()).stack;
  }

}

FormatError.prototype = Object.create(SyntaxError.prototype);
FormatError.prototype.constructor = FormatError;

// Использование

var err = new FormatError("ошибка форматирования");

alert( err.message ); // ошибка форматирования
alert( err.name ); // FormatError
alert( err.stack ); // стек на момент генерации ошибки

alert( err instanceof SyntaxError ); // true
 */

/* 
// Объявление
function PropertyError(property) {
  this.name = "PropertyError";

  this.property = property;
  this.message = "Ошибка в свойстве " + property;

  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor); // (*)
  } else {
    this.stack = (new Error()).stack;
  }

}

PropertyError.prototype = Object.create(Error.prototype);
PropertyError.prototype.constructor = PropertyError;

// Генерация ошибки
function readUser(data) {

  var user = JSON.parse(data);

  if (!user.age) {
    throw new PropertyError("age");
  }

  if (!user.name) {
    throw new PropertyError("name");
  }

  return user;
}

// Запуск и try..catch

try {
  var user = readUser('{ "age": 25 }');
} catch (err) {
  if (err instanceof PropertyError) {
    if (err.property == 'name') {
      // если в данном месте кода возможны анонимы, то всё нормально
      alert( "Здравствуйте, Аноним!" );
    } else {
      alert( err.message ); // Ошибка в свойстве ...
    }
  } else if (err instanceof SyntaxError) {
    alert( "Ошибка в синтаксисе данных: " + err.message );
  } else {
    throw err; // неизвестная ошибка, не знаю что с ней делать
  }
}

 */

/* 
function f() {
  alert( new Error().stack );
}

f(); 
 */
/* 
function Animal() {}

function Rabbit() {}
Rabbit.prototype = Object.create(Animal.prototype);

var rabbit = new Rabbit();

alert( rabbit.__proto__ == Rabbit.prototype );
alert( rabbit.__proto__.__proto__ == Animal.prototype );
alert( rabbit.__proto__.__proto__.__proto__ == Object.prototype );

 */

/* 
function A() {}

function B() {}

A.prototype = B.prototype = {};

var a = new A();

alert( a.__proto__ == B.prototype ); // true

 */

// Не друзья: instanceof и фреймы

/* 
function Animal() {}

function Rabbit() {}
Rabbit.prototype = Object.create(Animal.prototype);

var rabbit = new Rabbit();

alert( rabbit.constructor == Rabbit ); // что выведет?
 */
/* 
function Menu(state) {
  this._state = state || Menu.STATE_CLOSED;
};

Menu.STATE_OPEN = 1;
Menu.STATE_CLOSED = 0;

Menu.prototype.open = function() {
  this._state = Menu.STATE_OPEN;
};

Menu.prototype.close = function() {
  this._state = Menu.STATE_CLOSED;
};

Menu.prototype._stateAsString = function() {
  switch (this._state) {
    case Menu.STATE_OPEN:
      return 'открыто';

    case Menu.STATE_CLOSED:
      return 'закрыто';
  }
};

Menu.prototype.showState = function() {
  console.log(this._stateAsString());
};


function AnimatingMenu(state) {
  Menu.apply(this, arguments);
}

AnimatingMenu.STATE_ANIMATING = 2;

AnimatingMenu.prototype = Object.create(Menu.prototype);
AnimatingMenu.prototype.constructor = AnimatingMenu;

AnimatingMenu.prototype.open = function() {
  this._state = this.STATE_ANIMATING;

  var self = this;

  this._timerId = setTimeout(function(){
    Menu.prototype.open.call(self);
  }, 1000);
};

AnimatingMenu.prototype.close = function() {
  clearTimeout(this._timerId);
  Menu.prototype.close.apply(this);
};

AnimatingMenu.prototype._stateAsString = function() {
  switch (this._state) {
    case this.STATE_ANIMATING:
      return 'анимация';

    default:
      return Menu.prototype._stateAsString.call(this);
  }
};

// использование..

var menu = new AnimatingMenu();

menu.showState(); // закрыто

menu.open();
menu.showState(); // анимация

setTimeout(function() {
  menu.showState(); // открыто

  menu.close();
  menu.showState(); // закрыто (закрытие без анимации)
}, 1000);
 */

/* function Clock(options) {
  this._template = options.template;
}

Clock.prototype._render = function render() {
  var date = new Date();

  var hours = date.getHours();
  if (hours < 10) hours = '0' + hours;

  var min = date.getMinutes();
  if (min < 10) min = '0' + min;

  var sec = date.getSeconds();
  if (sec < 10) sec = '0' + sec;

  var output = this._template.replace('h', hours).replace('m', min).replace('s', sec);

  console.log(output);
};

Clock.prototype.stop = function() {
  clearInterval(this._timer);
};

Clock.prototype.start = function() {
  this._render();
  var self = this;
  this._timer = setInterval(function() {
    self._render();
  }, 1000);
};

function extend(Child, Parent) {
  Child.prototype = inherit(Parent.prototype);
  Child.prototype.constructor = Child;
  Child.parent = Parent.prototype;
}

function inherit(proto) {
  function F() {}
  F.prototype = proto;
  return new F;
}

function ClockInterval(options) {
  Clock.apply(this, arguments);

  this._interval = options.interval ? options.interval: 1000;
}

extend(ClockInterval, Clock)

ClockInterval.prototype.start = function() {
  this._render();
  var self = this;
  this._timer = setInterval(function() {
    self._render();
  }, this._interval);
};



var clock = new Clock({
  template: 'h:m:s'
});
clock.start();

var clockInterval = new ClockInterval({
  template: 'h:m:s',
  interval: 500
});
clockInterval.start();
 */

/* 
function Clock(options) {

  this._template = options.template;

}

Clock.prototype._render = function() {
  var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var min = date.getMinutes();
    if (min < 10) min = '0' + min;

    var sec = date.getSeconds();
    if (sec < 10) sec = '0' + sec;

    var output = this._template.replace('h', hours).replace('m', min).replace('s', sec);

    console.clear();
    console.log(output);
}

Clock.prototype.stop = function() {
  clearInterval(this.timer);
};

Clock.prototype.start = function() {
  var render = this._render.bind(this);
  render();
  this.timer = setInterval(render, 1000);
}

var clock = new Clock({
  template: 'h:m:s'
});
clock.start();
 */

/* 
function Animal(name) {
  this.name = name;

  this.walk = function() {
    alert( "ходит " + this.name );
  };

}

function Rabbit(name) {
  Animal.apply(this, arguments);
}
Rabbit.prototype = Object.create(Animal.prototype);

Rabbit.prototype.walk = function() {
  alert( "прыгает " + this.name );
};

var rabbit = new Rabbit("Кроль");
rabbit.walk();
 */

/* 
// 1. Конструктор Animal
function Animal(name) {
  this.name = name;
  this.speed = 0;
}

// 1.1. Методы -- в прототип

Animal.prototype.stop = function() {
  this.speed = 0;
  alert( this.name + ' стоит' );
}

Animal.prototype.run = function(speed) {
  this.speed += speed;
  alert( this.name + ' бежит, скорость ' + this.speed );
};

// 2. Конструктор Rabbit
function Rabbit(name) {
  this.name = name;
  this.speed = 0;
}

// 2.1. Наследование
Rabbit.prototype = Object.create(Animal.prototype);
console.dir(Rabbit.prototype);
Rabbit.prototype.constructor = Rabbit;

// 2.2. Методы Rabbit
Rabbit.prototype.jump = function() {
  this.speed++;
  alert( this.name + ' прыгает, скорость ' + this.speed );
}
 */

/* 
function Hamster() {
  this.food = []; // пустой "живот"
}

Hamster.prototype.found = function(something) {
  this.food.push(something);
};

// Создаём двух хомяков и кормим первого
var speedy = new Hamster();
var lazy = new Hamster();

speedy.found("яблоко");
speedy.found("орех");

alert( speedy.food.length ); // 2
alert( lazy.food.length ); // 2 (!??)
 */

/* 
function CoffeeMachine(power) {
  this._waterAmount = 0;
  this._WATER_HEAT_CAPACITY = 4200;
}

CoffeeMachine.prototype.run = function() {
  setTimeout(function() {
    alert( 'Кофе готов!' );
  }, this._getTimeToBoil()); //
};

CoffeeMachine.prototype.setWaterAmount = function(amount) {
  this._waterAmount = amount;
};

CoffeeMachine.prototype._getTimeToBoil = function() {
  return this._waterAmount * this._WATER_HEAT_CAPACITY * 80 / this.power;
}


var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();
 */

/* 
function Animal(name) {
  this._name = name; // защищённое свойство
  this.isLive = true // открытое свойство
}

Animal.prototype.sayHi = function() {
  alert( this._name ); // методы и свойства записываем в prototype
}

var animal = new Animal("Зверь");
animal.sayHi(); // Зверь
 */

/* 
Function.prototype.defer = function(ms){
  var f = this;
  return function(a, b) {
    var arg = arguments;
    setTimeout(function(){
      f.apply(this, arg)
    }, ms)
  }
};

function f(a, b) {
  alert( a + b );
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.

 */

/* 
Function.prototype.defer = function(ms) {
  setTimeout(this, ms)
}

Object.defineProperty(Function.prototype, "defer", {
  enumerable: false
});


function f() {
  alert( "привет" );
}

f.defer(1000); // выведет "привет" через 1 секунду

 */

/* 
if (!Object.create) {

  Object.create = function(proto) {
    function F() {}
    F.prototype = proto;
    return new F;
  };

}
 */

/* 
Object.prototype.each = function(f) {

  for (var prop in this) {
    var value = this[prop];
    f.call(value, prop, value);
  }

};

// поправить объявление свойства, установив флаг enumerable: false
Object.defineProperty(Object.prototype, 'each', {
  enumerable: false
});

// Теперь все будет в порядке
var obj = {
  name: 'Вася',
  age: 25
};

obj.each(function(prop, val) {
  alert( prop ); // name -> age
});
 */

/* 
String.prototype.repeat = function(times) {
  // this - значение примитива
  return new Array(times + 1).join(this);
};

alert( "ля".repeat(3) ); // ляляля
 */
/* 
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert( this.name );
};

var rabbit = new Rabbit("Rabbit");

rabbit.sayHi();         //
Rabbit.prototype.sayHi();         //
Object.getPrototypeOf(rabbit).sayHi();          //
rabbit.__proto__.sayHi();         //
 */
/* 
function Menu(options) {
  var arg = Object.create(null)
  options.width = options.width || 300; // по умолчанию ширина 300
}
 */

/* 
//Начнём с этого кода. Что он выведет?
function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

var rabbit = new Rabbit();

alert( rabbit.eats );
//Добавили строку (выделена), что будет теперь?

function Rabbit() {}
Rabbit.prototype = {
  eats: true
};

var rabbit = new Rabbit();

Rabbit.prototype = {};

alert( rabbit.eats );
//А если код будет такой? (заменена одна строка):

function Rabbit(name) {}
Rabbit.prototype = {
  eats: true
};

var rabbit = new Rabbit();

Rabbit.prototype.eats = false;

alert( rabbit.eats );
//А такой? (заменена одна строка)

function Rabbit(name) {}
Rabbit.prototype = {
  eats: true
};

var rabbit = new Rabbit();

delete rabbit.eats; // (*)

alert( rabbit.eats );
//И последний вариант:

function Rabbit(name) {}
Rabbit.prototype = {
  eats: true
};

var rabbit = new Rabbit();

delete Rabbit.prototype.eats; // (*)

alert( rabbit.eats );
 */

/* 
function inherit(proto) {
  function F() {}
  F.prototype = proto;
  var object = new F;
  return object;
}

if (!Object.create) Object.create = inherit;
// es5-shim
 */

/* 
function Rabbit(name) {
  this.name = name;
  alert( name );
}

var rabbit = new Rabbit("Кроль");

var rabbit2 = new rabbit.constructor("Крольчиха");
 */

/* 
function Rabbit() {}

Rabbit.prototype = {
  constructor: Rabbit
};
 */

/* 
var head = {
  glasses: 1
};

var table = {
  pen: 3,
  __proto__: head
};

var bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

var pockets = {
  money: 2000,
  __proto__: bed
};

console.log(pockets.pen == 3);
console.log(bed.glasses == 1);
console.log(table.money == undefined);
 */

/* 
var animal = {
  eat: function() {
    this.full = true;
  }
};

var rabbit = {
  __proto__: animal
};

rabbit.eat();



for (var key in rabbit) {
  if ( !rabbit.hasOwnProperty(key) ) continue;
  console.log( key + " : " + rabbit[key] );
}
 */
/* 
obj.hasOwnProperty("toString") ? obj.toString : undefined;
 */

/* 
var parent = {
  surname: "sobolev"
}

var obj = {
  name: "sasha",
  old: 26
}

obj.__proto__ = parent;

for (var key in obj) {
  if ( !obj.hasOwnProperty(key) ) continue;
  console.log( key + " : " + obj[key] );
}
 */

/* 
function Machine(power) {
  this._power = power;
  this._enabled = false;

  var self = this;

  this.enable = function() {
    self._enabled = true;
  };

  this.disable = function() {
    console.log("Machine is disable")
    self._enabled = false;
  };
}

function Fridge(power) {
  Machine.apply(this, arguments);

  var self = this;

  self.food = [];

  var parentDisable = this.disable;
  
  this.disable = function() {
    if ( isEmpty() ) {
      parentDisable();
    } else {
      console.log("Выключить нельзя, в холодильнике еда")
    }
  };

  this.addFood = function(){
    if ( !self._enabled ) {
      throw new Error("Ошибка, холодильник выключен")
    }

    for (var i = 0; i < arguments.length; i++) {
      if ( !isFull() ) {
        self.food.push( arguments[i] );
      } else {
        throw new Error("Ошибка, слишком много еды")
      }
    }
  }

  this.getFood = function(){
    return self.food.slice();
  }

  this.filterFood = function(func){
    var result = [];

    for (var i = 0; i < self.food.length; i++) {
      if( func( self.food[i] ) ) result.push( self.food[i] );
    }

    return result
  }

  this.removeFood = function(item){
    var index = self.food.indexOf(item);

    console.log("removeFood: " + index)

    if (index != -1) {
      self.food.splice(index, 1);
    }
  }

  function maxLength() {
    return self._power / 100
  }

  function isFull() {
    if ( self.food.length >= maxLength() ) {
      return true;
    }

    return false;
  }

  function isEmpty() {
    if ( self.food.length === 0 ) {
      return true;
    }
    return false;
  }
}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("кус-кус");
fridge.disable(); // ошибка, в холодильнике есть еда
 */

/* 
function Machine(power) {
  this._power = power;
  this._enabled = false;

  var self = this;

  this.enable = function() {
    self._enabled = true;
  };

  this.disable = function() {
    self._enabled = false;
  };
}

function Fridge(power) {
  Machine.apply(this, arguments);

  var self = this;

  self.food = [];

  this.addFood = function(){
    if ( !self._enabled ) {
      throw new Error("Ошибка, холодильник выключен")
    }

    for (var i = 0; i < arguments.length; i++) {
      if ( !isFull() ) {
        self.food.push( arguments[i] );
      } else {
        throw new Error("Ошибка, слишком много еды")
      }
    }
  }

  this.getFood = function(){
    return self.food.slice();
  }

  this.filterFood = function(func){
    var result = [];

    for (var i = 0; i < self.food.length; i++) {
      if( func( self.food[i] ) ) result.push( self.food[i] );
    }

    return result
  }

  this.removeFood = function(item){
    var index = self.food.indexOf(item);

    console.log("removeFood: " + index)

    if (index != -1) {
      self.food.splice(index, 1);
    }
  }

  function maxLength() {
    return self._power / 100
  }

  function isFull() {
    if ( self.food.length >= maxLength() ) {
      return true;
    }

    return false;
  }
}

var fridge = new Fridge(500);

fridge.enable();

fridge.addFood({
  title: "котлета",
  calories: 100
});
fridge.addFood({
  title: "сок",
  calories: 30
});
fridge.addFood({
  title: "зелень",
  calories: 10
});
fridge.addFood({
  title: "варенье",
  calories: 150
});

fridge.removeFood("нет такой еды"); // без эффекта
console.log( fridge.getFood().length ); // 4

var dietItems = fridge.filterFood(function(item) {
  return item.calories < 50;
});

dietItems.forEach(function(item) {
  console.log( item.title ); // сок, зелень
  fridge.removeFood(item);
});
console.log("-------------------------")

console.log( fridge.getFood() );
console.log( fridge.getFood().length ); // 2
 */

/* 
function Machine(power) {
  this._power = power;
  this._enabled = false;

  var self = this;

  this.enable = function() {
    self._enabled = true;
  };

  this.disable = function() {
    self._enabled = false;
  };
}

function Fridge(power) {
  Machine.apply(this, arguments);

  var self = this;

  self.food = [];

  this.addFood = function(){
    if ( !self._enabled ) {
      throw new Error("Ошибка, холодильник выключен")
    }

    for (var i = 0; i < arguments.length; i++) {
      if ( !isFull() ) {
        self.food.push( arguments[i] );
      } else {
        throw new Error("Ошибка, слишком много еды")
      }
    }
  }

  this.getFood = function(){
    return self.food.slice();
  }

  function maxLength() {
    return self._power / 100
  }

  function isFull() {
    if ( self.food.length >= maxLength() ) {
      return true;
    }

    return false;
  }
}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "варенье");

var fridgeFood = fridge.getFood();
console.log( fridgeFood ); // котлета, сок, варенье

// добавление элементов не влияет на еду в холодильнике
fridgeFood.push("вилка", "ложка");

console.log( fridge.getFood() ); // внутри по-прежнему: котлета, сок, варенье */

/* 
function Machine(power) {

  this._enabled = false;

  this.enable = function() {
    this._enabled = true;
  };

  this.disable = function() {
    this._enabled = false;
  };
}

function CoffeeMachine(power) {
  Machine.apply(this, arguments);

  var waterAmount = 0,
      timerId;

  var parentEnable = this.enable;
  var parentDisable = this.disable;

  this.enable = function() {
    parentEnable.call(this);
  };

  this.disable = function() {
    parentDisable.call(this);
    clearTimeout(timerId);
    timerId = null;
  };

  this.setWaterAmount = function(amount) {
    waterAmount = amount;
  };

  function onReady() {
    alert('Кофе готово!');
  }

  this.run = function() {
    if (this._enabled) {
      timerId = setTimeout(function() {
        timerId = null;
        onReady()
      }, 1000)
    } else { 
      throw new Error("Кофеварка выключена")
    };
  };

}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run();
coffeeMachine.disable(); // остановит работу, ничего не выведет
 */

/* 
 function Machine(power) {
  this._enabled = false;

  this.enable = function() {
    this._enabled = true;
  };

  this.disable = function() {
    this._enabled = false;
  };
}

function CoffeeMachine(power) {
  Machine.apply(this, arguments);

  var waterAmount = 0;

  this.setWaterAmount = function(amount) {
    waterAmount = amount;
  };

  function onReady() {
    alert('Кофе готово!');
  }

  this.run = function() {
    if (this._enabled) setTimeout(onReady, 1000);
    else  throw new Error("Кофеварка выключена");
  };

}

var coffeeMachine1 = new CoffeeMachine(10000);
coffeeMachine1.run(); // ошибка, кофеварка выключена!

var coffeeMachine2 = new CoffeeMachine(10000);
coffeeMachine2.enable();
coffeeMachine2.run(); // ...Кофе готов!
 */

/* 
function Machine(power) {
  this._power = power; // (1)

  this._enabled = false;

  this.enable = function() {
    this._enabled = true;
  };

  this.disable = function() {
    this._enabled = false;
  };
}

function CoffeeMachine(power) {
  Machine.apply(this, arguments); // (2)

  alert( this._enabled ); // false
  alert( this._power ); // 10000
}

var coffeeMachine = new CoffeeMachine(10000);
 */

/* 
function CoffeeMachine(power, capacity) {
  var waterAmount = 0;

  var timerId;

  this.isRunning = function() {
    return !!timerId;
  };

  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.setWaterAmount = function(amount) {
    // ... проверки пропущены для краткости
    waterAmount = amount;
  };

  this.getWaterAmount = function(amount) {
    return waterAmount;
  };

  function onReady() {
    alert( 'Кофе готов!' );
  }

  this.setOnReady = function(newOnReady) {
    onReady = newOnReady;
  };

  this.run = function() {
    timerId = setTimeout(function() {
      timerId = null;
      onReady();
    }, getTimeToBoil());
  };

}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

alert( 'До: ' + coffeeMachine.isRunning() ); // До: false

coffeeMachine.run();
alert( 'В процессе: ' + coffeeMachine.isRunning() ); // В процессе: true

coffeeMachine.setOnReady(function() {
  alert( "После: " + coffeeMachine.isRunning() ); // После: false
});

 */

/* 
function CoffeeMachine(power, capacity) {
  var waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  var startTime, nowTime, timerTime;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.setWaterAmount = function(amount) {
    waterAmount = amount;
  };

  this.getWaterAmount = function(amount) {
    return waterAmount;
  };

  function onReady() {
    alert( 'Кофе готов!' );
  }

  this.isRunning = function() {
    nowTime = new Date();

    if (nowTime - startTime < timerTime) return true;

    return false;
  }

  this.setOnReady = function(newOnReady) {
    onReady = newOnReady;
  };

  this.run = function() {

    timerTime = getTimeToBoil();
    startTime = new Date();

    setTimeout(function() {
      onReady();
    }, timerTime);
  };

}


var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(100);

alert( 'До: ' + coffeeMachine.isRunning() ); // До: false

coffeeMachine.run();
alert( 'В процессе: ' + coffeeMachine.isRunning() ); // В процессе: true

coffeeMachine.setOnReady(function() {
  alert( "После: " + coffeeMachine.isRunning() ); // После: false
});

 */

/* 
function CoffeeMachine(power, capacity) {
  var waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.setWaterAmount = function(amount) {
    // ... проверки пропущены для краткости
    waterAmount = amount;
  };

  this.getWaterAmount = function(amount) {
    return waterAmount;
  };

  function onReady() {
      alert( 'Кофе готов!' );
    }

  this.run = function() {
    setTimeout(function(){
      onReady()
    }, getTimeToBoil());
  };

  this.setOnReady = function(func){
    onReady = func.bind(this);
  }

}

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(150);

coffeeMachine.setOnReady(function() {
  var amount = coffeeMachine.getWaterAmount();
  alert( 'Готов кофе: ' + amount + 'мл' ); // Кофе готов: 150 мл
});

coffeeMachine.run();
 */

/*
function CoffeeMachine(power, capacity) {
  var waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  this.setWaterAmount = function(amount) {
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить больше, чем " + capacity);
    }

    waterAmount = amount;
  };

  function onReady() {
    alert( 'Кофе готов!' );
  }

  this.run = function() {
    setTimeout(onReady, getTimeToBoil());
  };

  this.addWater = function(value) {
    this.setWaterAmount(waterAmount + value)
  }

}

var coffeeMachine = new CoffeeMachine(100000, 400);
coffeeMachine.addWater(200);
coffeeMachine.addWater(100);
coffeeMachine.addWater(300); // Нельзя залить больше, чем 400
coffeeMachine.run();
 */

/* 
function CoffeeMachine(power, capacity) {
  var waterAmount;
  
  this.setWaterAmount = function(amount) {
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить воды больше, чем " + capacity);
    }

    waterAmount = amount;
  };

  this.getWaterAmount = function() {
    return waterAmount;
  };

  this.getPower = function(){
    return power;
  }

}

var machine  = new CoffeeMachine(100, 150);

alert( machine.getPower() );
 */
/* 
function User() {
  var firstName,
      surname,
      self = this;

  this.setFirstName = function(str) {
    firstName = str;
  }

  this.setSurname = function(str) {
    surname = str;
  }

  this.getFullName = function() {
    return firstName + " " + surname;
  }
}

var user = new User();
user.setFirstName("Петя");
user.setSurname("Иванов");

alert( user.getFullName() ); // Петя Иванов
 */

/* 
function CoffeeMachine(power, capacity) {
  var waterAmount = 0;

  this.waterAmount = function(amount) {
    // вызов без параметра, значит режим геттера, возвращаем свойство
    if (!arguments.length) return waterAmount;

    // иначе режим сеттера
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить воды больше, чем " + capacity);
    }

    waterAmount = amount;
  };

}

var coffeeMachine = new CoffeeMachine(1000, 500);

// пример использования
coffeeMachine.waterAmount(450);
alert( coffeeMachine.waterAmount() ); // 450

 */

/* 
function CoffeeMachine(power, capacity) { // capacity - ёмкость кофеварки
  var waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  function getTimeToBoil() {
    return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  // "умная" установка свойства
  this.setWaterAmount = function(amount) {
    if (amount < 0) {
      throw new Error("Значение должно быть положительным");
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить воды больше, чем " + capacity);
    }

    waterAmount = amount;
  };

  this.getWaterAmount = function() {
    return waterAmount;
  };

  function onReady() {
    alert( 'Кофе готов!' );
  }

  this.run = function() {
    setTimeout(onReady, getTimeToBoil());
  };

}

var coffeeMachine = new CoffeeMachine(1000, 500);
try {
  coffeeMachine.setWaterAmount(600); // упс, ошибка!
} catch (e) {
  alert(e)
}
 */

/* 
function CoffeeMachine(power) {
  this.waterAmount = 0;

  var WATER_HEAT_CAPACITY = 4200;

  var self = this,
      timerId;

  function getBoilTime() {
    return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
  }

  function onReady() {
    alert( 'Кофе готово!' );
  }

  this.run = function() {
    timerId = setTimeout(onReady, getBoilTime());
  };

  this.stop = function() {
    clearTimeout(timerId);
  };

}

var coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();
coffeeMachine.stop(); // кофе приготовлен не будет
 */

/* 
"use strict"

function CoffeeMachine(power) {

  this.waterAmount = 0;

  // физическая константа - удельная теплоёмкость воды для getBoilTime
  var WATER_HEAT_CAPACITY = 4200;

  // расчёт времени для кипячения
  var getBoilTime = function() {
    return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power; // ошибка!
  }.bind(this);

  // что делать по окончании процесса
  function onReady() {
    alert( 'Кофе готов!' );
  }

  this.run = function() {
    setTimeout(onReady, getBoilTime.call(this));
  };

}

var coffeeMachine = new CoffeeMachine(1000);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();
 */

/* 
"use strict"

function CoffeeMachine(power) {

  this.waterAmount = 0;

  // физическая константа - удельная теплоёмкость воды для getBoilTime
  var WATER_HEAT_CAPACITY = 4200;

  // расчёт времени для кипячения
  function getBoilTime() {
    return this.waterAmount * WATER_HEAT_CAPACITY * 80 / power; // ошибка!
  }

  // что делать по окончании процесса
  function onReady() {
    alert( 'Кофе готов!' );
  }

  this.run = function() {
    setTimeout(onReady, getBoilTime.call(this));
  };

}

var coffeeMachine = new CoffeeMachine(1000);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();
 */

/* 

try {
  var data = '{ "name": "Вася", "age": 30 }';

                                                                  try {
                                                                    // ...
                                                                    try {
                                                                      // ...
                                                                      blabla(); // ошибка!
                                                                    } catch (e) {
                                                                      // ...
                                                                      alert(e.name)
                                                                      if (e.name != 'SyntaxError') {
                                                                        throw e; // пробрасываем
                                                                      }
                                                                    }
                                                                    blabla(); // ошибка!
                                                                  } catch (e) {
                                                                    // ...
                                                                    alert(e.name)
                                                                    if (e.name != 'SyntaxError') {
                                                                      throw e; // пробрасываем
                                                                    }
                                                                  }
} catch (e) {
  alert( "Поймал во внешнем catch: " + e ); // ловим
}
 */

/* 
try {
  
    console.log('Начало блока try');  // (1) <--
  
    lalala; // ошибка, переменная не определена!
  
    console.log('Конец блока try');  // (2)
  
  } catch(e) {
  
    console.log('name: ' + e.name + "\n message: " + e.message + "\n stack: " + e.stack); // (3) <--
  
  }
  
  console.log("Потом код продолжит выполнение...");
 */

/* 
//Eval-калькулятор

function calculator() {
  var ev, result;

  ev = prompt("Выражение: ", "");
  result = eval(ev);

  console.log(result);
  return result;
}

calculator();

 */

/* 
function throttle(func, ms) {
  
    var isThrottled = false,
      savedArgs,
      savedThis;
  
    function wrapper() {
  
      if (isThrottled) { // (2)
        savedArgs = arguments;
        savedThis = this;
        return;
      }
  
      func.apply(this, arguments); // (1)
  
      isThrottled = true;
  
      setTimeout(function() {
        isThrottled = false; // (3)
        if (savedArgs) {
          wrapper.apply(savedThis, savedArgs);
          savedArgs = savedThis = null;
        }
      }, ms);
    }
  
    return wrapper;
}
 */

/* 
var fn = debounce(f, 1000);

fn(1); // вызов отложен на 1000 мс
fn(2); // предыдущий отложенный вызов игнорируется, текущий (2) откладывается на 1000 мс

// через 1 секунду будет выполнен вызов f(1)

setTimeout( function() { fn(3) }, 1100); // через 1100 мс отложим вызов еще на 1000 мс
setTimeout( function() { fn(4) }, 1200); // игнорируем вызов (3)

// через 2200 мс от начала выполнения будет выполнен вызов f(4)


function f() {
  console.log("f()");
 }

function debounce(f, ms){

  var notRun = false,
      timerId;

  return function() {

    var savedThis = this,
        savedArguments = arguments;

    if ( notRun ) {

      stack = true;
      
        timerId = setTimeout(function(){
          
            f.apply(savedThis, arguments);
            console.log(ms)
            stack = false;
    
        }, ms);

    } else {

      stack = true;

      clearTimeout(timerId);
      
      timerId = setTimeout(function(){
        
          f.apply(savedThis, savedArguments);
          console.log(ms)
          stack = false;
  
      }, ms);

    }

  }

}
 */

/* 
var f1000 = delay(f, 1000);
var f1500 = delay(f, 1500);

f1000("тест"); // выведет "тест" через 1000 миллисекунд
f1500("тест2"); // выведет "тест2" через 1500 миллисекунд


function f(x) {
  console.log( x );
}

function delay(f, time){

  return function() {
    var savedThis = this;
    var savedArgs = arguments;

    setTimeout(function() {
    
      f.apply(savedThis, savedArgs);
    
    }, time);

  }
  
};
 */

/* 
printNumbersInterval();

function printNumbersInterval() {

  var i      = 0, 
      finish = 20;

  var timerId = setTimeout(function print() {

    console.log( ++i );

    if( i == finish ) {

      clearTimeout( timerId );

    } else {

      timerId = setTimeout(print, 100);

    }

  }, 100);

};
 */

/* 
printNumbersInterval();

function printNumbersInterval(){

  var count = 20;

  var timerId = setInterval(function tick(){

    console.log( 20 - (--count) );

    if ( !count ) {
      clearInterval( timerId );
    }

  }, 100);

};
 */

/* 
// setTimeout - внутренняя ссылка исчезнет после исполнения функции
// минимальная задержка 4s
// setInterval - ссылка исчезнет при очистке таймера
 */
/* 
//var timerId = setTimeout(func / code, delay[, arg1, arg2 ...])
// clearTimeout(timerId);
// Таймеры это надстройка над java script
//-- setInterval, clearInterval()
// Модальные окна замораживают время в chrome/safari/opera
// setInterval не гарантирует паузы во время исполнения
var timerId = setTimeout(function tick(){

  alert("тик");

  timerId = setTimeout(tick, 2000);

}, 2000);
 */
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
    //
    var self = this;

    ask("Ваш пароль?", self.password,
      function() {
        self.loginDone(true);
      },
      function() {
        self.loginDone(false);
      }
    );

    //
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

  // метод для вызова из ask
  loginDone: function(result) {
    alert( this.login + (result ? ' вошёл в сайт' : ' ошибка входа') );
  },

  checkPassword: function() {
    //

    ask.call(
      this, 
      "Ваш пароль?", 
      this.password,
      this.loginDone.bind(this, true),
      this.loginDone.bind(this, false)

    );

    //
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
    //
    ask.call(this, "Ваш пароль?", this.password, this.loginOk.bind(this), this.loginFail.bind(this));
    //
  }
};

var vasya = user;
user = null;
vasya.checkPassword();
 */

/* 
var bound = function() {
  return sayHi().call({
    name: "Вася"
  });
}
 */
/* 
var firsttF = function() {
  return f.call( {name: "Вася"} );
}

var secondF = function() {
  return firsttF.call( { name: "Петя" } );
}
 */

/* 
ask("Выпустить птичку?", "да", fly, die);

function fly() {
  alert( 'улетела :)' );
}

function die() {
  alert( 'птичку жалко :(' );
}

function ask(question, answer, ok, fail) {
  var result = prompt(question, '');
  if (result.toLowerCase() == answer.toLowerCase()) ok();
  else fail();
}
 */

/* 
function bind(func, context) {
  return function() { // (*)
    return func.apply(context, arguments);
  };
}
function f() {
  alert( this );
}

var g = bind(f, "Context");
g(); // Context
 */
/* 
var user = {
  firstName: "Вася",
  sayHi: function() {
    alert( this.firstName );
  }
};

setTimeout(function() {
  user.sayHi(); // Вася
}, 1000);
 */

/* 
var user = {
  firstName: "Вася",
  sayHi: function() {
    alert( this.firstName );
  }
};

//user.sayHi();

setTimeout(user.sayHi, 1000); // undefined (не Вася!)
 */
/* 
// Применить Math.max к аргументам 2, -2, 3
console.log( applyAll(Math.max, 2, -2, 3) ); // 3

// Применить Math.min к аргументам 2, -2, 3
console.log( applyAll(Math.min, 2, -2, 3) ); // -2

console.log( applyAll(sum, 1, 2, 3) ); // -> sum(1, 2, 3) = 6
console.log( applyAll(mul, 2, 3, 4) ); // -> mul(2, 3, 4) = 24

function applyAll() {

  return arguments[0].apply(null, [].slice.call(arguments, 1) );

};

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
 */

/* 
function sumArgs() {
  
  arguments.reduce = [].reduce;

  return arguments.reduce(function(a, b) {
    return a + b;
  });

}

console.log( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива
 */

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
/*
var a = 5;

function f() {
  console.log('внутри функции a = ' + a); // что выведет: 5 или undefined? - 5
  a = 777; // а так что поменяется, внешняя или внутренняя a?

  var obj = {
    a: 10
  }

  with(obj) {
    var a = 7; // как изменится вывод, если убрать 'var'?
  }

  console.log('obj.a после with = ' + obj.a); // что выведет: 10 или 7?
  console.log('внутри функции после with, a  = ' + a); // что выведет: 777 или 7?
}

f();

console.log('после f() внешняя а  = ' + a); // что выведет: 5, 777 или 7?
*/

/*

function f() {
  var value = Math.random();

  return function() { return value; };
}

// 3 функции, каждая ссылается на свой объект переменных,
// каждый со своим значением value
var arr = [f(), f(), f()];

console.log( arr[0]() );
console.log( arr[1]() );
console.log( arr[2]() );

*/

/*
(function () {

  var message = "Привет";

  function showMessage() {
    alert( message );
  }

  showMessage();

})();
*/

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

/* 
function f(x) {
  return Math.random()*x;
}

function makeCaching(f) {
  var cache = {};

  return function(x) {
    if (!(x in cache)) {
      cache[x] = f.call(this, x);
    }
    return cache[x];
  };

}

f = makeCaching(f);

var a = f(1);
var b = f(1);
alert( a == b ); // true (значение закешировано)

b = f(2);
alert( a == b ); // false, другой аргумент => другое значение
 */

/* 
function f(x) {
  return Math.random() * x; // random для удобства тестирования
}

function makeCaching(f) {
  return function(a) {



    if( !f[a] ) { // отсутствует

      var result = f.call(this, a);

      f[ a ] = result;

      return result;

    }

    return f[ a ];

  }
}

f = makeCaching(f);

var a, b;

a = f(1);
b = f(1);
alert( a == b ); // true (значение закешировано)

b = f(2);
alert( a == b ); // false, другой аргумент => другое значение
 */

/*
function work(a, b) {
  alert( a + b ); // work - произвольная функция
}

function makeLogging(f, log) {

  function wrapper() {
      log.push([].slice.call(arguments));
      return f.apply(this, arguments);
    }

  return wrapper;
}

var log = [];
work = makeLogging(work, log);

work(1, 2); // 3
work(4, 5); // 9

for (var i = 0; i < log.length; i++) {
  var args = log[i]; // массив из аргументов i-го вызова
  alert( 'Лог:' + args.join() ); // "Лог:1,2", "Лог:4,5"
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

work(1); // 1
work(5); // 5

for (var i = 0; i < log.length; i++) {
  alert( 'Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
}
 */

/*

function formatDateString(date) {
  var arrDate  = [
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds()
  ];

  arrDate[1] += 1;

  for(var i = 0; i < arrDate.length; i++) {

    arrDate[i] += "";

    if (arrDate[i].length === 1) {
      arrDate[i] = "0" + arrDate[i];
    };

    if (arrDate[i].length === 4) {
      arrDate[i] = arrDate[i].slice(2);
    };

  };

  return arrDate[2] + "." + arrDate[1] + "." + arrDate[0] + " "
    + arrDate[3] + ":" + arrDate[4];
};

function formatDate(date) {
  var dateNow    = new Date(),
      difference = dateNow - date,
      result;

  if (difference < 1000) {

    result = "только что";

  } else if(difference < 1000 * 60) {

    result = difference / 1000 + " сек. назад";

  } else if (difference < 1000 * 60 * 60) {

    result = difference / (1000 * 60) + " мин. назад";

  } else {

    result = formatDateString(date);

  }

  return result;

};

console.log( formatDate(new Date(new Date - 1)) ); // "только что"

console.log( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

console.log( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

console.log( formatDate(new Date(new Date - 86400 * 1000)) ); // вчерашняя дата в формате "дд.мм.гг чч:мм"

*/

/*
var d = new Date(2014, 0, 30); // 30 января 2014

console.log( formatDate(d) ); // '30.01.14'

function formatDate(date) {
  var arrDate  = [
    date.getFullYear(),
    date.getMonth(),
    date.getDate() ];

  arrDate[1] += 1;

  for(var i = 0; i < arrDate.length; i++) {

    arrDate[i] += "";

    if (arrDate[i].length === 1) {
      arrDate[i] = "0" + arrDate[i];
    };

    if (arrDate[i].length === 4) {
      arrDate[i] = arrDate[i].slice(2);
    };

  };

  return arrDate[2] + "." + arrDate[1] + "." + arrDate[0];
};
*/

/*console.log(
  getSecondsToTomorrow()
);

function getSecondsToTomorrow() {
  var today = new Date(),
      tomorrow = new Date(
        today.getFullYear(), today.getMonth(), today.getDate() + 1);

  return parseInt( (tomorrow - today) / 1000 );
};*/

/*

console.log( getSecondsToday() );

function getSecondsToday() {
  var dateEnd  = new Date(),
      dateStart = new Date(),
      milliseconds;

  dateStart.setHours(0,0,0,0);

  milliseconds = dateEnd - dateStart;

  return parseInt( milliseconds / 1000 );
};

*/

/*
console.log(
  getLastDayOfMonth(2012, 1)
); // = 29

function getLastDayOfMonth(year, month) {
  var monthPrev = month !== 11 ? month + 1 : 0,
      date = new Date(year, monthPrev, 0);

  return date.getDate();
}
*/
/*

var date = new Date(2015, 0, 2);

console.log( getDateAgo(date, 1) ); // 1, (1 января 2015)
console.log( getDateAgo(date, 2) ); // 31, (31 декабря 2014)
console.log( getDateAgo(date, 365) ); // 2, (2 января 2014)

function getDateAgo(date, days) {
  var dateNew = new Date( date );

  dateNew.setDate( dateNew.getDate() - days );

  return dateNew.getDate();
};

*/
/*

var date = new Date(2012, 0, 3);  // 3 янв 2012
alert( getLocalDay(date) );       // вторник, выведет 2

function getLocalDay(date) {
  return date.getDay() ? date.getDay() : 7;
};

*/
/*

var date = new Date(2012,0,3);  // 3 января 2012
alert( getWeekDay(date) );      // Должно вывести 'вт'

function getWeekDay(date) {
  var days = {
    0: "вс",
    1: "пн",
    2: "вт",
    3: "ср",
    4: "чт",
    5: "пт",
    6: "сб"
  };

  return days[date.getDay()];

};

*/
/*

console.log( new Date(2012, 01, 20, 03, 12, 00, 00) );

*/

/*

console.log( sum() ); //= 0
console.log( sum(1) ); //= 1
console.log( sum(1, 2) ); //= 3
console.log( sum(1, 2, 3) ); //= 6
console.log( sum(1, 2, 3, 4) ); //= 10


function sum() {
  var sum = 0;

  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  };

  return sum;
};

*/
/*

function f(x) {
  if (arguments.length) return 1;

  return 0;
}

console.log( f(undefined) ); // 1
console.log( f() ); // 0

*/

/*

var arr = [ 1, 2, 3, 4, 5 ];

console.log( getSums( arr ) ); // [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]

function getSums(arr) {
  var arrRes = [];

  arr.reduce(function (value, current) {

    value = value + current;

    arrRes.push( value );

    return value;
  }, 0);

  return arrRes;
};

*/
/*

var arr = ["Есть", "жизнь", "на", "Марсе"];

var arrLength = arr.map(function (item, i, arr) {
  return item.length;
});

console.log( arrLength ); // 4,5,2,5

*/

/*

var strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", "8-()"
];

console.log( unique(strings) ); // кришна, харе, 8-()

function unique(strings) {
  var arr = [],
      obj = {};

  for (var i = 0; i < strings.length; i++) {
    obj[ strings[i] ] = true;
  };

  for (var key in obj) {
    arr.push( key );
  };

  return arr;

};

*/
/*

var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];

console.log( aclean(arr) );

function aclean(arr) {
  var objTemp = {},
      arrTemp = [];

  for (var i = 0; i < arr.length; i++) {
    var word = arr[i]
      .toLowerCase()
      .split("")
      .sort()
      .join("");

    objTemp[word] = i;
  };

  for(var key in objTemp) {
    arrTemp.push( arr[objTemp[key]] )
  }

  arr = arrTemp;

  return arr;
};

*/
/*

var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

printList(list);
console.log("------------------------------")
printListRecursion(list);
console.log("------------------------------")
printReverseList(list);
console.log("------------------------------")
printReverseListRecursion(list);
console.log("------------------------------")

function printList(list) {
  var link = list;

  while (link) {

    console.log(link);
    link = link.next;

  };

};
function printListRecursion(list) {

  console.log(list);

  if (list.next) {
    printListRecursion(list.next)
  };

};
function printReverseList(list) {
  var link = list;
  var arr = [];

  while (link) {

    arr.push( link );
    link = link.next;

  };

  arr.reverse();

  for(var i = 0; i < arr.length; i++) {
    console.log( arr[i] );
  };

};
function printReverseListRecursion(list) {

  if (list.next) {

    printReverseListRecursion(list.next)

  };

  console.log(list);

};

*/

/*

var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];

people.sort(function (a, b) {
  return a.age - b.age;
});

// теперь people: [vovochka, masha, vasya]
console.log(people);

*/

/*

var arr = [1, 2, 3, 4, 5];

arr.sort(function (a, b) {

  return Math.random() - 0.5;

});

console.log( arr ); // элементы в случайном порядке, например [3,5,1,2,4]

*/

/*

var arr = ["HTML", "JavaScript", "CSS"];

var arrSorted = arr
  .concat()
  .sort();

console.log( ( arrSorted ) ); // CSS, HTML, JavaScript
console.log( ( arr ) ); // HTML, JavaScript, CSS (без изменений)

*/

/*

var arr = [5, 2, 1, -10, 8];

arr.sort(function (a, b) {
  return b - a;
});

console.log( arr );

*/

/*

arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

console.log( arr ); // массив изменился: остались [3, 1]

function filterRangeInPlace(arr, a, b) {

  for(var i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= a) continue;

    arr.splice(i,1);

  };

};

*/

/*

var obj = {
  className: 'menu'
};

console.log( removeClass(obj, 'open') ); // obj.className='menu'
console.log( removeClass(obj, 'blabla') ); // без изменений (нет такого класса)
console.log( removeClass(obj, 'menu') );

function removeClass(obj, name) {
  var arr = obj["className"].split(" ");

  while (arr.indexOf(name) != -1) {
    arr.splice(arr.indexOf(name), 1);
  };

  if ( arr.length > 1 ) {
    obj["className"] = arr.join(" ");
  } else {
    obj["className"] = arr.join("");
  }

  return obj["className"];
};

*/

/*

console.log( camelize("background-color") );
console.log( camelize("list-style-image") );
console.log( camelize("-webkit-transition") );

function camelize(str) {
  var arr = str.split("-"),
      result;

  for (var i = 1; i < arr.length; i++) {
    arr[i] =
      arr[i]
      .charAt(0)
      .toUpperCase()
      +
      arr[i].slice(1)
  };

  result = arr.join("");

  return result;
}

*/

/*

var obj = {
  className: 'open menu'
};

addClass(obj, 'new'); // obj.className='open menu new'
addClass(obj, 'open'); // без изменений (класс уже существует)
addClass(obj, 'me'); // obj.className='open menu new me'

console.log( obj.className ); // "open menu new me"

function addClass(obj, cls) {
  var arr = obj.className.split(' ');

  if ( !!arr.indexOf(cls) ) {
    arr.push(cls);

    if (obj.className === "") {
      obj.className = arr.join('');
    } else {
      obj.className = arr.join(' ');
    }
  };
};

*/

/*

console.log( getMaxSubSum([-1, 2, 3, -9]) ); //= 5
console.log( getMaxSubSum([2, -1, 2, 3, -9]) ); //= 6
console.log( getMaxSubSum([-1, 2, 3, -9, 11]) ); //= 11
console.log( getMaxSubSum([-2, -1, 1, 2]) ); //= 3;
console.log( getMaxSubSum([100, -9, 2, -3, 5]) ); //= 100
console.log( getMaxSubSum([1, 2, 3]) ); //= 6

function getMaxSubSum(arr) {

  var sumMax = 0, sumCurr = 0, sumPrev = 0;

  for (var i = 0; i < arr.length; i++) {

    sumCurr += arr[i];

    if (sumCurr >= 0) {

      sumPrev = sumCurr;

    } else if (sumCurr < 0) {

      sumCurr = 0;

    }

    if (sumPrev > sumMax) {
      sumMax = sumPrev;
    }

  };

  return sumMax;

};

function getMaxSubSum(arr) {
  var maxSum = 0,
    partialSum = 0;
  for (var i = 0; i < arr.length; i++) {
    partialSum += arr[i];
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }
  return maxSum;
}

*/

/*

var count = 100,
    mas   = [],
    masPr = [],
    sum = 0,
    i, j, iPrime;

for(i = 0; i < count; i++) {

  mas.push(true);

};

console.log(mas);

iPrime = 2;


while( Math.pow(iPrime, 2) < count) {

  for(j = 2, i = 0; i < count; i++) {

    if( j * iPrime === i ) {

      mas[i] = false;
      j++;

    };

  };

  for(i = iPrime + 1; i < count; i++) {

    if( mas[i] !== false ) {

      iPrime = i;
      break;

    };

  };

};

console.log(mas);

for(i = 2; i < count; i++) {

  if( mas[i] !== false ) {

    masPr.push( i );

  };

};

for(i = 0; i < masPr.length; i++) {

  sum += masPr[i];

};

console.log(masPr);
console.log(sum);

*/

/*

var arr = [5, 3, 8, 1];

var filtered = filterRange(arr, 1, 4);

console.log( filtered );

function filterRange(arr, a, b) {
  var result = [];

  for (var j = 0, i = 0; i < arr.length; i++) {

    if ( arr[i] >= a && arr[i] <= b) {

      result.push( arr[i] );

    };

  };

  return result;
};

*/

/*

arr = ["test", "2", 2, 1.5, false];

console.log( find(arr, "test") ); // 0
console.log( find(arr, 2) ); // 1
console.log( find(arr, 1.5) ); // 2

console.log( find(arr, 0) ); // -1

function find(arr, arg) {
  for (var i = 0; i < arr.length; i++) {
    if ( arr[i] === arg) return i;
  };
  return -1;
};

*/

/*

var numbers = [];

while (true) {
  var n = prompt("Число", "");

  if (!n || n === "") {
    break;
  };

  if ( isNumeric(n) ) {
    numbers.push(+n);
  };

};

var sum = 0;

for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
};

console.log(sum)

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

*/

/*

var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];

var rand = Math.floor(Math.random() * arr.length);

console.log( arr[rand] );

*/

/*

var styles = ["Джаз", "Блюз"];

console.log(styles);

styles[styles.length] = "Рок-н-Ролл";

console.log(styles);

styles[styles.length - 2] = "Классика";

console.log( styles.shift() );
console.log(styles);

styles.unshift("Регги", "Рэп");

console.log(styles);

*/

/*

var goods = [1,2,3,4,5,6,7,8,9,10,11];

console.log( goods[goods.length -1] );

goods.push("Компьютер");

goods[goods.length] = ("Компьютер");

console.log( goods );

*/

// Массив – это объект, где в качестве ключей выбраны цифры, с дополнительными методами и свойством length.


/*

var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

console.log( menu );

multiplyNumeric(menu);

console.log( menu );

multiplyNumeric(menu);

console.log( menu );

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};
function multiplyNumeric(obj) {
  for (var key in obj) {
    if ( isNumeric( obj[key] ) ) {
      obj[key] *= 2;
    };
  };
};

*/

/*

var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
};

console.log( sumOfValues(salaries) );
console.log( sumOfValuesMax(salaries) );

function sumOfValues(obj) {
  var sum = 0;
  for (var key in obj) {
    sum += obj[key];
  }
  return sum;
}

function sumOfValuesMax(obj) {
  var sum = 0;
  var name = "";
  for (var key in obj) {
    if ( obj[key] > sum ) {
      sum = obj[key];
      name = key;
    };
  };
  return sum ? name : "нет сотрудников";
};

*/

/*

function isEmpty(obj) {
  var properties = 0;

  for (var key in obj) {
    properties++;
  }

  return properties ? false : true;
}

var schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) ); // false

*/

/*

var user = {};
user["name"] = "Вася";
user["surname"] = "Петров";
user["name"] = "Сергей";
delete user["name"];

*/

// Квадртаные скобки позволяют использовать в качестве имени свойства лубую строку.
// person['любимый стиль музыки'] = 'Классика';

/*

var obj = {};
obj.test; // добавили свойство со значением undefined

// проверим наличие свойств test и заведомо отсутствующего blabla
alert( obj.test === undefined ); // true
alert( obj.blabla === undefined ); // true

*/

/*

function extractCurrencyValue(str) {
  return +str.slice(1);
}
console.log( extractCurrencyValue("$120") );

*/

/*

function truncate(str, maxLength) {
  var resultStr = str;

  if ( str.length > maxLength ) {
    resultStr = str.slice(0, maxLength - 3) + "...";
  };

  return resultStr;
}

console.log (
  truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) );

console.log ( truncate("Всем привет!", 20) );

console.log ( truncate("What I'd like to tell on this topic is", 20) );

*/

/*

console.log( checkSpam('buy ViAgRA now') );
console.log( checkSpam('free xxxxx') );
console.log( checkSpam("innocent rabbit") );

function checkSpam(str) {
  var strLoverCase = str.toLowerCase();
  if ( ~strLoverCase.indexOf("xxx") || ~strLoverCase.indexOf("viagra") ) {
    return true;
  }
  return false;
}

*/

/*

function ucFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

*/

/*

setTimeout( function () {
  console.log(getRandom(5, 10))
}, 1000);
setTimeout( function () {
  console.log(getRandom(0, 5))
}, 2000);
setTimeout( function () {
  console.log(getRandom(500, 1000))
}, 3000);
setTimeout( function () {
  console.log(getRandom(20, 25))
}, 4000);
setTimeout( function () {
  console.log(getRandom(352, 354))
}, 5000);
setTimeout( function () {
  console.log(getRandom(800 ,888))
}, 6000);

function getRandom (min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  rand = Math.round(rand);
  return rand;
}

*/

/*

setTimeout( function () {
  console.log(getRandom(10))
}, 1000);
setTimeout( function () {
  console.log(getRandom(100))
}, 2000);
setTimeout( function () {
  console.log(getRandom(1000))
}, 3000);
setTimeout( function () {
  console.log(getRandom(25))
}, 4000);
setTimeout( function () {
  console.log(getRandom(354))
}, 5000);
setTimeout( function () {
  console.log(getRandom(888))
}, 6000);

function getRandom (max) {
  return parseInt( max * Math.random() );
}

*/

/*

console.log( fib(77) );
console.log( fibBinet(77) );

function fib(n) {
  var a = 1,
    b = 0,
    x;
  for (i = 0; i < n; i++) {
    x = a + b;
    a = b
    b = x;
  }
  return b;
}
function fibBinet(n) {
  var phi = (1 + Math.sqrt(5)) / 2;

  return Math.pow(phi, n) / Math.sqrt(5);
}

*/

/*
console.log( getDecimal(12.345) ); // 0.345
console.log( getDecimal(1.2) ); // 0.2
console.log( getDecimal(-1.2) ); // 0.2
console.log( getDecimal(1.3) ); // 0.3
console.log( getDecimal(5) ); // 0

function getDecimal(num) {
  var numRound = Math.round(num * 1000) / 1000;
  if (numRound < 0) numRound *= -1;
  return Math.round( (numRound - parseInt(numRound)) * 1000 ) / 1000;
}
*/

/*
var numberOne = +prompt("Первое число:", "") || 0;
var numberTwo = +prompt("Второе число:", "") || 0;

alert(numberOne + numberTwo);
*/

/*

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

*/

/*
function pow (x, n) {
  var result = 1;

  for (var i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

var x = prompt("x?", '');
var n = prompt("n?", '');

if (n < 0) {
  alert('Степень ' + n + 'не поддерживается, введите целую степень, большую 0');
} else {
  alert( pow(x, n) );
}
*/

// Как правило, лучше располагать функции под кодом, который их использует.
// Дело в том, что при чтении такого кода мы хотим знать в первую очередь, что
// он делает, а уже затем какие функции ему помогают.
// Лучше быстро обработать простые случаи, вернуть результат, а дальше разбираться со сложным,
// без дополнительного уровня вложенности.
// Вставляйте дополнительный перевод строки туда, где это сделает код более читаемым.
// Не должно быть более 9 строк кода подряд без вертикального отступа.


/* 
(function g() { return 1; });

alert(g);

 */

//Если функция задана как Function Expression, ей можно дать имя.
//Оно будет доступно только внутри функции (кроме IE8-).
//Это имя предназначено для надёжного рекурсивного вызова функции, даже если она записана в другую переменную.


/* 
var f = function sayHi(name) {
  console.log( sayHi ); // изнутри функции - видно (выведет код функции)
};

//console.log( sayHi ); // снаружи - не видно (ошибка: undefined variable 'sayHi')

f();

 */
/* 
var results = [0,1];

function fib(n) {
  if (n === 0) return results[0];

  if (n === 1) return results[1];

  if (!results[n]) {
    results[n] = fib(n - 2) + fib(n - 1);
  }

  return results[n];
}

function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  var fib_1 = 0, 
      fib_2 = 1,
      fib;

  for (var i = 0; i < n; i++) {
    fib = fib_1 + fib_2;

    fib_2 = fib_1;
    fib_1 = fib;
  }

  return fib;
}

console.log( fib(1) ); // 1
console.log( fib(2) ); // 1
console.log( fib(3) ); // 2
console.log( fib(4) ); // 3
console.log( fib(5) ); // 5
console.log( fib(6) ); // 8
console.log( fib(7) ); // 13
console.log( fib(77)); // 5527939700884757

 */

/* 
function factorial(n) {
  if ( n === 1 ) return n;
  return n * factorial( n - 1 );
}

console.log ( factorial(1) ); // = 1
console.log ( factorial(2) ); // = 2
console.log ( factorial(3) ); // = 6
console.log ( factorial(4) ); // = 24
console.log ( factorial(5) ); // = 120
 */

/* 
function sumTo(n) {
  for (var i = 1; 1 < n; n--) {
    i += n;
  }
  return i;
}
function sumTo(n) {
  if ( n > 1 ) {
    return n + sumTo(n-1)
  }
  return n;
}
function sumTo(n) {
  return ( 1 + n ) * n / 2;
}
console.log( sumTo(1) ); // = 1
console.log( sumTo(2) ); // = 3
console.log( sumTo(3) ); // = 6
console.log( sumTo(4) ); // = 10
console.log( sumTo(100) ); // = 5050
console.log( sumTo(100000) ); // = 5000050000

 */

// Рекурсия - когда функция вызывает сама себя.
// Базис рекурсии - значение, на котором рекурсия заканчивается.
// Глубина рекурсии - общее количество вложенных вызовов (10 000). Глубина рекурсии равна максимальному числу контекстов, одновременно хранимых в стеке.
// Контекст выполнения – это служебная информация, которая соответствует текущему запуску функции. Она включает в себя локальные переменные функции и конкретное место в коде, на котором находится интерпретатор.


/* 
// Функциональное выражение, которое не записывается в переменную, называют анонимной функцией.

// Function Declaration – функция, объявленная в основном потоке кода.
// Function Expression – объявление функции в контексте какого-либо выражения, например присваивания.

var sum = new Function('a,b', ' return a+b; ');

var result = sum(1, 2);
alert( result ); // 3

 */

/* 
function pow(a,n) {
  var pow = a;
  for (var i = 1; i < n; i++) {
    pow = pow * a;
  }
  return pow;
}

var a = +prompt("a","");
var n = +prompt("n","");

alert ( pow(a,n) )

 */

/* 
function min(a,b) {
  return (a > b) ? b : a;
}

 */

/* 
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?') ;
}
function checkAge(age) {
  return (age > 18) || confirm('Родители разрешили?') ;
}

 */
/* 
var a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}

switch (a) {
  case 0:
    alert( 0 );
    break;
  case 1:
    alert( 1 );
    break;
  case 2:
  case 3:
    alert( '2,3' );
    break;
}

 */

/* 
switch (browser) {
  case 'IE':
    alert( 'О, да у вас IE!' );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Да, и эти браузеры мы поддерживаем' );
    break;

  default:
    alert( 'Мы надеемся, что и в вашем браузере все ок!' );
}
if ( browser === "IE" ) {
  alert( 'О, да у вас IE!' );
} else if ( browser === "Chrome" || browser === "Firefox" || browser === "Safari" || browser === "Opera" ) {
  alert( 'Да, и эти браузеры мы поддерживаем' );
} else {
  alert( 'Мы надеемся, что и в вашем браузере все ок!' );
}

 */

/* 
outer: for (var i = 2; i <= 10; i++) {
  for (var j = 2; j < i; j++) {
    if ( !(i % j) ) continue outer;
  }
  alert (i);
}

 */

/* 
var i = 0;
while ( i < 100 ) {
  i = +prompt("Введите число", "");
  if (!i || i == "") break;
}

 */
/* 
var i = 0;
while ( i < 3 ) {
  alert( "номер " + i + "!" );
  i++;
}

 */

/* 
for(var i = 2; i <= 10; i++) {
  if (!(i % 2)) {
    alert(i);
  }
}

 */
/* 
"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5
 = "$45"
"4" - 2
 = 2
"4px" - 2
 = NaN
7 / 0
 = Infinity
" -9\n" + 5 = " -9\n5"
" -9\n" - 5 = -14
5 && 2
 = 2
2 && 5
 = 5
5 || 0
 = 5
0 || 5 = 5
null + 1 = 1 // (3)
undefined + 1 = NaN // (4)
null == "\n0\n" = false // (5)
+null == +"\n0\n" = true // (6)

 */
/* 
var age = 12;
if ( !(age >= 14 && age <= 90) ) {

}

 */

/* 
var message, login;

message = 
(login == 'Вася')     ? 'Привет' :
(login == 'Директор') ? 'Здравствуйте' :
(login == '')         ? 'Нет логина' : 
'';

 */

/* 
result = (a + b < 4) ? 'Мало' : 'Много';

 */
/* 
var userName = prompt("Кто пришел?", "");

if (userName === null || userName === "" ) {
  alert("Вход отменён");

} else if(userName === "Админ") {

  var password = prompt("Пароль?", "");

  if (password === null || password === "" ) {
    alert("Вход отменён");
  } else if(password === "Чёрный Властелин") {
    alert("Добро пожаловать!");
  } else {
    alert("Пароль неверен");
  }

} else {

  alert("Я вас не знаю");

}

 */

/* 
var comparision = +prompt("Введите число", 0);

if (comparision === 0) {
  alert(0);
} else if (comparision < 1){
  alert(-1);
} else if (comparision > 0){
  alert(1);
} 

 */

/* 
var javaScriptName = prompt("Каково «официальное» название JavaScript?","");
if ( javaScriptName === "ECMAScript" ) {
  alert("Верно!");
} else {
  alert("Не знаете? «ECMAScript»!");
}

 */

/* 

var userName = prompt("Ваше имя?", "");
alert(userName);

 */

/* 
function isInteger(num) {
  return (num ^ 0) === num;
}

alert( isInteger(1) ); // true
alert( isInteger(1.5) ); // false
alert( isInteger(-0.5) ); // false

 */

/*

var str = "Проверка";

if (~str.indexOf("верка")) { // Сочетание "if (~...indexOf)" читается как "если найдено"
  alert( 'найдено!' );
}

*/

// Округление 12.345 ^ 0

/*

var ACCESS_ADMIN = 1;          // 00001
var ACCESS_GOODS_EDIT = 2;   // 00010
var ACCESS_GOODS_VIEW = 4;     // 00100
var ACCESS_ARTICLE_EDIT = 8; // 01000
var ACCESS_ARTICLE_VIEW = 16;  // 10000

var guest = ACCESS_ARTICLE_VIEW | ACCESS_GOODS_VIEW; // 10100
var editor = guest | ACCESS_ARTICLE_EDIT | ACCESS_GOODS_EDIT; // 11110
var admin = editor | ACCESS_ADMIN; // 11111

alert(editor & ACCESS_ADMIN); // 0, доступа нет
alert(editor & ACCESS_ARTICLE_EDIT); // 8, доступ есть

var check = ACCESS_GOODS_VIEW | ACCESS_GOODS_EDIT; // 6, 00110

alert( admin & check ); // не 0, значит есть доступ к просмотру ИЛИ изменению

*/

/*

var access = parseInt("11000", 2);
alert(access);
var access2 = access.toString(2);
alert( access2 );

*/

/*

var ourPlanetName = "Земля";
var userName = "Петя";

*/

/*

var admin, name;
name = "Василий";
admin = name;
alert(admin);

*/

/*

alert("Я – JavaScript!");

function addScript(src){
    var script = document.createElement('script');
    script.src = src;
    script.async = false; // чтобы гарантировать порядок
    document.head.appendChild(script);
}

addScript('1.js'); // загружаться эти скрипты начнут сразу
addScript('2.js'); // выполнятся, как только загрузятся
addScript('3.js'); // но, гарантированно, в порядке 1 -> 2 -> 3

*/
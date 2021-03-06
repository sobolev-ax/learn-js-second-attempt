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
  
      container.innerText = '';
  
      container.appendChild(spanHours);
      container.appendChild(spanMinutes);
      container.appendChild(spanSecond);
      setTimeout(time, 1000);
    });
  })();
  
  console.log('\n---------------------------------------------Задача 10\n');
  (() => {
    const html = '<li>3</li><li>4</li><li>5</li>';
    const elem = document.querySelector('#container10');
  
    elem.insertAdjacentHTML('beforeEnd', html);
  })();
  
  console.log('\n---------------------------------------------Задача 11\n');
  (() => {
    const sort = document.querySelectorAll('[data-sort-table]');
    const sortLength = sort.length;
  
    if (sortLength === 0) { return; } // exit from function;
  
    const parent = sort[0].parentElement;
    const wrapper = {};
  
    for (let i = 0; i < sortLength; i++) {
      Object.defineProperty(wrapper, `coll[${i}]`, {
        enumerable: false,
        writable: true,
        value: [],
      });
      Object.defineProperty(parent, `coll[${i}]`, {
        enumerable: false,
        writable: true,
        value: {},
      });
      Object.defineProperty(parent[`coll[${i}]`], 'saved', {
        enumerable: false,
        writable: true,
        value: false,
      });
      Object.defineProperty(parent[`coll[${i}]`], 'sorted', {
        enumerable: false,
        writable: true,
        value: {
          string: false,
          number: false,
        },
      });
  
      sort[i].addEventListener('click', (e) => {
        const elem = e.target;
        const tbody = elem.parentElement.parentElement;
        const allRows = tbody.rows;
        const index = elem.cellIndex;
        const lengthAllRows = tbody.rows.length;
        const method = elem.getAttribute('data-sort-table'); // number, string
        const sorting = {
          number: (a, b) => {
            const num1 = +a.cells[index].innerText;
            const num2 = +b.cells[index].innerText;
            if (num1 > num2) return 1;
            return -1;
          },
          string: (a, b) => {
            const str1 = a.cells[index].innerText.toLowerCase();
            const str2 = b.cells[index].innerText.toLowerCase();
            return str1.localeCompare(str2);
          },
        };
  
        if (!parent[`coll[${i}]`].saved) {
          for (let j = 0; j < lengthAllRows - 1; j++) {
            wrapper[`coll[${i}]`][j] = tbody.rows[j + 1];
          }
          parent[`coll[${i}]`].saved = true;
        }
  
        if (!parent[`coll[${i}]`].sorted[sorting[method]]) {
          wrapper[`coll[${i}]`].sort(sorting[method]);
          parent[`coll[${i}]`].sorted[sorting[method]] = true;
        } else {
          wrapper[`coll[${i}]`].reverse();
        }
  
        let html = '';
  
        for (let j = 0; j < wrapper[`coll[${i}]`].length; j++) {
          tbody.removeChild(allRows[1]);
          html += wrapper[`coll[${i}]`][j].outerHTML;
        }
  
        parent.insertAdjacentHTML('afterEnd', html);
      });
    }
  })();
  
  console.log('\n---------------------------------------------Задача 12\n');
  (() => {
    const anchor = document.createElement('a');
  
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
  (() => {
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
      const notification = document.createElement('div');
      const s = notification.style;
  
      notification.innerText = options.html;
      notification.classList.add(options.className);
      if (options.className !== undefined) {
        notification.classList.add('notification');
      }
  
      if (options.cssText !== undefined) {
        s.cssText = options.cssText;
      }
      s.position = 'fixed';
      s.top = `${options.top}px`;
      s.left = `${options.left}px`;
  
      document.body.appendChild(notification);
  
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 1500);
    }
  
    showNotification({
      top: 10,
      left: 10,
      html: 'Привет!!!',
      className: 'welcome',
      cssText: 'box-shadow: 0px 0px 3px rgba(120,120,120,.5)',
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
  (() => {
    const elem = document.querySelector('#container14');
  
    elem.addEventListener('click', () => {
      const height = elem.scrollHeight - elem.clientHeight - elem.scrollTop;
      console.log(`scrollBottom: ${height}`);
    });
  
    const div = document.createElement('div');
  
    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';
  
    div.style.visibility = 'hidden';
  
    document.body.appendChild(div);
    const size = div.offsetWidth - div.clientWidth;
    document.body.removeChild(div);
  
    console.log(`scrollbar: ${size}`);
  })();
  
  console.log('\n---------------------------------------------Задача 15\n');
  (() => {
    const div = document.getElementById('moving-div');
    const elem = document.createElement('div');
    // IE || другой браузер
    const computedStyle = div.currentStyle || getComputedStyle(div, '');
  
    elem.style.height = `${div.offsetHeight}px`;
    elem.style.marginTop = computedStyle.marginTop;
    elem.style.marginBottom = computedStyle.marginBottom;
  
    div.parentElement.appendChild(elem);
  
    div.style.position = 'absolute';
    div.style.top = 0;
    div.style.right = 0;
  
    // width, height, border, margin, padding
  })();
  
  console.log('\n---------------------------------------------Задача 16\n');
  (() => {
    const field = document.querySelector('#field');
    const ball = document.querySelector('#ball');
  
    ball.style.top = `${(field.clientHeight / 2) - (ball.offsetHeight / 2)}px`;
    ball.style.left = `${(field.clientWidth / 2) - (ball.offsetWidth / 2)}px`;
  })();
  
  console.log('\n---------------------------------------------Задача 17\n');
  (() => {
    const elem = document.querySelector('#elem17');
    const box = document.querySelector('#container17');
    const width = box.clientWidth - (elem.offsetWidth - elem.clientWidth);
  
    elem.style.width = `${width}px`;
    elem.style.width = `${width - (elem.offsetWidth - box.clientWidth)}px`;
  })();
  
  console.log('\n---------------------------------------------Задача 18\n');
  (() => {
    // Полифилл для pageYOffset в IE8
    if (!window.pageYOffset) {
      Object.defineProperty(window, 'pageYOffset', {
        get: () => document.documentElement.scrollTop,
      });
    }
    document.querySelector('#container18').addEventListener('click', () => {
      alert(window.pageYOffset);
    });
  })();
  
  
  console.log('\n---------------------------------------------Задача 19\n');
  (() => {
    // выводит текущие координаты при клике
    document.getElementById('container19').onclick = (e) => {
      document.getElementById('coords19').innerHTML = `${e.clientX} : ${e.clientY}`;
    };
  
    const field = document.getElementById('field19');
    const coords = field.getBoundingClientRect();
  
    console.log('Refresh page to update coords!');
    console.log(`1. ${coords.left} : ${coords.top}`);
    console.log(`2. ${coords.left + field.clientLeft} : ${coords.top + field.clientTop}`);
    console.log(`3. ${coords.left + field.clientLeft + field.clientWidth} : ${coords.top + field.clientTop + field.clientHeight}`);
    console.log(`4. ${coords.right} : ${coords.bottom}`);
  })();
  
  console.log('\n---------------------------------------------Задача 20\n');
  (() => {
  /**
     * Позиционирует элемент elem относительно элемента anchor, как указано в
     * в position.
     *
     * @param {Node} anchor     Элемент-якорь, относительно которого задана позиция
     * @param {string} position Позиция: одно из top/right/bottom
     * @param {Node} elem       Элемент, который будет позиционирован
     */
    function positionAt(anchor, position, elem) {
      const e = elem.cloneNode(true);
      const coords = anchor.getBoundingClientRect();
      const height = elem.offsetHeight;
      const width = elem.offsetWidth;
      switch (position) {
        case 'top-out':
        case 'top':
          e.style.top = `${(window.pageYOffset + coords.top) - height}px`;
          e.style.left = `${coords.left}px`;
          break;
        case 'right-out':
        case 'right':
          e.style.top = `${coords.top + window.pageYOffset}px`;
          e.style.left = `${coords.right}px`;
          break;
        case 'bottom-out':
        case 'bottom':
          e.style.top = `${coords.bottom + window.pageYOffset}px`;
          e.style.left = `${coords.left}px`;
          break;
        case 'left-out':
        case 'left':
          e.style.top = `${coords.top + window.pageYOffset}px`;
          e.style.left = `${coords.left - width}px`;
          break;
        case 'top-in':
          e.style.top = `${coords.top + window.pageYOffset}px`;
          e.style.left = `${coords.left}px`;
          break;
        case 'right-in':
          e.style.top = `${coords.top + window.pageYOffset}px`;
          e.style.left = `${coords.right - width}px`;
          break;
        case 'bottom-in':
          e.style.top = `${(coords.bottom + window.pageYOffset) - height}px`;
          e.style.left = `${coords.left}px`;
          break;
        case 'left-in':
          e.style.top = `${(coords.bottom + window.pageYOffset) - height}px`;
          e.style.left = `${coords.left}px`;
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
      const note = document.createElement('div');
  
      note.classList.add('note20');
      note.innerText = html;
      anchor.parentElement.appendChild(note);
  
      return positionAt(anchor, position, note);
    }
  
    // проверка работоспособности
    const blockquote = document.querySelector('#blockquote20');
  
    blockquote.addEventListener('click', () => {
      const note1 = showNote(blockquote, 'top', 'заметка сверху');
      const note2 = showNote(blockquote, 'right', 'заметка справа');
      const note3 = showNote(blockquote, 'bottom', 'заметка снизу');
      const note4 = showNote(blockquote, 'left', 'заметка слева');
      const note5 = showNote(blockquote, 'top-in', 'заметка top-in');
      const note6 = showNote(blockquote, 'right-in', 'заметка right-in');
      const note7 = showNote(blockquote, 'left-in', 'заметка left-in');
      const parent = note1.parentElement;
      setTimeout(() => {
        parent.removeChild(note1);
        parent.removeChild(note2);
        parent.removeChild(note3);
        parent.removeChild(note4);
        parent.removeChild(note5);
        parent.removeChild(note6);
        parent.removeChild(note7);
      }, 2000);
    });
  })();
  
  console.log('\n---------------------------------------------Задача 21\n');
  (() => {
    function getDocumentScroll() {
      const h = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight,
      );
      return {
        top: window.pageYOffset,
        bottom: window.pageYOffset + document.documentElement.clientHeight,
        height: h,
      };
    }
  
    document.getElementById('container21').addEventListener('click', () => {
      const result = getDocumentScroll();
  
      console.log(`координата верхней границы видимой части: ${result.top}`);
      console.log(`координата нижней границы видимой части: ${result.bottom}`);
      console.log(`полная высота документа, включая прокрутку: ${result.height}`);
    });
  
    const result = getDocumentScroll();
  
    console.log(`координата верхней границы видимой части: ${result.top}`);
    console.log(`координата нижней границы видимой части: ${result.bottom}`);
    console.log(`полная высота документа, включая прокрутку: ${result.height}`);
  })();
  
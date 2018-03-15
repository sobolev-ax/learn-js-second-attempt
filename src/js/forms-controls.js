console.log('\n---------------------------------------------Задача 1\n');
(() => {
  const form = document.forms.form1;
  const el = form.elements[0];


  console.log(`value: ${el[el.selectedIndex].value}, text: ${el[el.selectedIndex].text}`);


  const option = new Option('Классика', 'Classic');

  form.elements[0].insertBefore(option, el[0]);

  setTimeout(() => {
    option.selected = true;
  }, 2000);
})();
console.log('\n---------------------------------------------Задача 2\n');
(() => {
  // Показать placeholder внутри input
  // Также можно сделать это при помощи вёрстки, отдельным элементом
  function showPlaceholder(input) {
    const node = input;
    node.classList.add('placeholder2');
    node.value = input.dataset.placeholder;
  }
  function hidePlaceholder(input) {
    const node = input;
    node.classList.remove('placeholder2');
    node.value = '';
  }
  function showTooltip(input) {
    const span = document.createElement('span');

    span.classList.add('placeholder-tooltip2');
    span.innerText = input.getAttribute('data-placeholder');

    document.body.appendChild(span);

    const coords = input.getBoundingClientRect();

    span.style.top = `${coords.top - span.offsetHeight}px`;
    span.style.left = `${coords.left}px`;
  }
  function hideTooltip() {
    const tooltips = document.body.querySelectorAll('.placeholder-tooltip2');
    for (let i = 0; i < tooltips.length; i++) {
      document.body.removeChild(tooltips[i]);
    }
  }

  const input = document.querySelector('#container2 [data-placeholder]');

  showPlaceholder(input);

  input.addEventListener('focus', (e) => {
    showTooltip(e.target);
    if (e.target.classList.contains('placeholder2')) {
      hidePlaceholder(e.target);
    }
  });

  input.addEventListener('blur', (e) => {
    hideTooltip();
    if (e.target.value === '') {
      showPlaceholder(e.target);
    }
  });
})();
console.log('\n---------------------------------------------Задача 3\n');
(() => {
  function move(node, direction) {
    const coords = node.getBoundingClientRect();
    const height = node.offsetHeight;
    const width = node.offsetWidth;
    const n = node;

    n.style.position = 'fixed';

    n.style.top = `${coords.top}px`;
    n.style.left = `${coords.left}px`;
    switch (direction) {
      case 38: // up
        n.style.top = `${coords.top - height}px`;
        break;
      case 39: // right
        n.style.left = `${coords.left + width}px`;
        break;
      case 40: // down
        n.style.top = `${coords.top + height}px`;
        break;
      case 37: // left
        n.style.left = `${coords.left - width}px`;
        break;
      default:
        break;
    }
  }
  const mouse = document.querySelector('#mouse3');
  const area = document.querySelector('#container3');
  let func;

  mouse.setAttribute('tabindex', 0);

  area.addEventListener('click', (e) => {
    if (e.target === mouse && !mouse.on) {
      const node = e.target;
      mouse.on = true;
      mouse.addEventListener('keydown', func = (ev) => {
        move(node, ev.keyCode);
      });
    } else if (mouse.on) {
      mouse.on = false;
      mouse.removeEventListener('keydown', func);
    }
  });
})();
console.log('\n---------------------------------------------Задача 4\n');
(() => {
  const div = document.querySelector('#view4');
  const textarea = document.querySelector('#area4');
  const container = document.querySelector('#container4');
  container.setAttribute('tabindex', '0');

  function combine(...keys) {
    const myKeys = {};

    for (let i = 0; i < keys.length; i++) {
      myKeys[keys[i]] = false;
    }
    function isCombine(type) {
      if (type === 'keyup') return false;
      for (let i = 0; i < keys.length; i++) {
        if (!myKeys[keys[i]]) return false;
      }
      return true;
    }


    return function getSet(e) {
      const { keyCode } = e;
      const { type } = e;

      if (!Object.hasOwnProperty.call(myKeys, keyCode)) return false;
      switch (type) {
        case 'keydown':
        case 'keypress':
          myKeys[keyCode] = true;
          break;
        case 'keyup':
          myKeys[keyCode] = false;
          break;
        default:
          break;
      }
      return isCombine(type);
    };
  }

  // 17 - ctrl
  // 83 - S
  // 69 - E
  // 27 - esc

  const combineCtrlE = combine(17, 69);
  const combineCtrlS = combine(17, 83);
  const combineEsc = combine(27);

  function toEdit(e) {
    if (combineCtrlE(e)) {
      e.preventDefault();
      container.removeEventListener('keydown', toEdit);
      container.removeEventListener('keyup', toEdit);

      textarea.value = div.innerText;

      div.style.display = 'none';
      textarea.style.display = 'block';
      textarea.focus();
    }
  }

  function onEdit(e) {
    if (combineCtrlS(e)) {
      e.preventDefault();
      div.innerText = textarea.value;
    }
    if (combineEsc(e)) {
      e.preventDefault();
    }

    if (combineCtrlS(e) || combineEsc(e)) {
      div.style.display = 'block';
      textarea.blur();
      textarea.style.display = 'none';

      document.body.removeEventListener('keydown', onEdit);
      document.body.removeEventListener('keyup', onEdit);
      document.body.addEventListener('keydown', toEdit);
      document.body.addEventListener('keyup', toEdit);
    }
  }

  textarea.addEventListener('focus', () => {
    document.body.addEventListener('keydown', onEdit);
    document.body.addEventListener('keyup', onEdit);
  });

  container.addEventListener('keydown', toEdit);
  container.addEventListener('keyup', toEdit);
})();
console.log('\n---------------------------------------------Задача 5\n');
(() => {
  const table = document.querySelector('#bagua-table5');
  const listeners = {};
  let btnOK = null;
  let btnCANCEL = null;
  let area = null;

  function toEdit(e) {
    let node = e.target;
    while (node !== e.currentTarget) {
      if (node.tagName === 'TD') break;
      else node = node.parentElement;
    }
    if (node === e.currentTarget) return;

    area = document.createElement('textarea');

    area.style.position = 'absolute';
    area.style.top = '0px';
    area.style.right = '0px';
    area.style.bottom = '0px';
    area.style.left = '0px';
    area.style.width = `${node.clientWidth}px`;
    area.style.height = `${node.clientHeight}px`;
    area.style.resize = 'none';
    area.style.padding = '0px';
    area.style.margin = '0px';
    area.style.border = 'none';
    area.style.outline = '1px solid red';

    node.style.position = 'relative';

    area.value = node.innerHTML;
    node.appendChild(area);


    btnOK = document.createElement('button');
    btnCANCEL = document.createElement('button');
    btnOK.style.position = 'absolute';
    btnCANCEL.style.position = 'absolute';

    btnOK.innerText = 'OK';
    btnCANCEL.innerText = 'CANCEL';

    node.appendChild(btnOK);
    node.appendChild(btnCANCEL);

    btnOK.style.bottom = `-${btnOK.offsetHeight}px`;
    btnCANCEL.style.bottom = `-${btnCANCEL.offsetHeight}px`;
    btnOK.style.left = `${0}px`;
    btnCANCEL.style.left = `${btnOK.offsetWidth + 2}px`;

    listeners.removeToEdit();
    listeners.addInEdit(node);
  }

  function inEdit(e) {
    if (e.target === btnOK || e.target === btnCANCEL) {
      const text = area.value;

      e.currentTarget.removeChild(area);
      e.currentTarget.style.position = '';

      btnCANCEL.parentElement.removeChild(btnCANCEL);
      btnOK.parentElement.removeChild(btnOK);

      listeners.removeInEdit(e.currentTarget);
      setTimeout(() => {
        listeners.addToEdit();
      }, 500);

      if (e.target === btnOK) {
        e.currentTarget.innerHTML = text;
      }
    }
  }

  listeners.addInEdit = (node) => {
    node.addEventListener('click', inEdit);
  };
  listeners.removeInEdit = (node) => {
    node.removeEventListener('click', inEdit);
  };
  listeners.addToEdit = () => {
    table.addEventListener('click', toEdit);
  };
  listeners.removeToEdit = () => {
    table.removeEventListener('click', toEdit);
  };

  listeners.addToEdit();
})();
console.log('\n---------------------------------------------Задача 6\n');
(() => {
  const holder = document.querySelector('#placeholder6');
  const input = document.querySelector('#input6');

  holder.addEventListener('click', (e) => {
    input.focus();
    e.currentTarget.parentElement.removeChild(e.currentTarget);
  });
})();
console.log('\n---------------------------------------------Задача 7\n');
(() => {
  const caps = document.querySelector('#capsIndicator7');

  document.addEventListener('keydown', (event) => {
    const flag = event.getModifierState && event.getModifierState('CapsLock');
    // console.log(flag); // true when you press the keyboard CapsLock key

    if (flag) {
      caps.style.display = 'block';
    } else {
      caps.style.display = 'none';
    }
  });
})();
console.log('\n---------------------------------------------Задача 8\n');
(() => {
  const form = document.forms.calculator;
  const sum = form.elements.money;
  const period = form.months;
  const { capitalization } = form;
  const before = document.querySelector('#money-before');
  const after = document.querySelector('#money-after');
  const beforeGraph = document.querySelector('#height-before');
  const afterGraph = document.querySelector('#height-after');

  function draw() {
    const oldMoney = +before.innerText;
    const curMoney = +after.innerText;
    const part = oldMoney / beforeGraph.offsetHeight;

    afterGraph.style.height = `${curMoney / part}px`;
  }

  function update() {
    const money = +sum.value;
    const months = +period.value;
    const capital = capitalization.checked;
    let profit = 0;

    if (!capital) {
      profit = money + (months * money * 0.01);
    } else {
      profit = money;
      for (let i = 0; i < months; i++) {
        profit *= 1 + 0.01;
      }
    }

    profit = Math.round(profit);

    before.innerText = money;
    after.innerText = profit;

    draw();
  }

  function setSum(e) {
    const num = +e.data;
    if (e.data !== null && Number.isNaN(num)) {
      const str = this.value;
      const i = str.indexOf(e.data);

      this.value = str.slice(0, i) + str.slice(i + 1);
    }

    update();
  }

  function setPeriod() {
    update();
  }

  function setCapitalization() {
    update();
  }

  sum.addEventListener('input', setSum);
  period.addEventListener('input', setPeriod);
  capitalization.addEventListener('change', setCapitalization);

  update();
})();
console.log('\n---------------------------------------------Задача 9\n');
(() => {
  function showPrompt(text, callback) {
    const overflow = document.createElement('div');
    const container = document.createElement('div');
    const form = document.createElement('form');
    const message = document.createElement('div');
    const iText = document.createElement('input');
    const iOk = document.createElement('input');
    const iCancel = document.createElement('input');

    overflow.classList.add('overflow');
    container.classList.add('prompt-form-container');
    form.classList.add('prompt-form');
    message.classList.add('prompt-message');

    iText.setAttribute('name', 'text');
    iText.setAttribute('type', 'text');
    iText.setAttribute('tabindex', '1');
    iOk.setAttribute('type', 'submit');
    iOk.setAttribute('value', 'Ок');
    iOk.setAttribute('tabindex', '2');
    iCancel.setAttribute('type', 'button');
    iCancel.setAttribute('name', 'cancel');
    iCancel.setAttribute('value', 'Отмена');
    iCancel.setAttribute('tabindex', '3');

    overflow.appendChild(container);
    container.appendChild(form);
    form.appendChild(message);
    form.appendChild(iText);
    form.appendChild(iOk);
    form.appendChild(iCancel);

    message.innerHTML = text;

    iCancel.onkeydown = (e) => {
      if (e.keyCode === 9 && !e.shiftKey) {
        iText.focus();
        e.preventDefault();
      }
    };

    iText.onkeydown = (e) => {
      if (e.keyCode === 9 && e.shiftKey) {
        iCancel.focus();
        e.preventDefault();
      }
    };

    const promise = new Promise((resolve) => {
      form.onsubmit = () => {
        resolve(iText.value);
        return false;
      };
      iCancel.onclick = () => {
        resolve(iText.value);
      };
    });

    promise.then((value) => {
      callback(value);
      document.body.removeChild(overflow);
    });

    document.body.appendChild(overflow);
    iText.focus();
  }

  const elem = document.querySelector('#show-button9');

  elem.addEventListener('click', () => {
    showPrompt(
      'Введите что-нибудь<br>... умное :)',
      (value) => {
        alert(value);
      },
    );
  });
})();
console.log('\n---------------------------------------------Задача 10\n');
(() => {
  function red(elem) {
    const node = elem;
    node.style.outline = '1px solid red';
  }
  function purple(elem) {
    const node = elem;
    node.style.outline = '1px solid purple';
  }
  function clear(elem) {
    const node = elem;
    node.style.outline = '';
  }
  function validate(form) {
    const el = form.elements;
    const pswd = [];

    for (let i = 0; i < el.length; i++) {
      clear(el[i]);

      if (el[i].getAttribute('type') === 'password') pswd.push(el[i]);
      if (el[i].value === '') red(el[i]);
    }

    if (pswd.length >= 2 && pswd[0].value !== '') {
      if (pswd[0].value !== pswd[1].value) {
        for (let i = 0; i < pswd.length; i++) {
          purple(pswd[i]);
        }
      }
    }
  }

  window.validate = validate;
})();

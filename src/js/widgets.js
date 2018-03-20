function getCoords(elem) {
  const box = elem.getBoundingClientRect();

  const { body } = document;
  const docEl = document.documentElement;

  const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
  const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

  const clientTop = docEl.clientTop || body.clientTop || 0;
  const clientLeft = docEl.clientLeft || body.clientLeft || 0;

  const top = (box.top + scrollTop) - clientTop;
  const left = (box.left + scrollLeft) - clientLeft;

  return {
    top,
    left,
  };
}
console.log('\n---------------------------------------------Задача 1\n');
(() => {
  function Clock(options) {
    const { elem } = options;

    const h = elem.querySelector('.hour1');
    const m = elem.querySelector('.min1');
    const s = elem.querySelector('.sec1');

    let timer;

    function updateTime() {
      const date = new Date();
      const dH = date.getHours();
      const dM = date.getMinutes();
      const dS = date.getSeconds();

      h.innerText = dH;
      m.innerText = dM;
      s.innerText = dS;
    }

    function isStart() {
      if (timer === undefined) {
        return false;
      }

      return true;
    }

    function start() {
      if (!isStart()) {
        timer = setTimeout(function self() {
          updateTime();

          timer = setTimeout(self, 1000);
        }, 0);
      }
    }

    function stop() {
      if (isStart()) {
        clearTimeout(timer);
        timer = undefined;
      }
    }

    this.start = start;
    this.stop = stop;
  }

  const pageClock = new Clock({
    elem: document.getElementById('clock1'),
  });

  window.pageClock = pageClock;
})();
console.log('\n---------------------------------------------Задача 2\n');
(() => {
  function Slider(options) {
    const slider = options.elem;
    const thumb = slider.querySelector('.thumb2');
    const coordsOfSlider = getCoords(slider);

    function getRange() {
      const min = coordsOfSlider.left;
      const max = coordsOfSlider.left + slider.offsetWidth;
      return {
        min,
        max,
      };
    }
    function getShift(e) {
      const coords = getCoords(thumb);

      return e.pageX - coords.left;
    }

    const range = getRange();

    function draw(x) {
      thumb.style.transform = `translateX(${x - coordsOfSlider.left}px)`;
    }

    function moveAt(x) {
      let ix = x;
      if (ix < range.min) {
        ix = range.min;
      } else if (ix > range.max - thumb.offsetWidth) {
        ix = range.max - thumb.offsetWidth;
      }

      draw(ix);
    }

    let shiftX;
    function mousemove(e) {
      moveAt(e.pageX - shiftX);
      return false;
    }

    thumb.addEventListener('mousedown', (e) => {
      shiftX = getShift(e);

      moveAt(e.pageX - shiftX);

      document.addEventListener('mousemove', mousemove);

      document.addEventListener('mouseup', function mouseup() {
        document.removeEventListener('mousemove', mousemove);
        document.removeEventListener('mouseup', mouseup);
      });
    });
  }

  const mySlider = new Slider({
    elem: document.querySelector('#slider2'),
  });

  window.mySlider = mySlider;
})();
console.log('\n---------------------------------------------Задача 3\n');
(() => {
  function ListSelect(options) {
    const { elem } = options;
    const elements = elem.querySelectorAll('li');
    const count = elements.length;

    const active = 'selected3';
    let clicked;

    function ctrl(li) {
      li.classList.toggle(active);
    }
    function other(li) {
      for (let i = 0; i < count; i++) {
        elements[i].classList.remove(active);
      }

      li.classList.add(active);
    }
    function shift(li) {
      let current = 0;
      let last = 0;

      for (let i = 0; i < count; i++) {
        if (elements[i] === li) current = i;
        if (elements[i] === clicked) last = i;
      }

      const min = current < last ? current : last;
      const max = current >= last ? current : last;

      for (let i = min; i <= max; i++) {
        elements[i].classList.add(active);
      }
    }
    function getSelected() {
      const selected = [];

      for (let i = 0; i < count; i++) {
        if (elements[i].classList.contains(active)) selected.push(elements[i]);
      }
      console.dir(selected);
      return selected;
    }

    elem.addEventListener('click', (e) => {
      if (e.target.tagName !== 'LI') return;

      const li = e.target;

      if (e.ctrlKey || e.metaKey) {
        ctrl(li);
      } else if (e.shiftKey) {
        shift(li);
      } else {
        other(li);
      }
      clicked = li;
    });

    this.getSelected = getSelected;
  }

  const listSelect1 = new ListSelect({
    elem: document.querySelector('#ul3-1'),
  });
  const listSelect2 = new ListSelect({
    elem: document.querySelector('#ul3-2'),
  });

  const btn1 = document.querySelector('#btn3-1');
  btn1.addEventListener('click', listSelect1.getSelected);
  const btn2 = document.querySelector('#btn3-2');
  btn2.addEventListener('click', listSelect2.getSelected);

  window.listSelect1 = listSelect1;
  window.listSelect2 = listSelect2;
})();
console.log('\n---------------------------------------------Задача 4\n');
(() => {
  function Voter(options) {
    const { elem } = options;
    const increase = elem.querySelector('.up4');
    const decrease = elem.querySelector('.down4');
    const result = elem.querySelector('.vote4');

    increase.setAttribute('tabindex', 0);
    decrease.setAttribute('tabindex', 0);

    function getResult() {
      return +result.innerText;
    }
    function setResult(value) {
      result.innerText = value;
    }

    function toIncrease() {
      const newValue = getResult() + 1;
      setResult(newValue);
    }
    function toDecrease() {
      const newValue = getResult() - 1;
      setResult(newValue);
    }

    elem.onselectstart = () => false;
    elem.onmousedown = () => false;

    increase.addEventListener('click', toIncrease);
    decrease.addEventListener('click', toDecrease);

    this.setVote = setResult;
  }

  const voter1 = new Voter({
    elem: document.getElementById('voter4-1'),
  });
  const voter2 = new Voter({
    elem: document.getElementById('voter4-2'),
  });

  voter1.setVote(1);
  voter2.setVote(6);
})();
console.log('\n---------------------------------------------Задача 5\n');
(() => {
  function Voter(options) {
    this.elem = options.elem;

    this.increase = this.elem.querySelector('.up5');
    this.decrease = this.elem.querySelector('.down5');
    this.voteElem = this.elem.querySelector('.vote5');

    this.increase.setAttribute('tabindex', 0);
    this.decrease.setAttribute('tabindex', 0);

    this.elem.onselectstart = () => false;
    this.elem.onmousedown = () => false;

    this.increase.addEventListener('click', Voter.prototype.increase.bind(this));
    this.decrease.addEventListener('click', Voter.prototype.decrease.bind(this));
  }

  Voter.prototype.setVote = function set(vote) {
    this.voteElem.innerHTML = +vote;
  };

  Voter.prototype.increase = function up() {
    this.voteElem.innerHTML = +this.voteElem.innerHTML + 1;
  };
  Voter.prototype.decrease = function down() {
    this.voteElem.innerHTML = +this.voteElem.innerHTML - 1;
  };

  const voter1 = new Voter({
    elem: document.getElementById('voter5-1'),
  });
  const voter2 = new Voter({
    elem: document.getElementById('voter5-2'),
  });

  voter1.setVote(10);
  voter2.setVote(30);
})();
console.log('\n---------------------------------------------Задача 6\n');
(() => {
  function Voter(options) {
    this.elem = options.elem;

    this.increase = this.elem.querySelector('.up6');
    this.decrease = this.elem.querySelector('.down6');
    this.voteElem = this.elem.querySelector('.vote6');

    this.increase.setAttribute('tabindex', 0);
    this.decrease.setAttribute('tabindex', 0);

    this.elem.onselectstart = () => false;
    this.elem.onmousedown = () => false;

    this.increase.addEventListener('click', Voter.prototype.increase.bind(this));
    this.decrease.addEventListener('click', Voter.prototype.decrease.bind(this));
  }

  Voter.prototype.setVote = function set(vote) {
    this.voteElem.innerHTML = +vote;
  };

  Voter.prototype.increase = function up() {
    this.voteElem.innerHTML = +this.voteElem.innerHTML + 1;
  };
  Voter.prototype.decrease = function down() {
    this.voteElem.innerHTML = +this.voteElem.innerHTML - 1;
  };

  function StepVoter(options) {
    Voter.call(this, options);
    this.step = options.step || 1;
  }

  Voter.prototype.increase = function up() {
    this.voteElem.innerHTML = +this.voteElem.innerText + this.step;
  };
  Voter.prototype.decrease = function down() {
    this.voteElem.innerHTML = +this.voteElem.innerText - this.step;
  };

  StepVoter.prototype = Object.create(Voter.prototype);
  StepVoter.prototype.constructor = StepVoter;

  const voter1 = new StepVoter({
    elem: document.getElementById('voter6-1'),
    step: 1,
  });
  const voter2 = new StepVoter({
    elem: document.getElementById('voter6-2'),
    step: 100,
  });

  voter1.setVote(1);
  voter2.setVote(100);
})();
console.log('\n---------------------------------------------Задача 7\n');
(() => {
  const users = [{
    name: 'Вася',
    age: 10,
  }, {
    name: 'Петя',
    age: 15,
  }, {
    name: 'Женя',
    age: 20,
  }, {
    name: 'Маша',
    age: 25,
  }, {
    name: 'Даша',
    age: 30,
  },
  ];

  const tmpl = _.template(document.querySelector('#grid-template8').innerHTML);

  document.querySelector('#grid-holder8').innerHTML = tmpl({
    users,
  });
})();
console.log('\n---------------------------------------------Задача 8\n');
console.log('\n---------------------------------------------Задача 9\n');
(() => {
  function Menu(options) {
    let elem;

    function renderItems() {
      if (elem.querySelector('ul')) return;

      const listHtml = options.listTemplate({
        items: options.items,
      });
      elem.insertAdjacentHTML('beforeEnd', listHtml);
    }

    function open() {
      renderItems();
      elem.classList.add('open');
    }

    function close() {
      elem.classList.remove('open');
    }

    function toggle() {
      if (elem.classList.contains('open')) close();
      else open();
    }

    function select(link) {
      const widgetEvent = new CustomEvent('select', {
        bubbles: true,
        // detail - стандартное свойство CustomEvent для произвольных данных
        detail: link.getAttribute('href').slice(1),
      });
      elem.dispatchEvent(widgetEvent);
    }

    function render() {
      const html = options.template({
        title: options.title,
      });

      elem = document.createElement('div');
      elem.innerHTML = html;
      elem = elem.firstElementChild;

      elem.onmousedown = () => false;

      elem.onclick = (event) => {
        if (event.target.closest('.title')) {
          toggle();
        } else if (event.target.closest('a')) {
          event.preventDefault();
          select(event.target);
        }
      };
    }

    function getElem() {
      if (!elem) render();
      return elem;
    }

    this.getElem = getElem;
    this.toggle = toggle;
    this.close = close;
    this.open = open;
  }

  const menu = new Menu({
    title: 'Сладости',
    template: _.template(document.getElementById('menu-template9').innerHTML.trim()),
    listTemplate: _.template(document.getElementById('menu-list-template9').innerHTML.trim()),
    items: [
      {
        title: 'Торт',
        href: 'cake',
      },
      {
        title: 'Пончик',
        href: 'Пончик',
      },
      {
        title: 'Шоколадка',
        href: 'Шоколадка',
      },
    ],
  });

  const elem = menu.getElem();

  elem.addEventListener('select', (event) => {
    alert(event.detail);
  });

  document.querySelector('#container9').appendChild(elem);
})();
console.log('\n---------------------------------------------Задача 10\n');
(() => {
  function Voter(options) {
    this.elem = options.elem;

    this.increase = this.elem.querySelector('.up10');
    this.decrease = this.elem.querySelector('.down10');
    this.voteElem = this.elem.querySelector('.vote10');

    this.increase.setAttribute('tabindex', 0);
    this.decrease.setAttribute('tabindex', 0);

    this.elem.onselectstart = () => false;
    this.elem.onmousedown = () => false;

    this.increase.addEventListener('click', Voter.prototype.increase.bind(this));
    this.decrease.addEventListener('click', Voter.prototype.decrease.bind(this));
  }

  Voter.prototype.setVote = function set(vote) {
    this.voteElem.innerHTML = +vote;
  };

  Voter.prototype.increase = function up() {
    this.voteElem.innerHTML = +this.voteElem.innerHTML + 1;
  };
  Voter.prototype.decrease = function down() {
    this.voteElem.innerHTML = +this.voteElem.innerHTML - 1;
  };

  Voter.prototype.change = function change() {
    const widgetEvent = new CustomEvent('change', {
      bubbles: true,
      detail: this.voteElem.innerHTML,
    });
    this.elem.dispatchEvent(widgetEvent);
  };

  function StepVoter(options) {
    Voter.call(this, options);
    this.step = options.step || 1;
  }

  Voter.prototype.increase = function up() {
    this.voteElem.innerHTML = +this.voteElem.innerText + this.step;

    Voter.prototype.change.call(this);
  };
  Voter.prototype.decrease = function down() {
    this.voteElem.innerHTML = +this.voteElem.innerText - this.step;

    Voter.prototype.change.call(this);
  };

  StepVoter.prototype = Object.create(Voter.prototype);
  StepVoter.prototype.constructor = StepVoter;

  const voter1 = new StepVoter({
    elem: document.getElementById('voter10-1'),
    step: 1,
  });
  const voter2 = new StepVoter({
    elem: document.getElementById('voter10-2'),
    step: 100,
  });

  voter1.elem.addEventListener('change', (e) => {
    console.log(`voter1: ${e.detail}`);
  });
  voter2.elem.addEventListener('change', (e) => {
    console.log(`voter2: ${e.detail}`);
  });

  voter1.setVote(1);
  voter2.setVote(100);
})();
console.log('\n---------------------------------------------Задача 11\n');
(() => {
  function ListSelect(options) {
    const { elem } = options;
    const elements = elem.querySelectorAll('li');
    const count = elements.length;

    const active = 'selected11';
    let clicked;

    function ctrl(li) {
      li.classList.toggle(active);
    }
    function other(li) {
      for (let i = 0; i < count; i++) {
        elements[i].classList.remove(active);
      }

      li.classList.add(active);
    }
    function shift(li) {
      let current = 0;
      let last = 0;

      for (let i = 0; i < count; i++) {
        if (elements[i] === li) current = i;
        if (elements[i] === clicked) last = i;
      }

      const min = current < last ? current : last;
      const max = current >= last ? current : last;

      for (let i = min; i <= max; i++) {
        elements[i].classList.add(active);
      }
    }
    function getSelected() {
      const selected = [];

      for (let i = 0; i < count; i++) {
        if (elements[i].classList.contains(active)) selected.push(elements[i]);
      }

      return selected;
    }

    elem.addEventListener('click', (e) => {
      if (e.target.tagName !== 'LI') return;

      const li = e.target;

      if (e.ctrlKey || e.metaKey) {
        ctrl(li);
      } else if (e.shiftKey) {
        shift(li);
      } else {
        other(li);
      }
      clicked = li;

      const widgetEvent = new CustomEvent('select', {
        bubbles: true,
        detail: getSelected(),
      });
      elem.dispatchEvent(widgetEvent);
    });

    this.elem = elem;
    this.getSelected = getSelected;
  }

  const listSelect1 = new ListSelect({
    elem: document.querySelector('#ul11-1'),
  });
  const listSelect2 = new ListSelect({
    elem: document.querySelector('#ul11-2'),
  });

  listSelect1.elem.addEventListener('select', (e) => {
    console.log(e.detail);
  });
  listSelect2.elem.addEventListener('select', (e) => {
    console.log(e.detail);
  });

  const btn1 = document.querySelector('#btn11-1');
  btn1.addEventListener('click', () => {
    console.log(listSelect1.getSelected());
  });
  const btn2 = document.querySelector('#btn11-2');
  btn2.addEventListener('click', () => {
    console.log(listSelect2.getSelected());
  });

  window.listSelect1 = listSelect1;
  window.listSelect2 = listSelect2;
})();
console.log('\n---------------------------------------------Задача 12\n');
(() => {
  function CustomSelect(options) {
    const { elem } = options;

    function toogle() {
      elem.classList.toggle('open');

      setTimeout(() => {
        if (elem.classList.contains('open')) {
          document.body.addEventListener('mousedown', toogle);
        } else {
          document.body.removeEventListener('mousedown', toogle);
        }
      });
    }

    function select(li) {
      const value = li.getAttribute('data-value');

      const widgetEvent = new CustomEvent('select', {
        bubbles: true,
        detail: {
          value,
        },
      });
      elem.dispatchEvent(widgetEvent);
    }

    elem.addEventListener('mousedown', (e) => {
      if (e.target.closest('button')) {
        toogle();
      }
      if (e.target.closest('li')) {
        select(e.target);
      }
    });
  }
  const animalSelect = new CustomSelect({
    elem: document.getElementById('animal-select'),
  });

  const foodSelect = new CustomSelect({
    elem: document.getElementById('food-select'),
  });

  document.addEventListener('select', (event) => {
    document.getElementById('result').innerHTML = event.detail.value;
  });

  window.animalSelect = animalSelect;
  window.foodSelect = foodSelect;
})();
console.log('\n---------------------------------------------Задача 13\n');
(() => {
  function Slider(options) {
    const slider = options.elem;
    const maxSlider = options.max || 100;
    const thumb = slider.querySelector('.thumb13');
    const coordsOfSlider = getCoords(slider);
    let value = 0;
    let currentX = 0;

    function getRange() {
      const min = coordsOfSlider.left;
      const max = coordsOfSlider.left + slider.offsetWidth;
      return {
        min,
        max,
      };
    }
    function getShift(e) {
      const coords = getCoords(thumb);

      return e.pageX - coords.left;
    }

    const range = getRange();
    const part = (range.max - thumb.offsetWidth - coordsOfSlider.left) / maxSlider;

    function draw(x) {
      currentX = x - coordsOfSlider.left;
      thumb.style.transform = `translateX(${currentX}px)`;
    }

    function drawTo(val) {
      const x = part * val;
      thumb.style.transform = `translateX(${x}px)`;
    }

    function updateValue() {
      value = Math.round(currentX / part);
    }

    function moveAt(x) {
      let ix = x;
      if (ix < range.min) {
        ix = range.min;
      } else if (ix > range.max - thumb.offsetWidth) {
        ix = range.max - thumb.offsetWidth;
      }

      draw(ix);
      updateValue();
    }

    let shiftX;
    function mousemove(e) {
      moveAt(e.pageX - shiftX);

      const widgetEvent = new CustomEvent('slide', {
        bubbles: true,
        detail: value,
      });
      slider.dispatchEvent(widgetEvent);

      return false;
    }

    thumb.addEventListener('mousedown', (e) => {
      shiftX = getShift(e);

      moveAt(e.pageX - shiftX);

      document.addEventListener('mousemove', mousemove);

      document.addEventListener('mouseup', function mouseup() {
        document.removeEventListener('mousemove', mousemove);
        document.removeEventListener('mouseup', mouseup);

        const widgetEvent = new CustomEvent('change', {
          bubbles: true,
          detail: value,
        });
        slider.dispatchEvent(widgetEvent);
      });
    });

    slider.setValue = (num) => {
      drawTo(num);
    };

    return slider;
  }

  const mySlider13 = new Slider({
    elem: document.querySelector('#slider13'),
    max: 100,
  });

  mySlider13.addEventListener('slide', (event) => {
    document.getElementById('slide').innerHTML = event.detail;
  });

  mySlider13.addEventListener('change', (event) => {
    document.getElementById('change').innerHTML = event.detail;
  });

  mySlider13.setValue(10);

  window.mySlider13 = mySlider13;
})();

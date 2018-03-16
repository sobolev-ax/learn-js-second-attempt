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
        if (!elements[i].classList.contains(active)) continue;
        selected.push(elements[i]);
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

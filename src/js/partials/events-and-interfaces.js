console.log('\n---------------------------------------------Задача 1\n');
(() => {
  const btn = document.querySelector('#input1');
  const text = document.querySelector('#text1');

  function handler() {
    text.style.display = 'none';
  }

  if (btn !== null && text !== null) {
    btn.addEventListener('click', handler);
  }
})();
console.log('\n---------------------------------------------Задача 2\n');
(() => {
  const btn = document.querySelector('#input2');

  function handler() {
    this.style.display = 'none';
  }

  if (btn !== null) {
    btn.addEventListener('click', handler);
  }
})();
console.log('\n---------------------------------------------Задача 3\n');
(() => {
  const btn = document.querySelectorAll('[data-menu-btn]');
  const box = document.querySelectorAll('[data-menu-box]');

  function handler(menu, b) {
    const m = menu;
    if (m.open) {
      m.open = false;
      m.style.display = 'none';
    } else {
      m.open = true;
      m.style.display = 'block';
    }
    b.classList.toggle('open');
  }

  if (btn !== null && box !== null) {
    for (let i = 0; i < btn.length; i++) {
      btn[i].style.cursor = 'pointer';
      box[i].style.display = 'none';

      Object.defineProperty(box[i], 'open', {
        enumerable: false,
        writable: true,
        value: false,
      });

      btn[i].addEventListener('click', () => {
        handler(box[i], btn[i]);
      });
    }
  }
})();
console.log('\n---------------------------------------------Задача 3\n');
(() => {
  const btn = document.querySelectorAll('[data-delete-parent]');

  function handler(button) {
    const message = button.parentElement;
    const parent = message.parentElement;

    parent.removeChild(message);
  }

  if (btn !== null) {
    for (let i = 0; i < btn.length; i++) {
      btn[i].style.cursor = 'pointer';

      btn[i].addEventListener('click', () => {
        handler(btn[i]);
      });
    }
  }
})();
console.log('\n---------------------------------------------Задача 4\n');
(() => {
  const next = document.querySelector('#slider .right');
  const prev = document.querySelector('#slider .left');
  const slider = document.querySelector('#slider ul');

  if (next !== null && prev !== null && slider !== null) {
    const li = slider.querySelectorAll('li');
    const liLength = li.length;
    const step = 3;
    let position = 0;

    let left = 0;
    let right = 2;

    next.addEventListener('click', () => {
      let offset = 0;
      const max = right + step;
      for (let i = right + 1; i <= max; i++) {
        if (i === liLength) {
          break;
        }
        offset += li[i].offsetWidth;
        right = i;
      }
      left = right - (step - 1);
      position -= offset;
      slider.style.transform = `translateX(${position}px)`;
    });

    prev.addEventListener('click', () => {
      let offset = 0;
      const max = left - step;
      for (let i = left - 1; max <= i; i--) {
        if (i < 0) {
          break;
        }
        offset += li[i].offsetWidth;
        left = i;
      }
      right = left + (step - 1);
      position += offset;
      slider.style.transform = `translateX(${position}px)`;
    });
  }
})();

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
console.log('\n---------------------------------------------Задача 2\n');
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

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
console.log('\n---------------------------------------------Задача 4\n');
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
console.log('\n---------------------------------------------Задача 5\n');
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
console.log('\n---------------------------------------------Задача 6\n');
(() => {
  const field = document.querySelector('#field6');
  const ball = document.querySelector('#ball6');

  if (field !== null && ball !== null) {
    field.addEventListener('click', (e) => {
      ball.style.margin = `${0}px`;

      const clickX = e.clientX - field.getBoundingClientRect().left;
      const clickY = e.clientY - field.getBoundingClientRect().top;

      let goX = clickX - field.clientLeft - (ball.offsetWidth / 2);
      let goY = clickY - field.clientTop - (ball.offsetHeight / 2);

      goX = Math.max(goX, 0);
      goX = Math.min(goX, field.clientWidth - ball.offsetWidth);

      goY = Math.max(goY, 0);
      goY = Math.min(goY, field.clientHeight - ball.offsetHeight);

      ball.style.left = `${goX}px`;
      ball.style.top = `${goY}px`;
    });
  }
})();
console.log('\n---------------------------------------------Задача 7\n');
(() => {
  const elem = document.querySelector('#container7');

  if (elem === null) return;

  elem.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-button7')) {
      e.target.parentElement.addEventListener('transitionend', (event) => {
        event.target.parentElement.removeChild(event.target);
      });
      e.target.parentElement.style.transition = 'opacity .5s ease';
      e.target.parentElement.style.opacity = '0';
    }
  });
})();
console.log('\n---------------------------------------------Задача 8\n');
(() => {
  const elem = document.querySelector('.tree8');

  if (elem === null) return;

  elem.addEventListener('click', (e) => {
    if (e.target.tagName !== 'SPAN'
        ||
        e.target.nextElementSibling === null
    ) return;
    if (e.target.nextElementSibling.hasAttribute('hidden')) {
      e.target.nextElementSibling.removeAttribute('hidden');
    } else {
      e.target.nextElementSibling.setAttribute('hidden', '');
    }
  });
})();
console.log('\n---------------------------------------------Задача 9\n');
(() => {
  const elem = document.querySelector('#grid9');

  if (elem === null) return;

  elem.addEventListener('click', (e) => {
    if (!e.target.hasAttribute('data-type')) return;
    const sort = {
      number: (index) => {
        const i = index;
        return (a, b) => {
          const compareA = +a.cells[i].innerText;
          const compareB = +b.cells[i].innerText;
          return compareA - compareB;
        };
      },
      string: (index) => {
        const i = index;
        return (a, b) => {
          const compareA = a.cells[i].innerText;
          const compareB = b.cells[i].innerText;
          return compareA.localeCompare(compareB);
        };
      },
    };


    const arr = Array.prototype.slice.call(e.currentTarget.tBodies[0].rows);
    arr.sort(sort[e.target.getAttribute('data-type')](e.target.cellIndex));

    for (let i = 0; i < arr.length; i++) {
      e.currentTarget.tBodies[0].appendChild(arr[i]);
    }
  });
})();
console.log('\n---------------------------------------------Задача 9\n');
(() => {
  const elem = document.querySelector('#container10');

  if (elem === null) return;

  let tooltip;

  elem.addEventListener('mouseover', (e) => {
    if (!e.target.hasAttribute('data-tooltip')) return;

    tooltip = document.createElement('span');
    tooltip.classList.add('tooltip10');
    tooltip.innerHTML = e.target.getAttribute('data-tooltip');
    e.target.offsetParent.appendChild(tooltip);

    const offset = 5;
    let parentY;
    let top;

    if (
      e.target.getBoundingClientRect().top
      >
      tooltip.offsetHeight + offset
    ) {
      parentY =
        e.target.getBoundingClientRect().top -
        e.target.offsetParent.getBoundingClientRect().top;
      top = parentY - tooltip.offsetHeight - offset;
    } else {
      parentY =
        e.target.getBoundingClientRect().bottom -
        e.target.offsetParent.getBoundingClientRect().top;
      top = parentY + offset;
    }

    tooltip.style.top = `${top}px`;
  });
  elem.addEventListener('mouseout', (e) => {
    if (!e.target.hasAttribute('data-tooltip')) return;
    tooltip.offsetParent.removeChild(tooltip);
  });
})();

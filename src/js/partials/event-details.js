console.log('\n---------------------------------------------Задача 1\n');
(() => {
  const elem = document.querySelector('#ul1');
  const active = 'selected1';
  let clicked;

  if (elem === null) return;

  elem.addEventListener('click', (e) => {
    if (e.target.tagName !== 'LI') return;

    if (e.ctrlKey || e.metaKey) {
      e.target.classList.toggle(active);

      clicked = e.target;
    } else if (e.shiftKey) {
      const elements = e.target.parentElement.children;
      const count = elements.length;
      let current = 0;
      let last = 0;

      for (let i = 0; i < count; i++) {
        if (elements[i] === e.target) current = i;
        if (elements[i] === clicked) last = i;
      }

      const min = current < last ? current : last;
      const max = current >= last ? current : last;

      for (let i = min; i <= max; i++) {
        elements[i].classList.add(active);
      }
      clicked = e.target;
    } else {
      const elements = e.target.parentElement.children;
      const count = elements.length;

      for (let i = 0; i < count; i++) {
        elements[i].classList.remove(active);
      }

      e.target.classList.add(active);
      clicked = e.target;
    }
  });
})();
console.log('\n---------------------------------------------Задача 2\n');
(() => {
  const elem = document.querySelector('#tree2');

  if (elem === null) return;

  elem.addEventListener('click', (e) => {
    const evt = e;
    const target = evt.target || evt.srcElement;

    const node = target.getElementsByTagName('ul')[0];
    if (!node) return; // нет детей

    const span = document.createElement('span');
    const text = target.firstChild.cloneNode(true);
    span.innerText = target.firstChild.textContent;

    target.removeChild(target.firstChild);
    target.insertBefore(span, target.firstChild);

    const elementFromPoint = document.elementFromPoint(e.clientX, e.clientY);
    const isClickOnTitle = (elementFromPoint === span);

    if (isClickOnTitle) {
      node.style.display = node.style.display ? '' : 'none';
    }
    target.removeChild(span);
    target.insertBefore(text, target.firstChild);
  });
})();
console.log('\n---------------------------------------------Задача 3\n');
(() => {
  const elem = document.querySelector('#container3');

  if (elem === null) return;

  let tooltip;

  elem.addEventListener('mouseover', (e) => {
    let node = e.target;
    while (node !== e.currentTarget) {
      if (node.hasAttribute('data-tooltip')) break;
      node = node.parentElement;
    }
    if (node === e.currentTarget) return;

    tooltip = document.createElement('span');
    tooltip.classList.add('tooltip3');
    tooltip.innerHTML = node.getAttribute('data-tooltip');
    node.offsetParent.appendChild(tooltip);

    const offset = 6;

    let parentY = 0;
    let parentX = 0;
    let top = 0;
    let left = 0;
    let maximumAvailableWidth = 0;

    if (
      node.getBoundingClientRect().top
      >
      tooltip.offsetHeight + offset
    ) {
      parentY =
        node.getBoundingClientRect().top -
        node.offsetParent.getBoundingClientRect().top;
      top = parentY - tooltip.offsetHeight - offset;
    } else {
      parentY =
        node.getBoundingClientRect().bottom -
        node.offsetParent.getBoundingClientRect().top;
      top = parentY + offset;
    }


    if (
      node.getBoundingClientRect().left >= 0 &&
      node.offsetParent.getBoundingClientRect().left >= 0
    ) {
      maximumAvailableWidth =
        node.getBoundingClientRect().left +
        (node.offsetWidth / 2);
      parentX =
        node.getBoundingClientRect().left -
        node.offsetParent.getBoundingClientRect().left;

      if (maximumAvailableWidth >= (tooltip.offsetWidth / 2)) {
        left =
          (parentX + (node.offsetWidth / 2))
          - (tooltip.offsetWidth / 2);
      } else {
        left =
          (parentX + (node.offsetWidth / 2) + offset)
          - maximumAvailableWidth;
      }
    } else if (
      node.getBoundingClientRect().left >= 0 &&
      node.offsetParent.getBoundingClientRect().left < 0
    ) {
      maximumAvailableWidth =
        node.getBoundingClientRect().left +
        (node.offsetWidth / 2);
      parentX =
        node.getBoundingClientRect().left +
        Math.abs(node.offsetParent.getBoundingClientRect().left);

      if (maximumAvailableWidth >= (tooltip.offsetWidth / 2)) {
        left =
          (parentX + (node.offsetWidth / 2))
          - (tooltip.offsetWidth / 2);
      } else {
        left =
          (parentX + (node.offsetWidth / 2) + offset)
          - maximumAvailableWidth;
      }
    } else if (
      node.getBoundingClientRect().left < 0
    ) {
      parentX =
        Math.abs(node.offsetParent.getBoundingClientRect().left) -
        Math.abs(node.getBoundingClientRect().left);

      left =
        parentX +
        offset +
        Math.abs(node.getBoundingClientRect().left);
    }

    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${left}px`;
  });
  elem.addEventListener('mouseout', () => {
    if (!tooltip) return;
    tooltip.offsetParent.removeChild(tooltip);
    tooltip = false;
  });
})();
console.log('\n---------------------------------------------Задача 4\n');
(() => {
  function HoverIntent(options) {
    /* ваш код для инициализации и работы HoverIntent */
    this.destroy = () => {
      // для удаления HoverIntent тесты вызывают эту функцию
    };
  }

  const clock = document.querySelector('#elem4');
  const tooltip = document.querySelector('#tooltip4');

  setTimeout(() => {
    const intent = new HoverIntent({
      elem: clock,
      over: () => {
        tooltip.hidden = false;
      },
      out: () => {
        tooltip.hidden = true;
      },
    });
  }, 2000);
})();

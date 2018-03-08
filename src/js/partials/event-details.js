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
    let started = false;
    let hover = false;
    let timer;
    this.destroy = () => {};
    return (e) => {
      switch (e.type) {
        case 'mouseenter':
          if (!started) {
            started = true;
            timer = setTimeout(() => {
              options.over();
              hover = true;
              started = false;
            }, 200);
          }
          break;
        case 'mouseleave':
          if (started) {
            clearTimeout(timer);
            started = false;
          } else if (hover) {
            options.out();
            hover = false;
          }
          break;
        default:
          break;
      }
    };
  }

  const clock = document.querySelector('#elem4');
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip4';
  tooltip.innerHTML = 'Подсказка';

  const hover = new HoverIntent({
    elem: clock,
    over: function Over() {
      tooltip.style.left = `${this.elem.getBoundingClientRect().left}px`;
      tooltip.style.top = `${this.elem.getBoundingClientRect().bottom + 5}p`;
      this.elem.appendChild(tooltip);
    },
    out: function out() {
      this.elem.removeChild(tooltip);
    },
  });

  clock.addEventListener('mouseenter', (e) => {
    hover(e);
  });

  clock.addEventListener('mouseleave', (e) => {
    hover(e);
  });
})();
console.log('\n---------------------------------------------Задача 5\n');
(() => {
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

  const thumb = document.querySelector('.thumb5');
  const slider = document.querySelector('#slider5');

  const coordsOfSlider = getCoords(slider);
  const minX = coordsOfSlider.left + 10;
  const maxX = (coordsOfSlider.left + slider.clientWidth) - 20;

  thumb.addEventListener('dragstart', () => false);
  thumb.addEventListener('mousedown', (e) => {
    const coords = getCoords(thumb);
    const shiftX = e.pageX - coords.left;
    const shiftY = e.pageY - coords.top;

    thumb.style.position = 'absolute';
    document.body.appendChild(thumb);

    const moveAt = function moveAt(event) {
      let x = event.pageX - shiftX;
      if (x < minX) {
        x = minX;
      } else if (x > maxX) {
        x = maxX;
      }
      thumb.style.left = `${x}px`;
    };

    thumb.style.top = `${e.pageY - shiftY}px`;
    moveAt(e);

    document.onmousemove = (event) => {
      moveAt(event);
    };

    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;
    };
  });
})();
console.log('\n---------------------------------------------Задача 6\n');
(() => {
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

  const elem = document.querySelector('#container6');
  const draggable = document.querySelectorAll('.draggable6');

  for (let i = 0; i < draggable.length; i++) {
    draggable[i].ondragstart = () => false;
  }

  elem.addEventListener('mousedown', (e) => {
    if (!e.target.classList.contains('draggable6')) return;
    const availableWidth = document.body.clientWidth;
    const availableHeight = document.body.clientHeight;

    const nodeTarget = e.target;
    const nodeCoords = getCoords(e.target);

    const shiftX = e.pageX - nodeCoords.left;
    const shiftY = e.pageY - nodeCoords.top;

    const moveAt = function moveAt(event) {
      let x = event.pageX - shiftX;
      let y = event.pageY - shiftY;

      console.log(x); // !!!!!!
      if (x < 0) {
        x = 0;
      } else if (x > availableWidth - nodeTarget.offsetWidth) {
        x = availableWidth - nodeTarget.offsetWidth;
      }
      if (y < 0) {
        y = 0;
      } else if (y > availableHeight - nodeTarget.offsetHeight) {
        y = availableHeight - nodeTarget.offsetHeight;
      }

      nodeTarget.style.left = `${x}px`;
      nodeTarget.style.top = `${y}px`;
    };
    const disableMove = function disableMove() {
      document.body.removeEventListener('mousemove', moveAt);
      nodeTarget.removeEventListener('mouseup', disableMove);
    };

    document.body.addEventListener('mousemove', moveAt);
    nodeTarget.addEventListener('mouseup', disableMove);

    nodeTarget.style.position = 'absolute';
    moveAt(e);
  });
})();

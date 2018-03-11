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

      if (y < window.pageYOffset) {
        window.scrollBy(0, y - window.pageYOffset);
      } else if (
        y + nodeTarget.offsetHeight >
        window.pageYOffset + document.documentElement.clientHeight) {
        window.scrollBy(
          0,
          (y + nodeTarget.offsetHeight) -
          (window.pageYOffset + document.documentElement.clientHeight),
        );
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
    elem.appendChild(nodeTarget);
  });
})();
console.log('\n---------------------------------------------Задача 7\n');
(() => {
  const DragManager = () => {
    /**
     * составной объект для хранения информации о переносе:
     * {
     *   elem - элемент, на котором была зажата мышь
     *   avatar - аватар
     *   downX/downY - координаты, на которых был mousedown
     *   shiftX/shiftY - относительный сдвиг курсора от угла элемента
     * }
     */
    let dragObject = {};
    const self = window;
    function onMouseDown(e) {
      if (e.which !== 1) return '';

      const elem = e.target.closest('.draggable7');
      if (!elem) return '';

      dragObject.elem = elem;

      // запомним, что элемент нажат на текущих координатах pageX/pageY
      dragObject.downX = e.pageX;
      dragObject.downY = e.pageY;

      return false;
    }

    function createAvatar() {
      // запомнить старые свойства, чтобы вернуться к ним при отмене переноса
      const avatar = dragObject.elem;
      const old = {
        parent: avatar.parentNode,
        nextSibling: avatar.nextSibling,
        position: avatar.position || '',
        left: avatar.left || '',
        top: avatar.top || '',
        zIndex: avatar.zIndex || '',
      };
      // функция для отмены переноса
      avatar.rollback = () => {
        old.parent.insertBefore(avatar, old.nextSibling);
        avatar.style.position = old.position;
        avatar.style.left = old.left;
        avatar.style.top = old.top;
        avatar.style.zIndex = old.zIndex;
      };

      return avatar;
    }

    function getCoords(elem) { // кроме IE8-
      const box = elem.getBoundingClientRect();
      return {
        top: box.top + window.pageYOffset,
        left: box.left + window.pageXOffset,
      };
    }

    function startDrag() {
      const { avatar } = dragObject;

      // инициировать начало переноса
      document.body.appendChild(avatar);
      avatar.style.zIndex = 9999;
      avatar.style.position = 'absolute';
    }

    function onMouseMove(e) {
      if (!dragObject.elem) return ''; // элемент не зажат

      if (!dragObject.avatar) { // если перенос не начат...
        const moveX = e.pageX - dragObject.downX;
        const moveY = e.pageY - dragObject.downY;

        // если мышь передвинулась в нажатом состоянии недостаточно далеко
        if (Math.abs(moveX) < 3 && Math.abs(moveY) < 3) {
          return '';
        }

        // начинаем перенос
        dragObject.avatar = createAvatar(e); // создать аватар
        if (!dragObject.avatar) { // отмена переноса, нельзя "захватить" за эту часть элемента
          dragObject = {};
          return '';
        }

        // аватар создан успешно
        // создать вспомогательные свойства shiftX/shiftY
        const coords = getCoords(dragObject.avatar);
        dragObject.shiftX = dragObject.downX - coords.left;
        dragObject.shiftY = dragObject.downY - coords.top;

        startDrag(e); // отобразить начало переноса
      }

      // отобразить перенос объекта при каждом движении мыши
      dragObject.avatar.style.left = `${e.pageX - dragObject.shiftX}px`;
      dragObject.avatar.style.top = `${e.pageY - dragObject.shiftY}px`;

      return false;
    }

    function findDroppable(event) {
      // спрячем переносимый элемент
      dragObject.avatar.hidden = true;

      // получить самый вложенный элемент под курсором мыши
      const elem = document.elementFromPoint(event.clientX, event.clientY);

      // показать переносимый элемент обратно
      dragObject.avatar.hidden = false;

      if (elem == null) {
        // такое возможно, если курсор мыши "вылетел" за границу окна
        return null;
      }

      return elem.closest('.droppable7');
    }


    function finishDrag(e) {
      const dropElem = findDroppable(e);

      if (!dropElem) {
        self.onDragCancel(dragObject);
      } else {
        self.onDragEnd(dragObject, dropElem);
      }
    }

    function onMouseUp(e) {
      if (dragObject.avatar) { // если перенос идет
        finishDrag(e);
      }
      // перенос либо не начинался, либо завершился
      // в любом случае очистим "состояние переноса" dragObject
      dragObject = {};
    }

    document.onmousemove = onMouseMove;
    document.onmouseup = onMouseUp;
    document.onmousedown = onMouseDown;

    self.onDragEnd = function DragEnd(dObject, dropElem) {
      dragObject.elem.style.display = 'none';
      dropElem.classList.add('computer-smile7');
      setTimeout(() => {
        dropElem.classList.remove('computer-smile7');
      }, 200);
    };
    self.onDragCancel = function DragCancel() {
      dragObject.avatar.rollback();
    };
  };

  DragManager();
})();
console.log('\n---------------------------------------------Задача 8\n');
(() => {
  const elem = document.querySelector('#elem8');

  Object.defineProperty(elem, 'count', {
    enumerable: false,
    value: 0,
    writable: true,
  });

  function onWheel(e) {
    const event = e || window.event;

    // wheelDelta не дает возможность узнать количество пикселей
    const delta = event.deltaY || event.detail || event.wheelDelta;

    elem.count += delta;

    let scale = 1 + (elem.count / 1000);

    scale = `scale(${scale})`;

    elem.style.transform = scale;
    elem.style.WebkitTransform = scale;
    elem.style.MsTransform = scale;

    if (event.preventDefault) {
      event.preventDefault();
    } else {
      (event.returnValue = false);
    }
  }

  if (elem.addEventListener) {
    if ('onwheel' in document) {
      // IE9+, FF17+, Ch31+
      elem.addEventListener('wheel', onWheel);
    } else if ('onmousewheel' in document) {
      // устаревший вариант события
      elem.addEventListener('mousewheel', onWheel);
    } else {
      // Firefox < 17
      elem.addEventListener('MozMousePixelScroll', onWheel);
    }
  } else { // IE8-
    elem.attachEvent('onmousewheel', onWheel);
  }
})();
console.log('\n---------------------------------------------Задача 9\n');
(() => {
  const elem = document.querySelector('#container9');

  function onWheel(e) {
    const event = e || window.event;

    let node = event.target;
    while (node !== event.currentTarget) {
      if (node.tagName === 'TEXTAREA') break;
      node = node.parentElement;
    }

    if (node === e.currentTarget) return;
    if (node.scrollHeight === node.clientHeight) return;

    const delta = event.deltaY || event.detail || event.wheelDelta;
    const prevent = () => {
      if (event.preventDefault) {
        event.preventDefault();
      } else {
        (event.returnValue = false);
      }
    };

    if (
      (delta < 0 && node.scrollTop === 0) ||
      (delta > 0 && node.scrollTop + node.clientHeight === node.scrollHeight)
    ) {
      prevent();
    }
  }

  if (elem.addEventListener) {
    if ('onwheel' in document) {
      // IE9+, FF17+, Ch31+
      elem.addEventListener('wheel', onWheel);
    } else if ('onmousewheel' in document) {
      // устаревший вариант события
      elem.addEventListener('mousewheel', onWheel);
    } else {
      // Firefox < 17
      elem.addEventListener('MozMousePixelScroll', onWheel);
    }
  } else { // IE8-
    elem.attachEvent('onmousewheel', onWheel);
  }
})();
console.log('\n---------------------------------------------Задача 10\n');
(() => {
  const elem = document.querySelector('#container10');
  const avatar = document.querySelector('#avatar10');

  if (elem === null || avatar === null) return;

  function getCoords(node) {
    const box = node.getBoundingClientRect();

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

  let avatarClone = null;

  Object.defineProperty(avatar, 'bottom', {
    enumerable: false,
    value: getCoords(avatar).top + avatar.offsetHeight,
    writable: false,
  });

  window.addEventListener('scroll', () => {
    if (
      elem.getBoundingClientRect().top >= 0 ||
      elem.getBoundingClientRect().bottom >= 0
    ) {
      if (window.pageYOffset > avatar.bottom) {
        if (!avatar.clone) {
          Object.defineProperty(avatar, 'clone', {
            enumerable: false,
            value: () => {
              const clone = avatar.cloneNode(true);
              clone.style.top = '0';
              clone.style.left = '0';
              clone.style.position = 'fixed';
              elem.appendChild(clone);
              return clone;
            },
            writable: true,
          });
          avatarClone = avatar.clone();
        }
      } else if (avatar.clone) {
        elem.removeChild(avatarClone);
        avatar.clone = null;
      }
    } else if (avatar.clone) {
      elem.removeChild(avatarClone);
      avatar.clone = null;
    }
  });
})();
console.log('\n---------------------------------------------Задача 11\n');
(() => {
  const div = document.createElement('div');

  div.style.position = 'fixed';
  div.style.right = '17px';
  div.style.width = '20px';
  div.style.height = '20px';
  div.style.display = 'none';
  div.style.alignItems = 'center';
  div.style.justifyContent = 'center';
  div.style.color = 'red';
  div.style.fontSize = '17px';
  div.style.cursor = 'pointer';
  div.style.userSelect = 'none';


  const up = div.cloneNode(true);
  const down = div.cloneNode(true);

  up.style.top = '20px';
  up.innerText = '▲';
  document.body.appendChild(up);

  down.style.top = `${20 + up.offsetHeight}px`;
  down.innerText = '▼';
  document.body.appendChild(down);

  Object.defineProperty(down, 'y', {
    enumerable: false,
    value: false,
    writable: true,
  });

  up.addEventListener('click', () => {
    down.y = window.pageYOffset;
    window.scrollTo(0, 0);
  });

  down.addEventListener('click', () => {
    window.scrollTo(0, down.y);
  });

  window.addEventListener('scroll', () => {
    if (window.pageYOffset <= document.documentElement.clientHeight) {
      up.style.display = 'none';
      if (down.save !== false) {
        down.style.display = 'flex';
      }
    } else {
      up.style.display = 'flex';
      down.style.display = 'none';
    }
  });
})();
console.log('\n---------------------------------------------Задача 12\n');
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

  function loadPictures(images, offsetTop, offsetBottom) {
    const img = images;
    for (let i = 0; i < images.length; i++) {
      if (!img[i].loaded) {
        if (
          (img[i].top >= offsetTop && img[i].top <= offsetBottom) ||
          (img[i].bottom >= offsetTop && img[i].bottom <= offsetBottom)
        ) {
          img[i].setAttribute(
            'src',
            img[i].getAttribute('realsrc'),
          );
          img[i].loaded = true;
        }
      }
    }
  }

  const img = document.querySelectorAll('img[realsrc]');

  for (let i = 0; i < img.length; i++) {
    const coords = getCoords(img[i]);

    Object.defineProperties(img[i], {
      top: {
        enumerable: false,
        value: coords.top,
        writable: true,
      },
      bottom: {
        enumerable: false,
        value: coords.top + img[i].offsetHeight,
        writable: true,
      },
      loaded: {
        enumerable: false,
        value: false,
        writable: true,
      },
    });
  }

  const availableHeight = document.documentElement.clientHeight;
  loadPictures(img, window.pageYOffset, window.pageYOffset + availableHeight);

  window.addEventListener('scroll', () => {
    loadPictures(img, window.pageYOffset, window.pageYOffset + availableHeight);
  });
})();
console.log('\n---------------------------------------------Задача 13\n');
(() => {
  function getChar(event) {
    if (event.which == null) {
      if (event.keyCode < 32) return null;
      return String.fromCharCode(event.keyCode); // IE
    }

    if (event.which !== 0 && event.charCode !== 0) {
      if (event.which < 32) return null;
      return String.fromCharCode(event.which); // остальные
    }

    return null; // специальная клавиша
  }

  const input = document.querySelector('#input13');

  input.onkeypress = (e) => {
    if (e.ctrlKey || e.altKey || e.metaKey) return 1;

    const char = getChar(e);

    if (!char) return 1; // спец. символ - не обрабатываем

    if (Number.isNaN(+char)) {
      return false;
    }
    return 1;
  };
})();
console.log('\n---------------------------------------------Задача 14\n');
(() => {
  function runOnKeys(func, ...code) {
    const saveFunc = func;
    const saveCode = code;
    const flags = code.slice();

    document.body.addEventListener('keyup', (e) => {
      const index = saveCode.indexOf(e.keyCode);
      console.log(index);
      if (index !== -1) {
        flags[index] = false;
      }
    });

    document.body.addEventListener('keydown', (e) => {
      const index = saveCode.indexOf(e.keyCode);
      if (index !== -1) {
        flags[index] = true;
        console.log(flags);

        let all = true;
        for (let i = 0; i < flags.length; i++) {
          if (flags[index] !== true) {
            all = false;
            break;
          }
          if (all) saveFunc();
        }
      }
    });
  }

  runOnKeys(
    () => {
      alert('Привет!');
    },
    'Q'.charCodeAt(0),
    'W'.charCodeAt(0),
  );
})();

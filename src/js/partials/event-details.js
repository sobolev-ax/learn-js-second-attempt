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
    if (!e.target.hasAttribute('data-tooltip')) return;

    tooltip = document.createElement('span');
    tooltip.classList.add('tooltip3');
    tooltip.innerHTML = e.target.getAttribute('data-tooltip');
    e.target.offsetParent.appendChild(tooltip);

    const offset = 6;

    let parentY = 0;
    let parentX = 0;
    let top = 0;
    let left = 0;
    let maximumAvailableWidth = 0;

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


    if (
      e.target.getBoundingClientRect().left >= 0 &&
      e.target.offsetParent.getBoundingClientRect().left >= 0
    ) {
      maximumAvailableWidth =
        e.target.getBoundingClientRect().left +
        (e.target.offsetWidth / 2);
      parentX =
        e.target.getBoundingClientRect().left -
        e.target.offsetParent.getBoundingClientRect().left;

      if (maximumAvailableWidth >= (tooltip.offsetWidth / 2)) {
        left =
          (parentX + (e.target.offsetWidth / 2))
          - (tooltip.offsetWidth / 2);
      } else {
        left =
          (parentX + (e.target.offsetWidth / 2) + offset)
          - maximumAvailableWidth;
      }
    } else if (
      e.target.getBoundingClientRect().left >= 0 &&
      e.target.offsetParent.getBoundingClientRect().left < 0
    ) {
      maximumAvailableWidth =
        e.target.getBoundingClientRect().left +
        (e.target.offsetWidth / 2);
      parentX =
        e.target.getBoundingClientRect().left +
        Math.abs(e.target.offsetParent.getBoundingClientRect().left);

      if (maximumAvailableWidth >= (tooltip.offsetWidth / 2)) {
        left =
          (parentX + (e.target.offsetWidth / 2))
          - (tooltip.offsetWidth / 2);
      } else {
        left =
          (parentX + (e.target.offsetWidth / 2) + offset)
          - maximumAvailableWidth;
      }
    } else if (
      e.target.getBoundingClientRect().left < 0
    ) {
      parentX =
        Math.abs(e.target.offsetParent.getBoundingClientRect().left) -
        Math.abs(e.target.getBoundingClientRect().left);

      left =
        parentX +
        offset +
        Math.abs(e.target.getBoundingClientRect().left);
    }

    tooltip.style.top = `${top}px`;
    tooltip.style.left = `${left}px`;
  });
  elem.addEventListener('mouseout', (e) => {
    if (!e.target.hasAttribute('data-tooltip')) return;
    tooltip.offsetParent.removeChild(tooltip);
  });
})();

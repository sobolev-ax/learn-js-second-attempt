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
  const elem = document.querySelector('#house3');

  if (elem === null) return;

  let showingTooltip;

  elem.onmouseover = (e) => {
    const targ = e.target;

    const tooltip = targ.getAttribute('data-tooltip');
    if (!tooltip) return;

    const tooltipElem = document.createElement('div');
    tooltipElem.className = 'tooltip';
    tooltipElem.innerHTML = tooltip;
    document.body.appendChild(tooltipElem);

    const coords = targ.getBoundingClientRect();

    let left = coords.left + ((targ.offsetWidth - tooltipElem.offsetWidth) / 2);
    if (left < 0) left = 0; // не вылезать за левую границу окна

    let top = coords.top - tooltipElem.offsetHeight - 5;
    if (top < 0) { // не вылезать за верхнюю границу окна
      top = coords.top + targ.offsetHeight + 5;
    }

    tooltipElem.style.left = `${left}px`;
    tooltipElem.style.top = `${top}px`;

    showingTooltip = tooltipElem;
  };

  document.onmouseout = (e) => {
    if (showingTooltip) {
      document.body.removeChild(showingTooltip);
      showingTooltip = null;
    }
  };
})();

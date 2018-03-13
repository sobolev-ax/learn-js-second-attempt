console.log('\n---------------------------------------------Задача 1\n');
(() => {
  const form = document.forms.form1;
  const el = form.elements[0];


  console.log(`value: ${el[el.selectedIndex].value}, text: ${el[el.selectedIndex].text}`);


  const option = new Option('Классика', 'Classic');

  form.elements[0].insertBefore(option, el[0]);

  setTimeout(() => {
    option.selected = true;
  }, 2000);
})();
console.log('\n---------------------------------------------Задача 2\n');
(() => {
  // Показать placeholder внутри input
  // Также можно сделать это при помощи вёрстки, отдельным элементом
  function showPlaceholder(input) {
    const node = input;
    node.classList.add('placeholder2');
    node.value = input.dataset.placeholder;
  }
  function hidePlaceholder(input) {
    const node = input;
    node.classList.remove('placeholder2');
    node.value = '';
  }
  function showTooltip(input) {
    const span = document.createElement('span');

    span.classList.add('placeholder-tooltip2');
    span.innerText = input.getAttribute('data-placeholder');

    document.body.appendChild(span);

    const coords = input.getBoundingClientRect();

    span.style.top = `${coords.top - span.offsetHeight}px`;
    span.style.left = `${coords.left}px`;
  }
  function hideTooltip() {
    const tooltips = document.body.querySelectorAll('.placeholder-tooltip2');
    for (let i = 0; i < tooltips.length; i++) {
      document.body.removeChild(tooltips[i]);
    }
  }

  const input = document.querySelector('#container2 [data-placeholder]');

  showPlaceholder(input);

  input.addEventListener('focus', (e) => {
    showTooltip(e.target);
    if (e.target.classList.contains('placeholder2')) {
      hidePlaceholder(e.target);
    }
  });

  input.addEventListener('blur', (e) => {
    hideTooltip();
    if (e.target.value === '') {
      showPlaceholder(e.target);
    }
  });
})();
console.log('\n---------------------------------------------Задача 3\n');
(() => {
  function move(node, direction) {
    const coords = node.getBoundingClientRect();
    const height = node.offsetHeight;
    const width = node.offsetWidth;
    const n = node;

    n.style.position = 'absolute';

    n.style.top = `${coords.top}px`;
    n.style.left = `${coords.left}px`;
    switch (direction) {
      case 38: // up
        n.style.top = `${coords.top - height}px`;
        break;
      case 39: // right
        n.style.left = `${coords.right}px`;
        break;
      case 40: // down
        n.style.top = `${coords.bottom}px`;
        break;
      case 37: // left
        n.style.left = `${coords.left - width}px`;
        break;
      default:
        break;
    }
  }
  const mouse = document.querySelector('#mouse3');
  const area = document.querySelector('#container3');
  let func;

  mouse.setAttribute('tabindex', 0);

  area.addEventListener('click', (e) => {
    if (e.target === mouse && !mouse.on) {
      const node = e.target;
      mouse.on = true;
      mouse.addEventListener('keydown', func = (ev) => {
        move(node, ev.keyCode);
      });
    } else if (mouse.on) {
      mouse.on = false;
      mouse.removeEventListener('keydown', func);
    }
  });
})();
console.log('\n---------------------------------------------Задача 4\n');
(() => {

})();

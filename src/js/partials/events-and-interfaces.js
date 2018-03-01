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

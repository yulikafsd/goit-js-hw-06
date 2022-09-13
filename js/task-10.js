const refs = {
  boxesEl: document.querySelector('div#boxes'),
  inputEl: document.querySelector('input[type="number"]'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
};

refs.createBtn.addEventListener('click', onClickCreateBoxes);
refs.destroyBtn.addEventListener('click', onClickDestroyBoxes);

let boxSize = 30;
const boxStep = 10;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onClickCreateBoxes(amount) {
  let boxesMarkup = [];
  amount = refs.inputEl.value;

  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement('div');
    boxEl.style.backgroundColor = getRandomHexColor();
    boxEl.style.width = boxSize + 'px';
    boxEl.style.height = boxSize + 'px';
    boxesMarkup.push(boxEl);
    boxSize += boxStep;
  }

  refs.boxesEl.append(...boxesMarkup);
}

function onClickDestroyBoxes() {
  refs.boxesEl.innerHTML = '';
  refs.inputEl.value = '';
  boxSize = 30;
}

// можно через шаблонную строку
// const boxEl = `<div></div>`;
// const boxesMarkup = arrNumbers.map(arrNumber => arrNumber).join('');
// refs.boxesEl.innerHTML = boxesMarkup;
// Как тогда стилизовать?

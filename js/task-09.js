const refs = {
  colorOutput: document.querySelector('span.color'),
  buttonEl: document.querySelector('button.change-color'),
  bodyEl: document.querySelector('body'),
};

refs.buttonEl.addEventListener('click', onClickChangeBodyColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onClickChangeBodyColor() {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
  refs.colorOutput.textContent = refs.bodyEl.style.backgroundColor;
}

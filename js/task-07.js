const refs = {
  inputEl: document.querySelector('input#font-size-control'),
  textEl: document.querySelector('span#text'),
};

refs.inputEl.value = 16;

refs.inputEl.addEventListener('input', onInputResize);

function onInputResize() {
  refs.textEl.style.fontSize = refs.inputEl.value + 'px';
}

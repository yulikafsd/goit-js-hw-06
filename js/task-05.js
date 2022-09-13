// Напиши скрипт, який під час набору тексту в інпуті input#name - input(подія input),
// підставляє його поточне значення в span#name - output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const refs = {
  inputEl: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

refs.inputEl.addEventListener('input', onInputPrintName);

function onInputPrintName(event) {
  event.currentTarget.value !== ''
    ? (refs.output.textContent = event.currentTarget.value.trim())
    : (refs.output.textContent = 'Anonymous');
}

// Другой вариант:
// function onInputPrintName() {
//   if (refs.inputEl.value === '') {
//     return (refs.output.textContent = 'Anonymous');
//   }
//   refs.output.textContent = refs.inputEl.value;
// }

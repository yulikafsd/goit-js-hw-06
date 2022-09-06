const inputEl = document.querySelector('#validation-input');
const dataLength = Number(inputEl.dataset.length);

inputEl.addEventListener('blur', onBlur);
inputEl.addEventListener('focus', onFocus);

function onBlur(event) {
  const eventClass = event.currentTarget.classList;

  event.currentTarget.value.length < dataLength
    ? eventClass.add('invalid')
    : eventClass.add('valid');
}

function onFocus(event) {
  const eventClass = event.currentTarget.classList;

  if (eventClass.contains('valid')) {
    eventClass.remove('valid');
  }

  if (eventClass.contains('invalid')) {
    eventClass.remove('invalid');
  }
}

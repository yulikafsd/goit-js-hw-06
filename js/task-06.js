const inputEl = document.querySelector('#validation-input');
const dataLength = Number(inputEl.dataset.length);

inputEl.addEventListener('blur', onBlurChangeClass);

function onBlurChangeClass(event) {
  const eventClass = event.currentTarget.classList;
  const eventTrimmedValueLength = event.currentTarget.value.trim().length;
  if (
    eventTrimmedValueLength < dataLength ||
    eventTrimmedValueLength > dataLength
  ) {
    if (eventClass.contains('valid')) {
      eventClass.replace('valid', 'invalid');
    }

    if (!eventClass.contains('invalid')) {
      eventClass.add('invalid');
    }
  }

  if (eventTrimmedValueLength === dataLength) {
    if (eventClass.contains('invalid')) {
      eventClass.replace('invalid', 'valid');
    }

    if (!eventClass.contains('valid')) {
      eventClass.add('valid');
    }
  }
}

// Другий варіант - скидати класи на фокусі
// (закоментити стр. 6 - 32, розкоментити 37-57)

// inputEl.addEventListener('focus', onFocus);

// function onBlurChangeClass(event) {
//   const eventClass = event.currentTarget.classList;

//   event.currentTarget.value.length < dataLength
//     ? eventClass.add('invalid')
//     : eventClass.add('valid');
// }

// function onFocus(event) {
//   const eventClass = event.currentTarget.classList;

//   if (eventClass.contains('valid')) {
//     eventClass.remove('valid');
//   }

//   if (eventClass.contains('invalid')) {
//     eventClass.remove('invalid');
//   }
// }

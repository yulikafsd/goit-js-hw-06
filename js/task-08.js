const form = document.querySelector('form.login-form');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const emailLength = form.elements.email.value.length;
  const passwordLength = form.elements.password.value.length;

  if (emailLength === 0 || passwordLength === 0) {
    alert('Please, fill all the fields 👀 ');
  } else {
    const formData = new FormData(event.currentTarget);
    const formDataObj = {};

    formData.forEach((inputValue, inputName) => {
      formDataObj[inputName] = inputValue;
    });

    console.log(formDataObj);

    event.currentTarget.reset();
  }
}

// Напиши скрипт управління формою логіна.
// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, 
// збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

// Проблема: не получилось проверить все инпуты вместе, только отдельно
// (см.закомментированные строки внизу). Почему не срабатывает array.every?

const refs = {
    form: document.querySelector('.login-form'),
    // Находим все инпуты формы
    // inputs: document.querySelectorAll('input'),
    inputEmail: document.querySelector('input[name="email"]'),
    inputPass: document.querySelector('input[name="password"]'),
}


refs.form.addEventListener('submit', onFormSubmit);

let objectFormData = {};
// Создаем массив из нодлиста
// let arrInputs = Array.from(refs.inputs);

function onFormSubmit(event) {
    event.preventDefault();

    // Проверяем длину введенных данных инпутов в массиве 
    // const checkInputs = arrInputs.every((input) => {
    //     input.value.length === 0;
    //     console.log(input.value.length === 0);
    // });
    // console.log(checkInputs);

    // Если в каком-то инпуте длина данных = нулю, вызываем алерт. 
    // Если нет - создаем объект с данными
    // if (checkInputs === true) {
    
    if (refs.inputEmail.value.length !== 0 && refs.inputPass.value.length !== 0) {
            
            const formData = new FormData(event.currentTarget);
            
            formData.forEach((inputValue, inputName) => {
                objectFormData[inputName] = inputValue;
            });
            
            console.log('Data object:', objectFormData);
            refs.form.reset();

        } else {
            
            alert('Всі поля повинні бути заповнені');
        };
        
    };

    // ДЛЯ СЕБЯ:
    // Класс FormData используется для сбора названия полей и значений для бэкендa
    // Свойство currentTarget используется при необходимости работы с данными в 1 поле.
    // Ссылается на текущий объект, на котором висит слушатель и словлено событие (напр, сабмит):
    // const formElements = event.currentTarget.elements;
    // console.dir(formElements);

    // const email = formElements.email;
    // const password = formElements.password;
    
    // console.log(`Email: ${email.value}; Password: ${password.value}`);
// };


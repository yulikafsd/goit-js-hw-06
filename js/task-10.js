// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. 

const refs = {
  inputEl: document.querySelector('[type="number"]'),
  createBtnEl: document.querySelector('[data-create]'),
  destroyBtnEl: document.querySelector('[data-destroy]'),
  boxesEl: document.querySelector('#boxes'),
};

const getRandomHexColor = function () {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

refs.createBtnEl.addEventListener('click', function createBoxes(amount) {
  amount = refs.inputEl.value;

  // Для удобства проверки результата:
  const arrNumbers = [];
  for (let i = 0; i < amount; i += 1) {
    const divBox = `<div>DivBox${i + 1}</div>`;
    arrNumbers.push(divBox);
  };

  const boxesMarkup = arrNumbers
    .map((arrNumber) => arrNumber)
    .join("");

  refs.boxesEl.innerHTML = boxesMarkup;

  // Перебрать дивы-дети boxes и задать им размер и цвет... Как???
  // let j = 30;
  // const box = document.querySelector('[class="box${i+1}"]') - как перебирать?
  // box.style.backgroundColor = getRandomHexColor;
  // box.style.width = j + "px";
  // box.style.height = j + "px";
  // j += 10;

});

refs.destroyBtnEl.addEventListener('click', function destroyBoxes() {
  refs.boxesEl.innerHTML = "";
  refs.inputEl.value = "";
});
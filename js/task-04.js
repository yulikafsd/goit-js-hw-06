const refs = {
  decrementBtnEl: document.querySelector('button[data-action="decrement"]'),
  incrementBtnEl: document.querySelector('button[data-action="increment"]'),
  resultEl: document.querySelector('#value'),
};

let counterValue = 0;

refs.decrementBtnEl.addEventListener('click', decrement);
refs.incrementBtnEl.addEventListener('click', increment);

function increment() {
  counterValue += 1;
  refs.resultEl.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  refs.resultEl.textContent = counterValue;
}

// Другий варіант через Прототип - до біса складно, але універсально

// const CounterPlugin = function ({
//   selector,
//   inititalValue = 0,
//   step = 1,
// } = {}) {
//   this._value = inititalValue;
//   this._step = step;
//   this._refs = this._getRefs(selector);
//   this._bindEvents();
//   this.updateValueUI();
// };

// CounterPlugin.prototype._getRefs = function (selector) {
//   const refs = {};
//   refs.container = document.querySelector(selector);
//   refs.incrementBtn = refs.container.querySelector('[data-action="increment"]');
//   refs.decrementBtn = refs.container.querySelector('[data-action="decrement"]');
//   refs.value = refs.container.querySelector('#value');

//   return refs;
// };

// CounterPlugin.prototype.increment = function () {
//   this._value += this._step;
// };

// CounterPlugin.prototype.decrement = function () {
//   this._value -= this._step;
// };

// CounterPlugin.prototype.updateValueUI = function () {
//   this._refs.value.textContent = this._value;
// };

// CounterPlugin.prototype._bindEvents = function () {
//   this._refs.incrementBtn.addEventListener('click', () => {
//     this.increment();
//     this.updateValueUI();
//   });
//   this._refs.decrementBtn.addEventListener('click', () => {
//     this.decrement();
//     this.updateValueUI();
//   });
// };

// new CounterPlugin({ selector: '#counter', step: 1, inititalValue: 0 });

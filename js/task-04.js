// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

// ДО БІСА СКЛАДНА ШТУКА, ЩЕ РАЗИ З ЧОТИРИ ЇЇ НАПИШУ, ЩОБ ЗАТЯМИТИ! ))) 
// Але дуже дякую за неї - дає розуміння, як працювати з прототипами. 

const CounterPlugin = function ({ selector, inititalValue = 0, step = 1, } = {}) {
    this._value = inititalValue;
    this._step = step;
    
    this._refs = this._getRefs(selector);
    this._bindEvents();
    this.updateValueUI();
};

CounterPlugin.prototype._getRefs = function (selector) {
    const refs = {};
    refs.container = document.querySelector(selector);
    refs.incrementBtn = refs.container.querySelector('[data-action="increment"]');
    refs.decrementBtn = refs.container.querySelector('[data-action="decrement"]');
    refs.value = refs.container.querySelector('#value');

    return refs;
};

CounterPlugin.prototype.increment = function () {
    this._value += this._step;
};

CounterPlugin.prototype.decrement = function () {
    this._value -= this._step;
};

CounterPlugin.prototype.updateValueUI = function () {
    this._refs.value.textContent = this._value;
};

CounterPlugin.prototype._bindEvents = function () {
    this._refs.incrementBtn.addEventListener('click', () => {
        this.increment();
        this.updateValueUI();
    });
    this._refs.decrementBtn.addEventListener('click', () => {
        this.decrement();
        this.updateValueUI();
    })
};

new CounterPlugin({ selector: '#counter', step: 1, inititalValue: 5 });
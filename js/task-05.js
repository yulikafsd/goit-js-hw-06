const refs = {
    input: document.querySelector('#name-input'),
    output: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', onInputChangeOutput);

function onInputChangeOutput(event) {
    event.currentTarget.value !== ''
        ? refs.output.textContent = event.currentTarget.value
        : refs.output.textContent = 'Anonymous';
}
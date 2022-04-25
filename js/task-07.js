const refs = {
    slider: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};

refs.slider.addEventListener('input', onInputResize);

function onInputResize() {
    refs.text.style.fontSize = refs.slider.value + "px";
};
const bg = document.querySelector('.bg');
const text = document.querySelector('.loading-text');
let load = 0;
let interval = setInterval(blurring, 30);
function blurring() {
    load++;
    if (load > 99) {
        clearInterval(interval);
    }
    text.innerText = `${load}%`;
    text.style.opacity = mapNumber(load, 0, 100, 1, 0).toString();
    bg.style.filter = `blur(${mapNumber(load, 0, 100, 30, 0)}px)`;
}
function mapNumber(number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

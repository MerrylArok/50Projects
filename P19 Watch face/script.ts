const hourEl = document.querySelector('.hour') as HTMLElement;
const minuteEl = document.querySelector('.minute') as HTMLElement;
const secondEl = document.querySelector('.second') as HTMLElement;
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggleEl = document.querySelector('.toggle') as HTMLButtonElement;
const htmlEl = document.querySelector('html');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Decemeber"];

toggleEl.addEventListener('click', () => {
    htmlEl.classList.toggle('dark');

    if (htmlEl.classList.contains('dark')) {
        toggleEl.innerText = 'Light Mode';
        toggleEl.style.backgroundColor = 'white';
        toggleEl.style.color = 'black';
    } else {
        toggleEl.innerText = 'Dark Mode';
        toggleEl.style.backgroundColor = '#333';
        toggleEl.style.color = 'white';
    }
})

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hours12 = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';


    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hours12, 0, 12, 0, 360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`;

    hourEl.style.transition = `${hours === 0 ? "none" : "all 0.5s ease-in"}`;
    minuteEl.style.transition = `${minutes === 0 ? "none" : "all 0.5s ease-in"}`;
    secondEl.style.transition = `${seconds === 0 ? "none" : "all 0.5s ease-in"}`;


    timeEl.innerHTML = `${hours12}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;

    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;

}

function scale(num, in_min, in_max, out_min, out_max) {
    return (num - in_max) * (out_max - out_min) / (in_max - in_min) + out_min;
}

setTime();
setInterval(setTime, 1000);
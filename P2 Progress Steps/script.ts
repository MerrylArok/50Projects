const progress = <HTMLElement>document.getElementById('progress');
const previous = <HTMLButtonElement>document.getElementById('previous');
const next = document.getElementById('next') as HTMLButtonElement;
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
    currentActive++;

    if (currentActive > circles.length) {
        currentActive = circles.length;
    }

    update();
})

previous.addEventListener('click', () => {
    currentActive--;

    if (currentActive < 1) {
        currentActive = 1;
    }

    update();
})

function update(): void {
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll('.active');

    if (currentActive == 1) {
        previous.disabled = true;
    } else if (currentActive == circles.length) {
        next.disabled = true;
    } else {
        previous.disabled = false;
        next.disabled = false;
    }

    progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%"
}





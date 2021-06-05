type filter = "left" | "right" | null;

const left = document.querySelector('.left') as HTMLElement;
const leftButton = left.querySelector('.btn') as HTMLButtonElement;
const right = document.querySelector('.right') as HTMLElement;
const rightButton = right.querySelector('.btn') as HTMLButtonElement;
const container = document.querySelector('.container') as HTMLElement;
let filterAssigned: filter = null;

function addFilter() {
    container.classList.remove('nofilter');
    container.classList.add('filter');
}

function removeFilter() {
    container.classList.add('nofilter');
    container.classList.remove('filter');
}

container.addEventListener('mouseleave', () => {
    console.log("OUT");
    filterAssigned = null
});

left.addEventListener('mouseenter', () => {
    if (filterAssigned != "right") {
        addFilter();
        filterAssigned = "left";
    }
    container.classList.add('hoverLeft');
    leftButton.innerText = "WOOOO";
});

left.addEventListener('mouseleave', () => {
    if (filterAssigned == "left") {
        removeFilter();
    }
    container.classList.remove('hoverLeft');
    leftButton.innerText = "SLIDE";
});


right.addEventListener('mouseenter', () => {
    if (filterAssigned != "left") {
        addFilter();
        filterAssigned = "right";
    }
    container.classList.add('hoverRight');
    rightButton.innerText = "WEEEE";
});

right.addEventListener('mouseleave', () => {
    if (filterAssigned == "right") {
        removeFilter();
    }
    container.classList.remove('hoverRight')
    rightButton.innerText = "SLIDE";
});

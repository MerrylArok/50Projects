"use strict";

const panels: Array<HTMLElement> = [...document.querySelectorAll<HTMLElement>('.panel')];

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active')
    })
})

function removeActiveClasses(): void {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}
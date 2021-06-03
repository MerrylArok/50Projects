"use strict";
const boxes = document.querySelectorAll('.box');
window.addEventListener('scroll', checkBoxes);
checkBoxes(); //to show boxes before scrolling
function checkBoxes() {
    const triggerBottom = window.innerHeight / 4 * 3;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            box.classList.add('show');
        }
        else {
            box.classList.remove('show');
        }
    });
}

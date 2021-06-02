"use strict";
const openToggle = document.getElementById('open');
const closeToggle = document.getElementById('close');
const container = document.querySelector('.container');
openToggle.addEventListener('click', () => {
    container.classList.add('show-nav');
});
closeToggle.addEventListener('click', () => {
    container.classList.remove('show-nav');
});

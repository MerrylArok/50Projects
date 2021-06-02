const search = document.querySelector('.search') as HTMLElement;
const searchButton = document.querySelector('.btn') as HTMLButtonElement;
const input = document.querySelector('.input') as HTMLInputElement;

searchButton.addEventListener('click', () => {
    search.classList.toggle('active');

    input.focus();
})
const nav = document.querySelector('.nav') as HTMLElement;


function fixNav() {
    if (window.scrollY > (nav.offsetHeight + 150)) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
}

window.addEventListener('scroll', fixNav);


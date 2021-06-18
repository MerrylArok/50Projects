const buttons = document.querySelectorAll('.ripple');
buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        const x = e.clientX;
        const y = e.clientY;
        const buttonTop = button.offsetTop;
        const buttonLeft = button.offsetLeft;
        const xInButton = x - buttonLeft;
        const yInButton = y - buttonTop;
        const circleSpan = document.createElement('span');
        circleSpan.classList.add('circle');
        circleSpan.style.top = yInButton + 'px';
        circleSpan.style.left = xInButton + 'px';
        this.appendChild(circleSpan);
        setTimeout(() => circleSpan.remove(), 500);
    });
});

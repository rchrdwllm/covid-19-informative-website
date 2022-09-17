const burger = document.querySelector('.burger');
const burgerLines = document.querySelectorAll('.burger .burger-line');
const navLinks = document.querySelector('nav ul');

const scroll = new LocomotiveScroll({
    el: document.querySelector('.smooth-scroll'),
    smooth: true,
    tablet: {
        smooth: true,
    },
});

function toggleNav() {
    navLinks.classList.toggle('open');

    burgerLines.forEach(burgerLine => {
        burgerLine.classList.toggle('open');
    });
}

window.onload = () => {
    scroll.update();
};

window.addEventListener('resize', () => {
    scroll.update();
});

burger.addEventListener('click', toggleNav);

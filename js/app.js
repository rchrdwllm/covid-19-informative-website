const scroll = new LocomotiveScroll({
    el: document.querySelector('.smooth-scroll'),
    smooth: true,
});

window.onload = () => {
    scroll.update();
};

const casesText = document.querySelector('#global-cases');
const recoveriesText = document.querySelector('#global-recoveries');
const deathsText = document.querySelector('#global-deaths');
const updatedText = document.querySelector('#updated-text');
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

async function fetchCovidCases() {
    const response = await fetch('https://disease.sh/v3/covid-19/all');
    const data = await response.json();

    populateCovidCases(data);
}

function populateCovidCases(data) {
    const { cases, recovered, deaths } = data;

    casesText.innerHTML = cases.toLocaleString();
    recoveriesText.innerHTML = recovered.toLocaleString();
    deathsText.innerHTML = deaths.toLocaleString();
    updatedText.innerHTML = `Updated: ${new Date().toLocaleString()} (Updated every 10 mins)`;
}

function toggleNav() {
    navLinks.classList.toggle('open');

    burgerLines.forEach(burgerLine => {
        burgerLine.classList.toggle('open');
    });
}

fetchCovidCases();

setInterval(fetchCovidCases, 600000);

window.onload = () => {
    scroll.update();
};

window.addEventListener('resize', () => {
    scroll.update();
});

burger.addEventListener('click', toggleNav);

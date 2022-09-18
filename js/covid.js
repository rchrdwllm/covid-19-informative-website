const casesText = document.querySelector('#global-cases');
const recoveriesText = document.querySelector('#global-recoveries');
const deathsText = document.querySelector('#global-deaths');
const updatedText = document.querySelector('#updated-text');

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
    updatedText.innerHTML = `Last updated: ${new Date().toLocaleString()}`;
}

fetchCovidCases();

setInterval(fetchCovidCases, 600000);

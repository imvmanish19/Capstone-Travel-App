const place = document.getElementById('place').value;
const geoNamesURL = 'http://api.geonames.org/searchJSON?q=';
const geoUsername = "imvmanish";
const weatherAPIUrl = 'https://api.weatherbit.io/v2.0/current?key=';
const weatherAPIKey = 'a2df8d0b00694eee8c5e137ec190e3fd';
const dateOfDept = document.getElementById('date-of-departure').value;
const dateSplit = dateOfDept.split('-').map(Number);
const dateForTimestamp = `${dateSplit[1]}/${dateSplit[2]}/${dateSplit[0]}`
let timestamp = (new Date(dateForTimestamp).getTime()) / 1000;
const pixabayURL = 'https://pixabay.com/api/?key=';
const pixabayKey = '16731537-9779fd1a1d5d3ac94e371b3f4';

console.log(timestamp)
//Get City Data

const getCityData = (geoNamesURL, place, username) => {
    console.log(geoNamesURL + place + "&maxRows=10&" + "username=" + username)
    fetch(geoNamesURL + place + "&maxRows=10&" + "username=" + username)
    .then(res => res.json())
    .then(cityInfo => {
        console.log(cityInfo)
        const cityLatitude = cityInfo.geonames[0].lat;
        const cityLongitude = cityInfo.geonames[0].lng;
        const country = cityInfo.geonames[0].countryName;
        console.log(cityLatitude,cityLongitude,country)
        // timestamp = (new Date(dateOfDept).getTime()) / 1000;
        getWeatherInfo(cityLatitude, cityLongitude, country, timestamp);
    });
};

//Weather API

const getWeatherInfo = (cityLatitude, cityLongitude, country, timestamp) => {
    const weatherGet = `${weatherAPIUrl}${weatherAPIKey}&lat=${cityLatitude}&lon=${cityLongitude}`;
    console.log(weatherGet);
    fetch(weatherGet)
    .then(res => {
      return res.json();
    })
    .then(weatherData => {
        const data = {
            icon: weatherData.data[0].weather.icon,
            temp: weatherData.data[0].temp,
            summary: weatherData.data[0].weather.description,
            clouds: weatherData.data[0].clouds
        }
        updateUI(data);
    });
}

function updateUI(data) {
    const uiElementTwo = document.querySelector('.final-two');
    const uiElementThree = document.querySelector('.final-three');
    let famousCity = document.getElementById('place').value;
    console.log(famousCity);
    const pixURL = pixabayURL+pixabayKey+"&q="+famousCity+'&image_type=photo&category=places';
    console.log(pixURL)
    const {icon,temp,summary,clouds} = data;
    let dataOutput = `
    <div style="padding-top: 10px;">
    <h1>Weather Forecast</h1>
    <span><img src="https://www.weatherbit.io/static/img/icons/${icon}.png" height="75" width="75"></span>
    <h2>Temperature: <span>${temp}</span> </h2>
    <h2>Summary: <span>${summary}</span></h2>
    <h2>Clouds: <span>${clouds}</span></h2>
    </div>
    `;
    uiElementTwo.innerHTML = dataOutput;
    fetch(pixURL)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const imgElement = `
        <div style="padding:10px;">
        <h1 style="font-size:28px; color:white;">Image Of Your Destination</h1>
        <img src=${data.hits[0].webformatURL} height="200" width="200">
        <div>
        `;
        uiElementThree.innerHTML=imgElement;
    });
}

document.getElementById('mainform').addEventListener('submit',(e) => {
    e.preventDefault();
    boxHandler();
})

function boxHandler() {
    let city = document.getElementById('place').value;
    getCityData(geoNamesURL,city,geoUsername);
}


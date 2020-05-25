const place = document.getElementById('place').value;
const geoNamesURL = 'http://api.geonames.org/searchJSON?q=';
const geoUsername = "imvmanish";
const weatherAPIUrl = '';
const weatherAPIKey = 'a2df8d0b00694eee8c5e137ec190e3fd';
const dateOfDept = document.getElementById('date-of-departure').value;
const timestamp = (new Date(dateOfDept).getTime()) / 1000;
const pixabayURL = 'https://pixabay.com/api/?key=';
const pixabayKey = '16731537-9779fd1a1d5d3ac94e371b3f4';


//Get City Data

const getCityData = (geoNamesURL, place, username) => {
    const res = fetch(geoNamesURL + place + "&maxRows=10&" + "username=" + username)
    .then(res => res.json())
    .then(data => {
        return data;
    })
    .catch(err => {
        console.log(err);
    })
};

//Weather API

const getWeatherInfo = (cityLatitude, cityLongitude, country, timestamp) => {
    const weatherGet = `${weatherAPIUrl}/${weatherAPIKey}/${cityLatitude},${cityLongitude},${timestamp}?exclude=minutely,hourly,daily,flags)`
    fetch(weatherGet)
    .then(res => res.json())
    .then(data => data)
    .catch(err => {
        console.log(err);
    })
}

function updateUI(data) {
    const uiElementOne = document.querySelector('final-two');
    const uiElementTwo = document.querySelector('final-three');
    const pixURL = pixabayURL+pixabayKey+"&q="+place+'+city&image_type=photo';
    
}

function boxHandler(event) {

    getCityData(geoNamesURL,place,geoUsername)
    .then(cityInfo => {
        const cityLatitude = cityInfo.geonames[0].lat;
        const cityLongitude = cityInfo.geonames[0].lng;
        const country = cityInfo.geonames[0].countryName;
        timestamp = (new Date(dateOfDept).getTime()) / 1000;
        const weatherData = getWeatherInfo(cityLatitude, cityLongitude, country, timestamp)
        return weatherData;
    })
    .then(weatherData => {
        const data = {
            temp: weatherData.currently.temperature,
            summary: weatherData.currently.summary
        }
        fetch('/weather',{
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            updateUI(data);
        })
    })
}


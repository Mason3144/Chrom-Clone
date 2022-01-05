const weatherId1 = document.querySelector("#weather span:first-child")
const weatherId2 = document.querySelector("#weather span:last-child")
const API_KEY = "25d00922b44984512b20d85d5ae79fe6"



function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const name = data.name;
            const weather = data.weather[0].main;
            weatherId1.innerText = name;
            weatherId2.innerText = weather;
        });
}

function onGeoError() {
    alert("can't find you. No weather for you")

}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
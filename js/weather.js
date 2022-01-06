
const API_KEY = "25d00922b44984512b20d85d5ae79fe6"



function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const city = document.querySelector("#city")
            const mood = document.querySelector("#mood")
            const degree = document.querySelector("#degree")
            const weather = data.weather[0].main;

            city.innerText = data.name;
            // mood.innerText = data.weather[0].main;
            degree.innerText = data.main.temp;
            if (weather === "Clouds") {
                mood.classList.add("fas", "fa-cloud");
            } else if (weather === "Clear") {
                mood.classList.add("fas", "fa-sun");
            } else if (weather === "Rain") {
                mood.classList.add("fas", "fa-umbrella");
            } else if (weather === "Snow") {
                mood.classList.add("fas", "fa-snowflake");
            } else {
                mood.innerText = data.weather[0].main;
            }

        });
}

function onGeoError() {
    alert("Can't find you. No weather for you")

}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);




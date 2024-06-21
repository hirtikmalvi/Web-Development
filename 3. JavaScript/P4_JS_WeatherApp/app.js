let = BASE_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; //See on Local JS file
let apiId = "cf1cfe2e28cf096dbbbf1e889d7643fe"; //See on Local JS file
let searchBtn = document.querySelector(".search button");
let searchBox = document.querySelector(".search input");
let weatehrIconList = ["clear", "drizzle", "humidity", "mist", "clouds", "rain", "snow"];


async function checkWeather(city) {
    const response = await fetch(BASE_URL + city + `&appid=${apiId} `);

    if (response.status == 404) {
        document.querySelector(".error").classList.remove("hide");
        document.querySelector(".weather").classList.add("hide");
    }
    else {
        var data = await response.json();
        console.log("City Name1:", data.name);
        document.querySelector(".city").innerText = data.name;
        document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerText = data.main.humidity + "%";
        document.querySelector(".wind").innerText = data.wind.speed + "km/h";

        document.querySelector(".weatherIcon").src = "images/mist.png"; //Default
        let weatherCond = data.weather[0].main.toLowerCase();
        console.log(weatherCond);
        for (let icon of weatehrIconList) {
            if (icon === weatherCond) {
                document.querySelector(".weatherIcon").src = `images/${icon}.png`;
            }
        }
        document.querySelector(".error").classList.add("hide");
        document.querySelector(".weather").classList.remove("hide");
    }
}

searchBtn.addEventListener("click", (element) => {
    checkWeather(searchBox.value);
});
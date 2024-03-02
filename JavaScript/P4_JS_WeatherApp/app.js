let searchBtn = document.querySelector(".search button");
let = BASE_URL = "https://api.weatherapi.com/v1/current.json?key=4db3305650dc4da78b9192818240103&q=";
let XURL = "https://api.weatherapi.com/v1/current.json?key=4db3305650dc4da78b9192818240103&q=";

async function temp(city) {
    const response = await fetch(XURL + city + "&aqi=yes");
    var data = await response.json();
    console.log(data.current.condition.text.toLowerCase());
}


searchBtn.addEventListener("click", (element) => {
    let parentEle = element.target.parentElement;
    let cityName = parentEle.querySelector("input").value;
    checkWeather(cityName);
});

async function checkWeather(city) {
    const response = await fetch(BASE_URL + city + "&aqi=yes");
    var data = await response.json();
    console.log("City Name1:", data.location.name);
    document.querySelector(".city").innerText = data.location.name;
    document.querySelector(".temp").innerText = data.current.temp_c + "°C";
    document.querySelector(".humidity").innerText = data.current.humidity + "%";
    document.querySelector(".wind").innerText = data.current.wind_kph + "km/h";

    let imgSrc = "images/mist.png";
    let weatherCond = data.current.condition.text.toLowerCase();
    console.log(weatherCond);
    document.querySelector(".weatherIcon").src = `images/${weatherCond}.png`;
}

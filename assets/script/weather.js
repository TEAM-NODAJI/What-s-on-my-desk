const WEATHER_API_KEY = config.apikey;

const weatherContainer = document.querySelector(".cont-weather"),
  titCity = weatherContainer.querySelector(".city"),
  weatherIcon = weatherContainer.querySelector(".icon"),
  weatherCondition = weatherContainer.querySelector(".weather-condition"),
  weatherTemp = weatherContainer.querySelector(".temp"),
  tempMinCont = weatherContainer.querySelector(".temp-min"),
  tempMaxCont = weatherContainer.querySelector(".temp-max");

navigator.geolocation.getCurrentPosition(success, error);

function success(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=KR&appid=${WEATHER_API_KEY}`;

  getWeatherData(url);
}

function error() {
  alert("위치를 찾을 수 없습니다.");
}

async function getWeatherData(url) {
  const response = await fetch(url);
  if (response.ok) {
    let data = await response.json();
    render(data);
  } else {
    alert("ERR: ", response.status);
  }
}

function render(data) {
  const country = data.sys.country,
    city = data.name,
    mainWeather = data.weather[0].main,
    icon = data.weather[0].icon,
    temp = data.main.temp,
    tempMax = data.main.temp_max,
    tempMin = data.main.temp_min,
    icon_url = `https://openweathermap.org/img/wn/${icon}.png`;

  titCity.textContent = `${city} / ${country}`;
  weatherIcon.innerHTML = `<img src="${icon_url}" alt="">`;
  weatherCondition.textContent = mainWeather;
   weatherTemp.innerHTML = `${parseInt(temp - 273.15)}`;
  tempMaxCont.innerHTML = `최대 : ${parseInt(tempMax - 273.15)}&#176;`;
  tempMinCont.innerHTML = `최저 : ${parseInt(tempMin - 273.15)}&#176;`;
}

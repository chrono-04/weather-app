import { getWeather } from "./weatherApi.js";

async function renderInterface() {
  const weatherContainer = document.querySelector(".weather-container");

  while (weatherContainer.firstChild) {
    weatherContainer.removeChild(weatherContainer.firstChild);
  }

  const input = document.querySelector(".city-input");
  const data = await getWeather();
  const cel = data.main.temp - 273.15;
  const weatherType = document.createElement("h1");
  const weatherDesc = document.createElement("h2");
  const temp = document.createElement("h1");
  const locationName = document.createElement("h2");

  console.log(data.weather[0].main);
  console.log(data.weather[0].description);

  weatherType.textContent = data.weather[0].main;
  weatherDesc.textContent = data.weather[0].description;

  temp.textContent = `${cel.toFixed(2)}°C`;
  locationName.textContent = `${input.value}, ${data.sys.country}`;

  weatherContainer.appendChild(weatherType);
  weatherContainer.appendChild(weatherDesc);
  weatherContainer.appendChild(temp);
  weatherContainer.appendChild(locationName);

  input.value = "";
}

export { renderInterface };

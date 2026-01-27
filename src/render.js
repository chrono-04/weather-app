import { getWeather } from "./weatherApi.js";

async function renderInterface() {
  const weatherContainer = document.querySelector(".weather-container");

  while (weatherContainer.firstChild) {
    weatherContainer.removeChild(weatherContainer.firstChild);
  }

  const input = document.querySelector(".city-input");
  const data = await getWeather();
  const cel = data.main.temp - 273.15;
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");

  h1.textContent = `${cel.toFixed(2)}°C`;
  h2.textContent = `${input.value}, ${data.sys.country}`;

  weatherContainer.appendChild(h1);
  weatherContainer.appendChild(h2);

  input.value = "";
}

export { renderInterface };

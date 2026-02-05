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

  const weatherStatus = data.weather[0].main;
  console.log(weatherStatus);

  const weatherImageContainer = document.querySelector(
    ".weather-image-container",
  );

  switch (weatherStatus) {
    case weatherStatus.includes("Cloud"):
      const img = document.createElement("img");
      img.src = "../images/cloudy.svg";
      img.alt = "cloudy-img";
      weatherImageContainer.appendChild(img);
      break;
    case weatherStatus.includes("Clear"):
      const clearImg = document.createElement("img");
      img.src = "../images/day_clear.svg";
      img.alt = "clear-img";
      weatherImageContainer.appendChild(clearImg);
      break;
  }

  input.value = "";
}

export { renderInterface };

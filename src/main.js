import { renderInterface } from "./render.js";
import { getWeatherForecast } from "./weatherForecast.js";

const findBtn = document.querySelector(".find-btn");
const weatherContainer = document.querySelector(".weather-container");

while (!weatherContainer.firstChild) {
  const h1 = document.createElement("h1");
  h1.textContent = "Search Cities to check weather";
  h1.style.color = "ghostwhite";
  weatherContainer.appendChild(h1);
}

findBtn.addEventListener("click", () => {
  let cityInput = document.querySelector(".city-input");
  cityInput.value = cityInput.value.trim();
  if (cityInput.value === "") {
    alert("Invalid output. Try again.");
    return;
  }

  renderInterface();
});

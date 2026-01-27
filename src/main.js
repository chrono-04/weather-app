import { getWeather } from "./weatherApi.js";

const findBtn = document.querySelector(".find-btn");

findBtn.addEventListener("click", () => {
  let cityInput = document.querySelector(".city-input");
  cityInput.value = cityInput.value.trim();
  if (cityInput.value === "") {
    alert("Invalid output. Try again.");
    return;
  }

  getWeather();
});

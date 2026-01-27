import { getWeather } from "./weatherApi.js";

const findBtn = document.querySelector(".find-btn");

findBtn.addEventListener("click", getWeather);

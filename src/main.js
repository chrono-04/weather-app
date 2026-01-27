import { getGeoLocation } from "./geocodingApi.js";

const findBtn = document.querySelector(".find-btn");

findBtn.addEventListener("click", getGeoLocation);

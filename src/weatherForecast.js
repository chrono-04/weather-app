import { getGeoLocation } from "./geocodingApi.js";

async function getWeatherForecast(lat, lon) {
  const FORECAST_API_KEY = import.meta.env.VITE_FORECAST_API_KEY;
  const API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${FORECAST_API_KEY}`;
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Network response was not ok ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Something went wrong", error);
  }
}

export { getWeatherForecast };

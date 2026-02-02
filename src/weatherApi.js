import { getGeoLocation } from "./geocodingApi.js";
import { getWeatherForecast } from "./weatherForecast.js";

async function getWeather() {
  const location = await getGeoLocation();
  const countryName = location.name;
  const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${WEATHER_API_KEY}`;
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`Network response was not ok ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data);
    const celsius = data.main.temp - 273.15;
    console.log(`Country: ${data.sys.country}`);
    console.log(`City: ${countryName}`);
    console.log(`Temp: ${celsius.toFixed(2)}°C`);

    await getWeatherForecast(location.lat, location.lon);

    return data;
  } catch (error) {
    console.error(`Something went wrong ${error}`);
  }
}

export { getWeather };

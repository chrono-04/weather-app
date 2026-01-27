async function getGeoLocation() {
  const GEO_API_KEY = import.meta.env.VITE_GEOCODING_API_KEY;
  const cityInput = document.querySelector(".city-input");
  try {
    const GEO_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityInput.value}&limit=1&appid=${GEO_API_KEY}`;
    const response = await fetch(GEO_URL);

    if (!response.ok) {
      throw new Error(`Network response was not ok ${response.statusText}`);
    }

    const data = await response.json();
    console.log(data);
    if (data.length > 0) {
      const { lat, lon, name } = data[0];
      return { lat: lat, lon: lon, name: name };
    }
  } catch (error) {
    console.error("Something went wrong", error);
  }
}

export { getGeoLocation };

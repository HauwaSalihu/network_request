const SEARCH_LOCATION = document.getElementById("search");
const SEARCH_BTN = document.getElementById("search-btn");
const LOCATION = document.getElementById("location");
const GET_TEMPERATURE = document.getElementById("temperature");
const GET_TEMPERATURE2 = document.getElementById("temperature1");
const WEATHER_DESC = document.getElementById("description");

SEARCH_BTN.addEventListener("click", async (e) => {
  e.preventDefault();

  const SEARCHLOCATION = SEARCH_LOCATION.value.trim();
  //check if user did not type a city or country name
  if (SEARCHLOCATION.length < 2) {
    alert("please provide city or country  name");
    return;
  }
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=b611c7bedbe941c6a39102608241911&q=${SEARCHLOCATION}&aqi=no`
    );
    const locationData = await response.json(); // Parse the JSON response
    console.log(locationData); // Output the data to verify it
    LOCATION.innerText = locationData.location.name;
    GET_TEMPERATURE.innerText = locationData.current.temp_c;
    GET_TEMPERATURE2.innerText = locationData.current.temp_f;
    WEATHER_DESC.innerHTML = `<p id="description">Description: <span class="placeholder">${locationData.current.condition.text}<img src="${locationData.current.condition.icon}" alt=""></span></p>`;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
});

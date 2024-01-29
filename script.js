const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "7538abdab4mshc4b0be2732ade62p1dc960jsnd35041b884b6",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
  
  // Assuming you have defined these elements in your HTML
  const currentCity = document.getElementById("currentCity");
  const cloud_pct = document.getElementById("cloud_pct");
  const feels_like = document.getElementById("feels_like");
  const humidity = document.getElementById("humidity");
  const max_temp = document.getElementById("max_temp");
  const min_temp = document.getElementById("min_temp");
  const sunrise = document.getElementById("sunrise");
  const sunset = document.getElementById("sunset");
  const temp = document.getElementById("temp");
  const wind_degrees = document.getElementById("wind_degrees");
  const wind_speed = document.getElementById("wind_speed");
  const submit = document.getElementById("submit");
  const cityInput = document.getElementById("city"); // Assuming you have an input field with id "city"
  
let getUnixToNormalTime = (response_time) =>{
let timestamp = response_time;
let date = new Date(timestamp * 1000); // Convert seconds to milliseconds
// Extract the components of the date
let hours = date.getHours();
let minutes = date.getMinutes();

// Determine AM/PM and adjust hours
let period = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12 || 12; // Convert to 12-hour format, 0 becomes 12

// Format the time
let formattedTime = `${hours}:${(minutes < 10 ? '0' : '') + minutes} ${period}`;

return formattedTime;

  }

  const getWeather = (city) => {
      currentCity.innerHTML = city;
      fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
      .then((response) => response.json())
      .then((response) => {
          console.log(response);
          cloud_pct.innerHTML = response.cloud_pct;
          feels_like.innerHTML = response.feels_like;
          humidity.innerHTML = response.humidity;
          max_temp.innerHTML = response.max_temp;
          min_temp.innerHTML = response.min_temp;
          sunrise.innerHTML = getUnixToNormalTime(response.sunrise);
          sunset.innerHTML = getUnixToNormalTime(response.sunset);
          temp.innerHTML = response.temp;
          wind_degrees.innerHTML = response.wind_degrees;
          wind_degrees.style.display="none"
          wind_speed.innerHTML = response.wind_speed;
      })
      .catch((err) => console.log(err));
  };
  
  submit.addEventListener("click", (e) => {
      e.preventDefault();
      getWeather(cityInput.value);
  });
  
  // Initial call to getWeather
  getWeather("Delhi");
  

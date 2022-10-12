// const { convertToHsl } = require("daisyui/src/colors/functions");

let car = "";
let temp = 0;

function getCar () {

  const currentTemp = document.getElementById("current");
  const allInfo = document.getElementById("allinfo");


  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer H6rLmlHtpGSF3tjfCfpVp9HqKbEf7NDQ'
    }
  };
  
  fetch('https://api.tessie.com/5YJ3E1EB2NF128926/state?use_cache=true', options)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      car = response;
      temp = convertToFahrenheit(car.climate_state.inside_temp);

      currentTemp.innerText = `Inside temp is ${temp} degrees`;
      allInfo.innerHTML = `<p><b>${car.display_name}</b> is alive!</p><p>The temperature inside is ${temp}</p>`

      if (temp > 80) {
        currentTemp.classList.add("red");
        currentTemp.innerHTML += "<br><b>It's HOT!</b>"
      } else {
        currentTemp.classList.add("blue");
        currentTemp.innerHTML += "<br>It's very nice inside!"
      }

    }) 
    .catch(err => console.error(err));

}

// get tire pressure

function getTireInfo() {
    console.log("entering tire info");
    const flTire = document.getElementById("fl");
    const frTire = document.getElementById("fr");
    const rlTire = document.getElementById("rl");
    const rrTire = document.getElementById("rr");

    const options = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer H6rLmlHtpGSF3tjfCfpVp9HqKbEf7NDQ'
        }
      };
      
      fetch('https://api.tessie.com/5YJ3E1EB2NF128926/tire_pressure', options)
        .then(response => response.json())
        .then(response => {
          frontLeft = 
          frTire.innerText = `Front left pressure = ${response.front_left * 14.503773773}`;
          flTire.innerText = `Front right pressure = ${response.front_right * 14.503773773}`;
          rlTire.innerText = `rear left pressure = ${response.rear_left * 14.503773773}`;
          rrTire.innerText = `rear right pressure = ${response.rear_right * 14.503773773}`;
        })
        .catch(err => console.error(err));


}

function convertToCelcius(fTemp) {
  return (fTemp -32) * .55;
}
function convertToFahrenheit(cTemp) {
  return (cTemp * 1.8) + 32;
}

function setTemp() {
  // set temp to input value

  const desiredTemp = document.getElementById("tempSelect");


  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer H6rLmlHtpGSF3tjfCfpVp9HqKbEf7NDQ'
    }
  };


  const url = `https://api.tessie.com/5YJ3E1EB2NF128926/command/set_temperatures?retry_duration=40&wait_for_completion=true&temperature=${convertToCelcius(desiredTemp.value)}`;

  // console.log(url);

  fetch(url, options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));

  startClimate();

}

function startClimate() {
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: 'Bearer H6rLmlHtpGSF3tjfCfpVp9HqKbEf7NDQ'
    }
  };
  
  fetch('https://api.tessie.com/5YJ3E1EB2NF128926/command/start_climate?retry_duration=40&wait_for_completion=true', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

    alert("Car is being set to your requested temperature");

}







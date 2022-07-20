const { convertToHsl } = require("daisyui/src/colors/functions");

function getCar () {
    alert("status!");

    const url = "https://api.tessie.com/vehicles?access_token=H6rLmlHtpGSF3tjfCfpVp9HqKbEf7NDQ"

    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));

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

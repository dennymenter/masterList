function getCar () {
    alert("status!");

    const url = "https://api.tessie.com/vehicles?access_token=H6rLmlHtpGSF3tjfCfpVp9HqKbEf7NDQ"

    fetch(url)
    .then(response => response.json())
    .then(data => console.log(data));

}
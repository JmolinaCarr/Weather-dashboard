var apiKey = "05f629a6a4d93216a57d8401030d50a8"
var userFormEl = document.querySelector("#user-form");
var cityName = document.querySelector("#city-name");
var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + apiKey;
var formSubmitHandler = function(event) {
    event.preventDefault();
    console.log(event);
};
document.getElementById("city-name").addEventListener("submit", formSubmitHandler);


fetch(apiUrl).then(function(response) {
    if (response.ok) {
        console.log(response);
        response.json().then (function(data) {
            console.log(data);
        })
    }
})
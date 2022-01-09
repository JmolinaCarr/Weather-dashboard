var apiKey = "05f629a6a4d93216a57d8401030d50a8"
var userFormEl = document.querySelector("#form-input");
var cityInput = document.querySelector("#city-input");
var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + "&appid=" + apiKey;
var city = document.getElementById("city").value;

var formSumbitHandler = function(event){
    event.preventDefault();
    var city = cityInputEl.value.trim();
    if(city){
        getCityWeather(city);
        get5Day(city);
        cities.unshift({city});
        cityInputEl.value = "";
    } else{
        alert("Please enter a City");
    }
    saveSearch();
    pastSearch(city);
}

var saveSearch = function(){
    localStorage.setItem("cities", JSON.stringify(cities));
};

function getWeather(event) {
    event.preventDefault();
}
var getWeather = function(city) {
        
} 

    fetch(apiUrl)
    .then(function(response) {
        response.json().then(function(data) {
            displayWeather(data, city);
        })
    })

    cityInput.addEventListener("submit", formSumbitHandler);
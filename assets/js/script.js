var apiKey = "05f629a6a4d93216a57d8401030d50a8";
var searchHistory = [];
var cityName = cityName
var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + "Houston" + "&appid=" + apiKey;


var button = document.querySelector(".button");
//var inputValue = document.querySelector("");
var name = document.querySelector(".name");



fetch(apiUrl).then(function(response) {
    

    if (response.ok) {
        console.log(response);
        response.json().then (function(data){
            console.log(data);
        })
       
    }
})

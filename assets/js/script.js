$(document).ready(function () {
var apiKey = "05f629a6a4d93216a57d8401030d50a8"
var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#city-name");
var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + "Houston" + "&appid=" + apiKey;


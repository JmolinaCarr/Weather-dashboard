var apiKey = "05f629a6a4d93216a57d8401030d50a8";
var today = moment().format("L");
var searchHistory = [];
var apiUrl = ""


fetch(apiUrl).then(function(respond) {
    if (respond.ok) {
        respond.json().then(function(data) {
            displayIssues(data);
        })
    }
})

for (var i = 0; i <)
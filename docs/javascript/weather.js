var cityInput = ""
var apiKey = "bd18e4fb564236a97392f3596ceede8d"
var tempHigh = 0;
var tempLow = 0;
var chanceOfWeather = ""
var city = ""

function weatherAPI(){
    // fetch weather api 
    let url = "http://api.openweathermap.org/data/2.5/weather?q=Toronto&APPID=bd18e4fb564236a97392f3596ceede8d"
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        console.log(data['weather'][0]['description'])
        tempHigh = conversion(data['main']['temp_max'])
        tempLow = conversion(data['main']['temp_min'])
        city = data['name']
        alert("High of " + tempHigh + " and low of " + tempLow)
        document.querySelector('#city').innerHTML = city
    }).catch(err => alert ('Incorrect city name..'))
}

function populateWeatherImage(){

}

function conversion(val){
    return (val-273).toFixed(1)
}
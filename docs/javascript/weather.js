var cityInput = ""
var apiKey = "bd18e4fb564236a97392f3596ceede8d"
var tempHigh = 0;
var tempLow = 0;
var temp = 0;
var chanceOfWeather = ""
var city = ""
var responseData;
var wind = "";
var directionOfWind = "";

// async method to fetch api during onload
async function awaitFetchWeatherAPI(){
    try{    
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Toronto&APPID=bd18e4fb564236a97392f3596ceede8d`);
        // await to make sure the api call is finished before assigning it to the global scope variable
        const resp = await response.json();
        this.temp = conversion(resp['main']['temp']);
        this.city = resp['name'] + ',' + (resp['sys']['country']);
        this.chanceOfWeather = resp['weather'][0]['description'];
        this.wind = resp['wind']['speed'];
        this.directionOfWind = resp['wind']['deg'];
        console.log(this.temp);
        console.log(resp);
        populateStats();
        return resp;
    }catch(err){
        console.log(err);
    }
}

// fetch method to fetch api during onclick
function weatherAPI(){
    awaitFetchWeatherAPI();
    // fetch weather api 
    let url = "https://api.openweathermap.org/data/2.5/weather?q=Toronto&APPID=bd18e4fb564236a97392f3596ceede8d";
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        console.log(data['weather'][0]['description']);
        tempHigh = conversion(data['main']['temp_max']);
        tempLow = conversion(data['main']['temp_min']);
        temp = conversion(data['main']['temp']);
        city = data['name'];
        populateWeatherImage(temp);
    }).catch(err => alert ('Incorrect city name..'));
    populateStats();
}

function populateWeatherImage(temp){
    console.log(this.temp);
}
function populateStats(){
    document.querySelector('#city').innerHTML = this.city;
    document.querySelector('#temp').innerHTML = "Temp: " + this.temp;
    document.querySelector('#howItlooksLike').innerHTML = "Looking like a chance of " + this.chanceOfWeather;
    document.querySelector('#wind').innerHTML = "wind: " + this.wind + "meter/s. =>" + windDirection(this.directionOfWind);
    document.querySelector('#weatherToday').src = "/images/weather/cloudy.png"
}


function conversion(val){
    return (val-273).toFixed(1)
}

function windDirection(angle){
    var directions = ["North", "North-North-East", "North-East","North-East-East", 
    "East","South-East-East", "South-East", "South-South-East",
    "South","South-South-West", "South-West","South-West-West", 
    "West", "North-West-West", "North-West", "North-North-West"];
    var index = Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 22.5) % 16;
    return directions[index];
}
var cityInput = ""
var apiKey = "bd18e4fb564236a97392f3596ceede8d"
var tempHigh = 0;
var tempLow = 0;
var temp = 0;
var chanceOfWeather = ""
var city = ""
var responseData;

// async method to fetch api during onload
async function awaitFetchWeatherAPI(){
    try{    
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Toronto&APPID=bd18e4fb564236a97392f3596ceede8d`);
        // await to make sure the api call is finished before assigning it to the global scope variable
        const resp = await response.json();
        this.temp = conversion(resp['main']['temp']);
        this.city = resp['name'] + ',' + (resp['sys']['country']);
        this.chanceOfWeather = resp['weather'][0]['description'];
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
    document.querySelector('#temp').innerHTML = this.temp;
    document.querySelector('#howItlooksLike').innerHTML = "Looking like a " + this.chanceOfWeather;
    document.querySelector('#weatherToday').src = "/images/weather/cloudy.png"
}

function conversion(val){
    return (val-273).toFixed(1)
}
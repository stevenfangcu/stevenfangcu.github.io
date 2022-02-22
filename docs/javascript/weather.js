function WeatherAPI(){
    let url = "http://api.openweathermap.org/data/2.5/weather?q=Toronto&APPID=bd18e4fb564236a97392f3596ceede8d"
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Toronto&APPID=bd18e4fb564236a97392f3596ceede8d')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert(data.main.temp);
        alert(data.name);
    });

}
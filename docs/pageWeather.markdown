<script src="/javascript/weather.js"></script>
<link href="/stylesheet/weather.css" rel="stylesheet">

<html lang="en">
    <body onload="awaitFetchWeatherAPI()">
        <h1 id="development">In development</h1>
        <h1 id="city" class="weatherHeader"></h1>
        <div class="container">
            <img src="" id="weatherToday"/>
            <p id="temp" class="weatherBody"></p>
            <p id="howItlooksLike" class="weatherBody"></p>
            <div class="windContainer">
                <p id="wind" class="weatherBody"></p>
                <img src="" id="weatherWindToday"/>
            </div>
        </div>
        <div class="searchContainer">
            <h1 id="searchHeader" class="weatherHeader">Search Weather In A Canadian City Here</h1>
            <div class="autocomplete">
                <input id="cityInput" type="text" placeholder="City.." onkeyup="showResults()"/>
                <button onclick="weatherAPI()">Weather!</button>
                <div id="result"></div>
            </div>
        </div>
    </body>
</html>

<script src="/javascript/weather.js"></script>
<link href="/stylesheet/weather.css" rel="stylesheet">

<html lang="en">
    <body onload="awaitFetchWeatherAPI()">
        <h1 id="city" class="weatherHeader"></h1>
        <div class="container">
            <img src="" id="weatherToday"/>
            <p id="temp" class="weatherBody"></p>
            <p id="howItlooksLike" class="weatherBody"></span>
        </div>
        <button onclick="weatherAPI()">Weather!</button>
    </body>
</html>
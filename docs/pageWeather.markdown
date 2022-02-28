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
            <button onclick="weatherAPI()">Weather!</button>
        </div>
    </body>
</html>
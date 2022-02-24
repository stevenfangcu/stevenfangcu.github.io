<script src="/javascript/weather.js"></script>

<html lang="en">
    <body onload="fetchWeatherAPI()">
        <button onclick="weatherAPI()">Weather!</button>
        <div class="container">
            <p id="city"></p>
            <p id="temp"></p>
            <p id="howItlooksLike"></p>
            <img src="" id="weatherToday"/>
        </div>
    </body>
</html>
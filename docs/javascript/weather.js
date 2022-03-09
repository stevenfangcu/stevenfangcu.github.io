var cityInput = "";
var apiKey = "bd18e4fb564236a97392f3596ceede8d";
var tempHigh = 0;
var tempLow = 0;
var temp = 0;
var forecast = "";
var chanceOfWeather = "";
var city = "";
var responseData;
var wind = "";
var directionOfWind = "";
const cities = ["Airdrie","Grande Prairie","Red Deer" ,"Beaumont","Hanna" ,"St. Albert" ,"Bonnyville" ,"Hinton" ,"Spruce Grove" ,"Brazeau" ,"Irricana" ,"Strathcona County" ,"Breton" ,"Lacombe" ,"Strathmore" ,"Calgary" ,"Leduc" ,"Sylvan Lake" ,"Camrose" ,"Lethbridge" ,"Swan Hills","Canmore","McLennan","Taber","Didzbury","Turner Valley","Drayton Valley","Olds","Vermillion","Edmonton","Onoway","Ft. Saskatchewan","Provost","Medicine Hat",
"Burnaby" ,"Lumby" ,"Port Moody" ,"Cache Creek" ,"Maple Ridge" ,"Prince George" ,"Castlegar" ,"Merritt" ,"Prince Rupert" ,"Chemainus" ,"Mission" ,"Richmond" ,"Chilliwack" ,"Nanaimo" ,"Saanich" ,"Clearwater" ,"Nelson" ,"Sooke" ,"Colwood" ,"New Westminster" ,"Sparwood" ,"Coquitlam" ,"North Cowichan" ,"Surrey" ,"Cranbrook" ,"North Vancouver" ,"Terrace" ,"Dawson Creek" ,"Tumbler" ,"Delta" ,"Osoyoos" ,"Fernie" ,"Parksville" ,"Vancouver" ,"Invermere" ,"Peace River" ,"Vernon" ,"Kamloops" ,"Penticton" ,"Victoria" ,"Kaslo" ,"Port Alberni" ,"Whistler" ,"Langley" ,"Port Hardy",
"Birtle" ,"Flin Flon" ,"Swan River" ,"Brandon" ,"Snow Lake" ,"The Pas" ,"Cranberry Portage" ,"Steinbach" ,"Thompson" ,"Dauphin" ,"Stonewall" ,"Winnipeg", 
,"Cap-Pele" ,"Miramichi" ,"Saint John" ,"Fredericton" ,"Moncton" ,"Saint Stephen" ,"Grand Bay-Westfield" ,"Oromocto" ,"Shippagan" ,"Grand Falls" ,"Port Elgin" ,"Sussex" ,"Memramcook" ,"Sackville" ,"Tracadie-Sheila",
"Argentia" ,"Corner Brook" ,"Paradise" ,"Bishop's Falls" ,"Labrador City" ,"Portaux Basques" ,"Botwood" ,"Mount Pearl" ,"St. John's" ,"Brigus","Yellowknife", 
"Amherst" ,"Hants County" ,"Pictou" ,"Annapolis" ,"Inverness County" ,"Pictou County" ,"Argyle" ,"Kentville" ,"Queens" ,"Baddeck" ,"Richmond" ,"Bridgewater" ,"Lunenburg" ,"Shelburne" ,"Cape Breton" ,"Lunenburg County" ,"Stellarton" ,"Chester" ,"Mahone Bay" ,"Truro" ,"Cumberland County" ,"New Glasgow" ,"Windsor" ,"East Hants" ,"New Minas" ,"Yarmouth" ,"Halifax" ,"Parrsboro",
"Ajax" ,"Halton" ,"Peterborough" ,"Atikokan" ,"Halton Hills" ,"Pickering" ,"Barrie" ,"Hamilton" ,"Port Bruce" ,"Belleville" ,"Hamilton-Wentworth" ,"Port Burwell" ,"Blandford-Blenheim" ,"Hearst" ,"Port Colborne" ,"Blind River" ,"Huntsville" ,"Port Hope" ,"Brampton" ,"Ingersoll" ,"Prince Edward" ,"Brant" ,"James" ,"Quinte West" ,"Brantford" ,"Kanata" ,"Renfrew" ,"Brock" ,"Kincardine" ,"Richmond Hill" ,"Brockville" ,"King" ,"Sarnia" ,"Burlington" ,"Kingston" ,"Sault Ste. Marie" ,"Caledon" ,"Kirkland Lake" ,"Scarborough" ,"Cambridge" ,"Kitchener" ,"Scugog" ,"Chatham-Kent" ,"Larder Lake" ,"Chesterville" ,"Leamington" ,"Smiths Falls" ,"Clarington" ,"Lennox-Addington" ,"South-West Oxford" ,"Cobourg" ,"Lincoln" ,"St. Catharines" ,"Cochrane" ,"Lindsay" ,"St. Thomas" ,"Collingwood" ,"London" ,"Stoney Creek" ,"Cornwall" ,"Stratford" ,"Cumberland" ,"Markham" ,"Sudbury" ,"Deep River" ,"Temagami" ,"Dundas" ,"Merrickville" ,"Thorold" ,"Durham" ,"Milton" ,"Thunder Bay" ,"Dymond" ,"Nepean" ,"Tillsonburg" ,"Ear Falls" ,"Newmarket" ,"Timmins" ,"East Gwillimbury" ,"Niagara" ,"Toronto" ,"East Zorra-Tavistock" ,"Niagara Falls" ,"Uxbridge" ,"Elgin" ,"Niagara-on-the-Lake" ,"Vaughan" ,"Elliot Lake" ,"North Bay" ,"Wainfleet" ,"Flamborough" ,"North Dorchester" ,"Wasaga Beach" ,"Fort Erie" ,"North Dumfries" ,"Waterloo" ,"Fort Frances" ,"North York" ,"Waterloo" ,"Gananoque" ,"Norwich" ,"Welland" ,"Georgina" ,"Oakville" ,"Wellesley" ,"Glanbrook" ,"Orangeville" ,"West Carleton" ,"Gloucester" ,"Orillia" ,"West Lincoln" ,"Goulbourn" ,"Osgoode" ,"Whitby" ,"Gravenhurst" ,"Oshawa" ,"Wilmot" ,"Grimsby" ,"Ottawa" ,"Windsor" ,"Guelph" ,"Ottawa-Carleton" ,"Woolwich" ,"Haldimand-Norfork" ,"Owen Sound" ,"York",
"Alberton" ,"Montague" ,"Stratford" ,"Charlottetown" ,"Souris" ,"Summerside" ,"Cornwall",
"Alma" ,"Fleurimont" ,"Longueuil" ,"Amos" ,"Gaspe" ,"Marieville" ,"Anjou" ,"Gatineau" ,"Mount Royal" ,"Aylmer" ,"Hull" ,"Montreal" ,"Beauport" ,"Joliette" ,"Montreal Region" ,"Bromptonville" ,"Jonquiere" ,"Montreal-Est" ,"Brosssard" ,"Lachine" ,"Quebec" ,"Chateauguay" ,"Lasalle" ,"Saint-Leonard" ,"Chicoutimi" ,"Laurentides" ,"Sherbrooke" ,"Coaticook" ,"LaSalle" ,"Sorel" ,"Coaticook" ,"Laval" ,"Thetford Mines" ,"Dorval" ,"Lennoxville" ,"Victoriaville" ,"Drummondville" ,"Levis",
"Avonlea" ,"Melfort" ,"Swift Current" ,"Colonsay" ,"Nipawin" ,"Tisdale" ,"Craik" ,"Prince Albert" ,"Unity" ,"Creighton" ,"Regina" ,"Weyburn" ,"Eastend" ,"Saskatoon" ,"Wynyard" ,"Esterhazy" ,"Shell Lake" ,"Yorkton" ,"Gravelbourg", 
,"Carcross","Whitehorse"]; 

// async method to fetch api during onload
async function awaitFetchWeatherAPI(){
    try{    
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Toronto&APPID=bd18e4fb564236a97392f3596ceede8d`);
        // await to make sure the api call is finished before assigning it to the global scope variable
        const resp = await response.json();
        this.temp = conversion(resp['main']['temp']);
        this.city = resp['name'] + ',' + (resp['sys']['country']);
        this.forecast = resp['weather'][0]['main'];
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
    // fetch weather api
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${document.getElementById("cityInput").value}&APPID=bd18e4fb564236a97392f3596ceede8d`;
    document.getElementById("cityInput").value = "";
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        this.temp = conversion(data['main']['temp']);
        this.city = data['name'];
        this.forecast = data['weather'][0]['main'];
        this.chanceOfWeather = data['weather'][0]['description'];
        this.wind = data['wind']['speed'];
        this.directionOfWind = data['wind']['deg'];
        populateStats();
    }).catch(err => alert(err));
}

function populateWeatherImage(){
    console.log(this.temp);
    findTerm();
}
const findTerm = () => {
    document.querySelector('#weatherToday').src = `/images/weather/${this.forecast}.png`;
}
function populateStats(){
    document.querySelector('#city').innerHTML = `${this.city}`;
    document.querySelector('#temp').innerHTML = `Temperature: ${this.temp}`;
    document.querySelector('#howItlooksLike').innerHTML = `Looking like a ${this.chanceOfWeather} (${this.forecast})`;
    document.querySelector('#wind').innerHTML = `wind: ${this.wind} m/s. ${windDirection(this.directionOfWind)}`;
    document.querySelector('#weatherWindToday').src = "/images/weather/arrow.png";
    document.querySelector('#weatherToday').src = "/images/weather/Clouds.png";
    populateWeatherImage();
}

// conversion from Kelvin to Degrees
function conversion(val){
    return (val-273).toFixed(1);
}
// converting direction from degrees to user readable
function windDirection(angle){
    var directions = ["North", "North-North-East", "North-East","North-East-East", 
    "East","South-East-East", "South-East", "South-South-East",
    "South","South-South-West", "South-West","South-West-West", 
    "West", "North-West-West", "North-West", "North-North-West"];
    var index = Math.round(((angle %= 360) < 0 ? angle + 360 : angle) / 22.5) % 16;
    console.log(`${angle+90}`);
    document.querySelector('#weatherWindToday').style.transform = `rotate(${angle+270}deg)`;
    return directions[index];
}

function autocompleteMatch(val){
    let input = document.getElementById("cityInput").value;
    if(input == ''){
        return [];
    }
    var reg = new RegExp(input)
    return cities.filter(function(city){
        if (city.match(reg)){
            return city;
        }
    });
}

function showResults(){
    let val = document.getElementById("cityInput").value;
    res = document.getElementById("result");
    res.innerHTML = '';
    let list = '';
    let cities = autocompleteMatch(val);
    for(i = 0; i < cities.length; i++){
        list += '<li class="cityList" onclick="citySelected(this.innerHTML)">' + cities[i] + '</li>';
    }
    res.innerHTML = list;
}

function citySelected(element){
    document.getElementById("cityInput").value = element;
    res.innerHTML = "";
}
//declare variables

var city1 = "Harare";
var city2 = "Vegas";
var city3 = "New York";
var city4 = "Manchester";
var cityList = [city1, city2, city3, city4];
var headers = ['city1Heading','city2Heading','city3Heading','city4Heading'];
var contents = ['city1Content','city2Content','city3Content','city4Content'];


var APIKey = "d8926c329c46bea9981415f94627872b";

//var queryURL2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;


async function weatherMe(num) {
    var city = cityList[num];
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

    // fetch from API
    const response = await fetch(queryURL);
    const weatherInfo = await response.json();
    //console.log(weatherInfo);

    // update our content
    var header = document.getElementById(headers[num]);
    var content = document.getElementById(contents[num]);
    header.innerHTML = cityList[num];
    content.innerHTML = weatherInfo.weather[0].description;

}

for (let index = 0; index < cityList.length; index++) {
    weatherMe(index);
    
}
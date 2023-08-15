var input=document.getElementById("input")
var btn=document.getElementById("btn")
var weather_img=document.getElementById("weather-img")
var temp=document.getElementById("temp")
var description=document.getElementById("description")
var humdity=document.getElementById("humidity")
var wind=document.getElementById("wind")
var notfound=document.getElementById("notfound")
var info=document.getElementById("info")



// weather api
async function checkWeather(city){
const api_key="3a72584747a39498b21c513114ba5a8f";
const url=`https://api.openweathermap.org/data/2.5/weather?q=
${city}&appid=${api_key}`;


const weather_data=await fetch(`${url}`).then(response=>
     response.json());

    //  not found js code
if(weather_data.cod === `404`){


notfound.style.display="flex";
info.style.display="none";
return;

}

notfound.style.display="none";
info.style.display="flex";





//  weather informations
temp.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`;

description.innerHTML=`${weather_data.weather[0].description}`;

humdity.innerHTML=`${weather_data.main.humidity}%`;

wind.innerHTML=`${weather_data.wind.speed}Km/H`;




// for image chanages according to weather condition 
switch(weather_data.weather[0].main){
case 'Clouds':
    weather_img.src="cloud.png";
    break;

    case 'Clear':
    weather_img.src="clear.png";
    break;


    case 'Mist':
    weather_img.src="mist.png";
    break;


    case 'Rain':
    weather_img.src="rain.png";
    break;


    case 'Snow':
    weather_img.src="snow.png";
    break;

}
}

btn.addEventListener('click',()=>{
checkWeather(input.value);
})
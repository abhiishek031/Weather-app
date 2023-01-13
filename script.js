let weather={
    apiKey:"4d247322b986aebfe20e4d5f8dcbe063",
    fetchWeather:function(city)
    {
        fetch(
            /*"https://api.openweathermap.org/data/2.5/weather?q="
            +city
            +state
            +country
            +"&units=metric&appid="
            +this.apiKey*/
        "https://api.openweathermap.org/data/2.5/weather?q="
        + city
        + "&units=metric&appid="
        +this.apiKey
        )
        .then((response)=>response.json())
        .then((data)=>this.displayWeather(data));
},
displayWeather:function(data){
const{name}=data;
const{icon,description}=data.weather[0];
const{temp,humidity}=data.main;
const{speed}=data.wind;
console.log(name,icon,description,temp,humidity,speed);
document.querySelector(".city").innerText="weather in "+ name;
//document.querySelector(".icon").src=
//"http://openweathermap.org/img/wn/"+icon+".png";
document.querySelector(".description").innerText=description;
document.querySelector('.temp').innerText= temp +"°C";
document.querySelector(".humidity").innerText="Humidity :"+ humidity +"%";
document.querySelector(".wind").innerText="Wind speed :"+ speed+"km/h";
document.querySelector(".weather").classList.remove("loading");
document.body.style.backgroundImage="url('http://source.unsplash.com/1600x900/?" +  name+"')"
},
//search 
search:function(){
    this.fetchWeather(document.querySelector(".search-bar").value);
},
};
document.querySelector(".search button").addEventListener("click",function(){
weather.search();
});
// enter key
document.querySelector(".search button").addEventListener("keyup",function(event){
if(event.key=="Enter"){
    weather.search();
}   
});

//4d247322b986aebfe20e4d5f8dcbe063"
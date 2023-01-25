const key='bd49af6876da10912fe050bf1ade6546';


const getWeather= async(city)=>{
    let url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    const response=  await fetch(url);
    const data=  await response.json();
    if(data.cod!='200'){
        alert("Enter a valid city name");
    }else{
        console.log(data);
        displayContent(data);
    }
      return;
}

let button= document.getElementById('btn')
button.addEventListener('click',()=>{
    const input = document.getElementById('val');
    getWeather(input.value);
})

const displayContent=(data)=>{
     
    document.getElementById('icon').innerHTML=`<img src=" http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>`
    document.getElementById('tempmaxval').innerHTML=`<h2>${data.main.temp_max} °C</h2>`
    document.getElementById('tempminval').innerHTML=`<h2>${data.main.temp_min} °C</h2>`
    document.getElementById('desc').innerHTML=`<h2>${data.weather[0].description}</h2>`
    document.getElementById('wind-speed').innerHTML=`<h2> Wind Speed: ${data.wind.speed}</h2>`
    document.getElementById('lon').innerHTML = `<h4>Longitude: ${data.coord.lon}</h4>`
    document.getElementById('lat').innerHTML = `<h4>Latitude: ${data.coord.lat}</h4>`
    document.getElementById('humid').innerHTML = `<h2>Humidity: ${data.main.humidity}</h2>`
    document.getElementById('t-zone').innerHTML = `<h4>Time Zone: ${data.timezone}</h4>`
}
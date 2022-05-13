
//https://api.openweathermap.org/data/2.5/weather?q=kutaisi&appid=da76c1c35611ef9c92978b269ea549fc&units=metric

//https://openweathermap.org/img/wn/01d@2x.png?fbclid=IwAR2H4LuzN2hG_Zqf6QevzObtrH5KYPLk3UtJ8F-UhyNaqouIximmCThXB24




/* fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=da76c1c35611ef9c92978b269ea549fc&units=metric`)
.then(res => res.json())
.then(data => {
    tempDOM.textContent = data.main.temp
}); */


const formDOM = document.getElementById('form');
const cityDOM = document.getElementById('city');
const nameDOM = document.getElementById('name');
const countryDOM = document.getElementById('country');
const tempDOM = document.getElementById('temp');
const windDOM = document.getElementById('wind');
const humidityDOM = document.getElementById('humidity');
const pressureDOM = document.getElementById('pressure');

const mainDOM = document.getElementById('main');
const descriptionDOM = document.getElementById('description');




const weatherAPP = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=da76c1c35611ef9c92978b269ea549fc&units=metric`)
        const result = await response.json();

        nameDOM.textContent = "City: " + result.name;
        countryDOM.textContent = "Country: " + result.sys.country;
        tempDOM.textContent = result.main.temp + " °C";
        windDOM.textContent = "Wind: " + result.wind.speed + " Km/h";     
        humidityDOM.textContent = "Humidity: " + result.main.humidity; 
        pressureDOM.textContent = "Pressure: " + result.main.pressure;         
        mainDOM.textContent = "Main: " + result.weather[0].main;
        descriptionDOM.textContent = "Descriprion: " + result.weather[0].description; 
        
        
     
    } catch (error) {
        alert(error)
    } 

    const arr = JSON.parse(localStorage.getItem('city')) || [];
    arr.indexOf(city) == -1 ? arr.push(city) : null;
    localStorage.setItem('city', JSON.stringify(arr));
}

formDOM.addEventListener('submit', e => {
    e.preventDefault();
    cityDOM.value && weatherAPP(cityDOM.value);   
});








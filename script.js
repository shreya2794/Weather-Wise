const button= document.getElementById("search_button");
const input= document.getElementById("city_input");

const cityName= document.getElementById('city-name')
const cityTime=document.getElementById('city-time');
const cityTempinC= document.getElementById('city-temp-celsius');
const cityTempinF= document.getElementById('city-temp-fahrenheit');

async function getData(cityName) {
    const promise = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=70ed0380dadf464882282728251102&q=${cityName}&aqi=yes`
    );
    return await promise.json(); //as returning a promise so add await (json returns promise)(fetch returns promise which is response object (readable stream))
}

button.addEventListener("click",async() => {
    const value=input.value;
    const result=await getData(value);//(this will also return a promise so use await and async at start)
    cityName.innerText = `${result.location.name}, ${result.location.region}- ${result.location.country}`;
    cityTime.innerText = `${result.location.localtime}`;
    cityTempinC.innerText = `${result.current.temp_c}°C`;
    cityTempinF.innerText = `${result.current.temp_f}°F`;
});

// textContent
// Returns all text inside the element, even if it's hidden with CSS (display: none).
// Faster because it doesn’t check styles.
// Ignores HTML formatting.

// innerText
// Returns only visible text, ignoring hidden elements.
// Slower because it checks CSS styles.
// Ignores HTML formatting.
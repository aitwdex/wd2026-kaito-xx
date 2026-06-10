import {cities, weather } from "./weatherLib.js";

const btn = document.getElementById("weatherBtn");
const result = document.getElementById("result");
const citySelect = document.getElementById("citySelect");

btn.addEventListener("click", async () => {

    const cityKey = citySelect.value;
    const city = cities[cityKey];

    const url =

        `https://api.open-meteo.com/v1/forecast` +
        `?latitude=${city.lat}` +
        `&longitude=${city.lon}` +
        `&current_weather=true`;

        result.innerHTML = "取得中...";

    try{
        // fetchでAPI通信
        const response = await fetch(url);

        // JSONへ変換
        const data = await response.json();
        const temp = data.current_weather.temperature;
        const wind = data.current_weather.windspeed;
        const code = data.current_weather.weathercode;

        result.innerHTML = 
        `
            <h3>${city.name}</h3>
            <p>気温: ${temp} ℃</p>
            <p>風速: ${wind} km/h</p>
            <p>天気: ${weather(code)}</p>
        `;
    }
        
    catch(error){
        result.innerHTML = `
            <p class="text-danger">
                データ取得失敗
            </p>
        `;
    }
});
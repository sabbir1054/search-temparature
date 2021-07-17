let cityName = document.getElementById('city-name');
let btn = document.getElementById('search');
let conditionEl = document.getElementById('condition');
let temperature = document.getElementById('temp');

btn.addEventListener('click', function () {
    //call api
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=62bf16fa111bda17a889ef15caef9678`)
        .then(res => res.json())
        .then(data => {
            //take data in variable
            let fTemp = (data.main.temp);
            let cTemp = (fTemp - 273.15).toFixed(2);
            let cond = (data.weather[0].main)
        

            //Show in display
            temperature.innerText=(cTemp)+" C";
            conditionEl.innerText = cond;
        })
})
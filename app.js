const apiKey = '566313726a8b5ff069eb30fc77ccaef5'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

let temp = document.querySelector('.temp')
let city = document.querySelector('.city')

let humidity = document.querySelector('.humid-perc')
let windSpeed = document.querySelector('.speed')

let searchInput = document.getElementById('search-input')
let searchBtn = document.querySelector('.search-btn')


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    let data = await response.json()

    city.textContent = data.name
    temp.textContent = Math.floor(data.main.temp)+'°C'
    humidity.textContent = `${data.main.humidity}%`
    windSpeed.textContent = `${data.wind.speed}km/h`

    console.log(data);
}


// checkWeather()
searchBtn.addEventListener('click',()=>{
    checkWeather(searchInput.value)
    console.log(searchInput.value);
})


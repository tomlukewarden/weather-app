const api_key = '6e2dced305956e592a7222c3c987e4dc'
const api_url = 'https://api.openweathermap.org/data/3.0/onecall?'

export const getWeatherData = (lat, lon) => {
    const url = api_url + 'lat=' + lat + '&lon=' + lon + '&appid=' + api_key
    return fetch(url)
}


city = document.getElementById('city')
country = document.getElementById('country')

city.addEventListener('submit', (e) => {
    e.preventDefault()
    getWeatherData(city.value, country.value)
        .then((response) => response.json())
        .then(data => console.log(data))
})


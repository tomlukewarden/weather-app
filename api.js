const api_key = '6e2dced305956e592a7222c3c987e4dc';
const api_url = 'https://api.openweathermap.org/data/2.5/weather';

const getWeatherData = (city, country) => {
    const url = `${api_url}?q=${city},${country}&appid=${api_key}&units=metric`;
    return fetch(url);
};

document.addEventListener('DOMContentLoaded', () => {
    const cityInput = document.getElementById('city');
    const countryInput = document.getElementById('country');
    const form = document.getElementById('weather-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const city = cityInput.value;
        const country = countryInput.value;
        getWeatherData(city, country)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data); 
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Failed to fetch weather data. Please try again.');
            });
    });
});

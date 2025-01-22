# Weather App

This is a small web application that fetches and displays weather information for a given city and country. The project was created in an evening as a way to practice and maintain web development skills.

---

## Features

- Search for weather information by entering a city and country.
- Displays key weather details, including:
  - Temperature
  - Weather description
  - Wind speed
  - Humidity
  - Pressure
  - Cloudiness
- Dynamically updates the weather information using the OpenWeatherMap API.
- Includes weather-specific icons for a better user experience.
- Built with Bootstrap 5 for responsive and clean design.

---

## Technologies Used

- **HTML5**: Markup structure for the web app.
- **CSS3**: Custom styles for layout and appearance.
- **JavaScript**: Logic for fetching and displaying weather data.
- **Bootstrap 5**: Responsive styling and layout.
- **OpenWeatherMap API**: Source for real-time weather data.

---

## Setup and Usage

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```

2. Open the project directory:
   ```bash
   cd weather-app
   ```

3. Replace the `api_key` in the `script.js` file with your own OpenWeatherMap API key:
   ```javascript
   const api_key = "your_api_key_here";
   ```

4. Open the `index.html` file in your browser to use the app.

---

## File Structure

```md
weather-app/
├── index.html          # Main HTML file
├── style.css           # Custom CSS styles
├── script.js           # JavaScript logic for the app
├── assets/             # Weather icons (e.g., clear.png, rain.png)
└── README.md           # Documentation
```

---

## Future Enhancements

- Add support for geolocation to fetch weather for the user's current location.
- Improve error handling for invalid city or country inputs.
- Enhance the design with more advanced CSS animations.
- Add a feature to display a 7-day weather forecast.

---

## Acknowledgements

- [OpenWeatherMap API](https://openweathermap.org/api) for providing the weather data.
- [Bootstrap](https://getbootstrap.com/) for the CSS framework.

---

### Author
Created by Thomas Warden as a quick and fun way to sharpen web development skills.


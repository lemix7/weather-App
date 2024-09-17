# Weather App

A simple Weather App built using **HTML**, **CSS**, and **JavaScript**, with weather data fetched from a public **API**.

## Features
- Fetches current weather data for any city using a weather API.
- Displays temperature, weather conditions (e.g., sunny, rainy), humidity, and wind speed.
- Provides weather icons based on the current conditions (e.g., sun, clouds, rain).
- User can search for weather updates in different cities.


## Tech Stack
- **HTML**: Structure of the application.
- **CSS**: Styling and layout of the application.
- **JavaScript**: Functionality, including API calls and dynamic content updates.
- **Weather API**: Used to fetch live weather data.

## Installation and Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app

   
## API Setup
This app uses a weather API like [OpenWeatherMap](https://openweathermap.org/) or any similar service. To get the app working, follow these steps:

1. **Sign up** at the weather API provider (e.g., OpenWeatherMap) and get your free API key.
2. **Insert the API key** in your JavaScript file:<br/>
   ```javascript
   const apiKey = 'your-api-key-here';

## How It Works
- **Search for a City**: The user enters a city name, and the app fetches weather data for that location.
- **API Call**: The app sends a request to the weather API using the city name, and retrieves data such as temperature, weather description, and wind speed.
- **Display Weather**: The weather data is dynamically displayed on the page, including an appropriate weather icon.

## Screenshots <br/>
![Screenshot 2024-09-17 at 11 53 22 AM](https://github.com/user-attachments/assets/6c2a0f35-86b6-442c-87e1-c3fe78f3674a)



## Live Demo
[Live Demo](https://weather-le.netlify.app/)

## Future Enhancements
- Add support for hourly or weekly weather forecasts.
- Implement geolocation to automatically detect the user's current location.
- Add weather animations for a better user experience.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

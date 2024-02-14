import React, { useState, useEffect } from 'react';

const ForecastingSec = ({ city }) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Get city coordinates using OpenWeatherMap's Geocoding API
                const geoResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`);
                const geoData = await geoResponse.json();

                // Use latitude and longitude to make the one call API for daily forecast
                const lat = geoData.coord.lat;
                const lon = geoData.coord.lon;
                const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${process.env.REACT_APP_API_KEY}`);
                const weatherData = await weatherResponse.json();

                // Extract the next 8 days' data, convert temperature to Celsius, and add plus/minus sign
                const next8Days = weatherData.daily.slice(0, 9).map(day => ({
                    temp: day.temp.day > 273.15 ? `+${Math.round(day.temp.day - 273.15)}` : Math.round(day.temp.day - 273.15), // Add plus/minus sign
                    date: new Date(day.dt * 1000).toLocaleDateString()
                }));
                setDailyData(next8Days);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchData();
    }, [city]);

    return (
        <div className='forSec'>
            <h1>{city}</h1>
            <div className='flags'>
                {dailyData.map((day, index) => (
                    <div key={index} className='flag'>
                        <h3>{day.temp}&deg;C</h3>
                        <h3>{day.date}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ForecastingSec;

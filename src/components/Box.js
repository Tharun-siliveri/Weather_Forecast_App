import React, { useEffect, useState } from 'react';

const Box = ({ city }) => {
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [temp, setTemp] = useState(0);
    const [humidity, setHumidity] = useState('');
    const [wind, setWind] = useState('');
    const [precipitation, setPrecipitation] = useState('');

    useEffect(() => {
        // Function to fetch weather data
        const fetchWeatherData = async () => {
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
                );
                const data = await response.json();

                // Format date
                const currentDate = new Date().toLocaleDateString();

                setDate(currentDate);
                setTemp(Math.round(data.main.temp - 273.15));
                setHumidity(`${data.main.humidity}%`);
                setPrecipitation(data.weather[0].main);
                const windSpeedKmh = Math.round(data.wind.speed * 3.6); // Convert m/s to km/h
                setWind(`${windSpeedKmh} km/h`);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        // Function to update time every second
        const updateTime = () => {
            const currentTime = new Date().toLocaleTimeString();
            setTime(currentTime);
        };

        // Initial fetch
        fetchWeatherData();

        // Set interval to update time every second
        const intervalId = setInterval(updateTime, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, [city]);

    return (
        <div className='box'>
            <div className='date'>
                <h3>Today</h3>
                <h3>{time}</h3>
                <p>{date}</p>
            </div>
            <div>
                <h1>{temp > 0 ? `+${temp}` : temp}&deg;C</h1>
                <h2>{city}</h2>
                <p>Humidity: {humidity}</p>
                <p>Wind: {wind}</p>
                <p>Precipitation: {precipitation}</p>
            </div>
        </div>
    );
};

export default Box;

import React, { useState, useEffect } from 'react';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';

const WeatherForecastSection = () => {
    const cityNames = ['Tirupati', 'Bangalore', 'Delhi', 'New york', 'London'];
    const [weatherData, setWeatherData] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const results = await Promise.all(cityNames.map(async (cityName) => {
                    try {
                        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`);
                        const data = await response.json();

                        if (data.cod === '404') {
                            return {
                                place: `City ${cityName} not found`,
                                country: '',
                                temp: null,
                                humidity: ''
                            };
                        } else {
                            return {
                                place: data.name,
                                country: data.sys.country,
                                temp: Math.round(data.main.temp - 273.15),
                                humidity: `${data.main.humidity}%`
                            };
                        }
                    } catch (err) {
                        return {
                            place: `An error occurred while fetching data for ${cityName}`,
                            country: '',
                            temp: null,
                            humidity: ''
                        };
                    }
                }));

                setWeatherData(results);
                setError('');
            } catch (err) {
                setError('An error occurred while fetching weather data.');
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures that the effect runs only once on mount

    const images = [img1, img2, img3, img4, img5];

    return (
        <div className='weaForSec'>
            <h1>Weather whatever Forecast</h1>
            <div className='cards'>
                {weatherData.map((data, index) => (
                    <div key={index} className='card'>
                        <div className='img'>
                            <img src={images[index]} alt="image" />
                            <div>{(data.temp !== null && data.temp > 0 ? '+' : '')}{data.temp}&deg;C</div>
                        </div>
                        <div>{data.place}</div>
                    </div>
                ))}
            </div>
            {error && <p>{error}</p>}
        </div>
    );
};

export default WeatherForecastSection;

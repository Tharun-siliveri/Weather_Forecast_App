import React from 'react';
import Form from './Form';
import WeatherForecastSection from './WeatherForecastSection';
import ForecastingSec from './ForecastingSec';
const RightPage = ({ search, setSearch, handleSubmit, city }) => {

    return (
        <div className='right'>
            <Form search={search} setSearch={setSearch} handleSubmit={handleSubmit} />
            <WeatherForecastSection />
            <ForecastingSec city={city} />
        </div>
    )
}

export default RightPage
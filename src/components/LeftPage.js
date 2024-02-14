import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { faMap } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import Box from './Box';

const LeftPage = ({ city }) => {
    return (
        <div className='left'>
            <div className='title'>
                <h2><FontAwesomeIcon icon={faCloud} style={{ color: "red", }} />&nbsp;METEOROLOG</h2>
            </div>
            <div className='sideList'>
                <div className='listItems'>
                    <FontAwesomeIcon icon={faSquare} />
                    <h3>Dashboard</h3>
                </div>
                <div className='listItems'>
                    <FontAwesomeIcon icon={faChartSimple} />
                    <h3>Statistics</h3>
                </div>
                <div className='listItems'>
                    <FontAwesomeIcon icon={faMap} />
                    <h3>Map</h3>
                </div>
                <div className='listItems'>
                    <FontAwesomeIcon icon={faCalendarDays} />
                    <h3>Calendar</h3>
                </div>
                <div className='listItems'>
                    <FontAwesomeIcon icon={faGear} />
                    <h3>Settings</h3>
                </div>
            </div>
            <Box city={city} />
        </div>
    )
}

export default LeftPage;

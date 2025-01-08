import React from 'react';
import dayImage from './day.jpg';
import eveningImage from './evening.jpg';
import nightImage from './night.jpg';
import './Greeting.css';

const Greeting = () => {
    let greetingText = '';
    let greetingImage = '';

    const currentHour = new Date().getHours(); // Get the current hour


    if (currentHour >= 6 && currentHour < 12) {
        greetingText = 'Good morning';
        greetingImage = dayImage;
    }
    else if (currentHour >= 12 && currentHour < 18) {
        greetingText = 'Good afternoon';
        greetingImage = eveningImage;
    }
    else if (currentHour >= 18 && currentHour < 24) {
        greetingText = 'Good evening';
        greetingImage = nightImage;
    }
    else {
        greetingText = 'Good night';
        greetingImage = nightImage;
    }
    return (
        <div className="greeting">
            <img src={greetingImage} alt="greeting" />
            <h1>{greetingText}</h1>
        </div>
    );
}

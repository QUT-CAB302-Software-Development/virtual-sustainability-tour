import React from 'react';
import '../App.css';
import './cards.css';

function Cards() {
    return (
        <div className='card-container'>
        <h3 className='slogan'>Travel green, Go green, Keep the earth clean for a better tomorrow!</h3>
            <div className='card-1'>
                <img className='card-1-img' alt="City"></img>
                <h1>VIRTUALITY</h1>
                <p>Explore the world from your own place with our immersive virtual tours. Visit new places and cultures without leaving your home!</p>
            </div>
        </div>
    )
}

export default Cards;
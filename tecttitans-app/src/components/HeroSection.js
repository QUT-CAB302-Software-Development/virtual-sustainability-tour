import React from 'react';
import '../App.css'
import './HeroSection.css';
import {Button} from "./Button";
import hero from './HeroSection.css'

function HeroSection() {
    return (

        <div className='hero-container'>
            <img src={hero} alt=""/>

            <h1> TECHTITANS VIRTUAL SUSTAINABLE TOUR</h1>
            <p>Experience more green accommodation from the comfort of your couch</p>
            <div className="hero-btn">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    EXPLORE NOW!
                </Button>
            </div>
        </div>
    );

}
export default HeroSection;
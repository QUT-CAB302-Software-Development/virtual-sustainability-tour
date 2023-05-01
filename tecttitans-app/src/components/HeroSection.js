import React from 'react';
import '../App.css'
import './HeroSection.css';
import {Button} from "./Button";
import hero from './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container global-padding space-small'>
            <img src={hero} alt=""/>
            <h1 className = 'space-small'>TechTitans Virtual Sustainable Tour</h1>
            <p>Experience Brisbane Sustainability from your own couch</p>
            <div className="hero-btn">
                <div className = 'space-small'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Explore tour
                </Button>
                </div>
            </div>
        </div>
    );

}
export default HeroSection;
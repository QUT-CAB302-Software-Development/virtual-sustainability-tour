import React from 'react';
import '../App.css'
import './HeroSection.css';
import {Button} from "./Button";
import hero from './HeroSection.css'
import {Link} from 'react-router-dom';

function HeroSection() {
    return (

        <div className='hero-container'>
            <img src={hero} alt=""/>

            <h1> TECHTITANS VIRTUAL SUSTAINABLE TOUR</h1>
            <p>Experience more green accommodation from the comfort of your couch</p>
            <div className="hero-btn">
            <Link to='/tour' className='btn-mobile'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    EXPLORE NOW!
                </Button>
            </Link>
            </div>
        </div>
    );

}
export default HeroSection;
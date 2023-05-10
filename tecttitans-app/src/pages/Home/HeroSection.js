import React from 'react';
import '../../App.css'
import './HeroSection.css';
import {Button} from "../../components/Button";
import hero from './HeroSection.css'
import {Link} from 'react-router-dom';

function HeroSection() {
    return (
        <div className='hero-container global-padding space-small'>
            <img src={hero} alt=""/>
            <h1 className = 'space-small'>TechTitans Virtual Sustainable Tour</h1>
            <p>Experience Brisbane Sustainability from your own couch</p>
            <div className="hero-btn">
                <div className = 'space-small'>
                <Link to='/tour'>
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                    Explore tour
                </Button>
                </Link>
                </div>
            </div>
        </div>
    );

}
export default HeroSection;
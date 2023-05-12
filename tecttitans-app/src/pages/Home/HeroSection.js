import React from 'react';
import {Button} from "../../components/Button";
import hero from './HeroSection.css'
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../App.css'
import './HeroSection.css';

function HeroSection() {
    return (
        <motion.div
            className='hero-container global-padding space-small'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
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
        </motion.div>
    );

}
export default HeroSection;
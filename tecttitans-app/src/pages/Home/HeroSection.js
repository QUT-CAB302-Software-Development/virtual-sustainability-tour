import React, { useState, useEffect } from 'react';
import {Button} from "../../components/Button";
import hero from './HeroSection.css'
import {Link} from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../App.css'
import './HeroSection.css';

const LoopingTypingHeading = ({ texts }) => {
    const [textIndex, setTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTextIndex((textIndex + 1) % texts.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, [textIndex, texts.length]);

    useEffect(() => {
        const typingIntervalId = setInterval(() => {
            const textToType = texts[textIndex];
            const newText = textToType.substring(0, currentText.length + 1);
            setCurrentText(newText);

            if (newText === textToType) {
                clearInterval(typingIntervalId);

                // Start the 10-second timeout
                setTimeout(() => {
                    setCurrentText('');
                }, 10000);
            }
        }, 100);

        return () => clearInterval(typingIntervalId);
    }, [currentText, textIndex, texts]);

    return (
        <h1 className="typing-heading">
            {currentText}
            <span className="typing-cursor">|</span>
        </h1>
    );
};
function HeroSection() {
    const texts = ['TechTitans Virtual Sustainable Tour'];
    return (
        <motion.div
            className='hero-container global-padding space-small'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <img src={hero} alt=""/>
            <LoopingTypingHeading texts={texts} />
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
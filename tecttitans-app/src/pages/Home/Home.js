import React from 'react';
import { motion } from 'framer-motion';
import '../../App.css';
import HeroSection from './HeroSection';

function Home() {
    return (
        <motion.div
            className="home"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <HeroSection />
        </motion.div>
    );
}
export default Home;
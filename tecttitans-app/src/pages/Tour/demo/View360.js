import React from 'react';
import { motion } from 'framer-motion';


function View360() {

    return(
        <motion.div
            className="sign-up"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
        
        </motion.div>
    );
}

export default View360;
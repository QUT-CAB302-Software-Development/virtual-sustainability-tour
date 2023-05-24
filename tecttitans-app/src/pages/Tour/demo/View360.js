import React from 'react';
import { motion } from 'framer-motion';
import PanoramaViewer from './PanoramaViewer';


function View360() {

    return(
        <motion.div
            className="sign-up"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <PanoramaViewer/>
        </motion.div>
    );
}

export default View360;
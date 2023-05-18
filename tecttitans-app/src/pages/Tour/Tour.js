import React, {useState } from 'react';
import '../../App.css';
import { motion } from 'framer-motion';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import places from "../../data/hotels_data.json"
import PlaceDetails from './PlaceDetails';
import Header from './Header';
import Map from './Map';

function Tour() {
    const theme = createTheme();    
    const [placeClicked, setPlaceClicked] = useState(null);
    const [coordinates, setCoordinates] = useState({lat: -27.46794, lng: 153.02809});
    const [zoom, setZoom] = useState(15);

    return(
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <ThemeProvider theme={theme}>
                <CssBaseline />
                
                <Header 
                    places={places}
                    setZoom={setZoom}
                    setCoordinates={setCoordinates} 
                />
                <Map 
                    places={places}
                    zoom={zoom}
                    coordinates={coordinates}
                    setPlaceClicked={setPlaceClicked}
                />
                <PlaceDetails
                    place={placeClicked}
                    setPlaceClicked={setPlaceClicked}
                />
            </ThemeProvider>
        </motion.div>
    );
}

export default Tour;
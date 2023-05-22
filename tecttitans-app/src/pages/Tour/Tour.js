import React, {useState } from 'react';
import { motion } from 'framer-motion';
import { Collapse, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import '../../App.css';
import places from "../../data/hotels_data.json"
import PlaceDetails from './PlaceDetails';
import SearchBox from './SearchBox';
import Map from './Map';
import './PlaceDetails.css';

function Tour() {
    const theme = createTheme();    
    const [placeClicked, setPlaceClicked] = useState(places[0]);
    const [placeDetailsState, setPlaceDetailsState] = useState(false);
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
                
                <SearchBox 
                    places={places}
                    setZoom={setZoom}
                    setCoordinates={setCoordinates} 
                />
                <Map 
                    places={places}
                    zoom={zoom}
                    coordinates={coordinates}
                    setPlaceClicked={setPlaceClicked}
                    setPlaceDetailsState={setPlaceDetailsState}
                />
                <Collapse orientation='horizontal' in={placeDetailsState} timeout="auto" unmountOnExit>
                    <PlaceDetails
                        place={placeClicked}
                        setPlaceDetailsState={setPlaceDetailsState}
                    />
                </Collapse>
            </ThemeProvider>
        </motion.div>
    );
}

export default Tour;
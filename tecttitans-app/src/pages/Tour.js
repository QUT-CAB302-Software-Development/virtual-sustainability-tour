import React, {useState, useEffect} from 'react';
import '../App.css';

import { CssBaseline, Grid, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import places from "../data/hotels_data.json"
import Header from '../maps/Header/Header';
import List from '../maps/List/List';
import Map from '../maps/Map/Map';
import PlaceDetails from '../maps/PlaceDetails/PlaceDetails';

function Tour() {

    const theme = createTheme();    
    const [placeClicked, setPlaceClicked] = useState(null);
    const [coordinates, setCoordinates] = useState({lat: -27.46794, lng: 153.02809});

    return(
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                
                <Header setCoordinates={setCoordinates} />
                <Map 
                    places={places}
                    coordinates={coordinates}
                    setPlaceClicked={setPlaceClicked}
                />
                <PlaceDetails
                    place={placeClicked}
                    setPlaceClicked={setPlaceClicked}
                />
            </ThemeProvider>
        </>
    );
}

export default Tour;
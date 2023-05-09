import React, {useState, useEffect} from 'react';
import '../App.css';
import { motion } from 'framer-motion';
import { CssBaseline, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {getPlacesData} from '../maps/api/index';
import Header from '../maps/Header/Header';
import List from '../maps/List/List';
import Map from '../maps/Map/Map';

function Tour() {

    const placeholderImage = 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg';

    const theme = createTheme();

    const [places, setPlaces] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [childClicked, setChildClicked] = useState(null);

    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({});

    const [isLoading, setIsLoading] = useState(false);
    const [type, setType] = useState('attractions');
    const [starRating, setStarRating] = useState(0);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude}}) => {
            setCoordinates({lat: latitude, lng: longitude});
        })
    }, []);

    useEffect(() => {
        const filteredPlaces = places?.filter((place) => place.rating > starRating);
        setFilteredPlaces(filteredPlaces);
    }, [starRating, places]);

    useEffect (() => {
        if (bounds.sw && bounds.ne){
            setIsLoading(true);
            getPlacesData(type, bounds.sw, bounds.ne)
                .then((data) => {
                    setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
                    setFilteredPlaces([]);
                    setIsLoading(false);
                })
        }
    }, [type, bounds]);

    return(
        <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header setCoordinates={setCoordinates} />
                <Grid container spacing={3} style={{ maxHeight: '87vh', width: '100%', overflow: 'clip' }}>

                    <Grid item xs={12} md={4}>
                        <List 
                            places={filteredPlaces && filteredPlaces.length ? filteredPlaces : places}
                            setCoordinates={setCoordinates} 
                            childClicked={childClicked}
                            isLoading={isLoading}
                            type={type}
                            setType={setType}
                            starRating={starRating}
                            setRating={setStarRating}
                            placeholderImage={placeholderImage}
                        />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Map 
                            setCoordinates={setCoordinates}
                            setBounds={setBounds}
                            coordinates={coordinates}
                            places={filteredPlaces && filteredPlaces.length ? filteredPlaces : places}
                            setChildClicked={setChildClicked}
                            placeholderImage={placeholderImage}
                        />
                    </Grid>
                </Grid>
            </ThemeProvider>
        </motion.div>
    );
}

export default Tour;
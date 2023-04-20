import React, {useState, useEffect} from 'react';
import '../App.css';
import { CssBaseline, Grid } from '@material-ui/core';

import {getPlacesData} from '../maps/api/index';
import Header from '../maps/Header/Header';
import List from '../maps/List/List';
import Map from '../maps/Map/Map';

function Tour() {

    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({ lat: -27.47320254, lng: 153.02752593 });
    const [bounds, setBounds] = useState({});

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude}}) => {
            setCoordinates({lat: latitude, lng: longitude});
        })
    }, []);

    useEffect (() => {
        getPlacesData(bounds.sw, bounds.ne)
            .then((data) => {
                setPlaces(data);
            })
    }, [coordinates, bounds]);

    return(
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%' }}>

                <Grid item xs={12} md={4}>
                    <List places={places} />
                </Grid>
                
                <Grid item xs={12} md={8}>
                    <Map 
                        setCoordinates={setCoordinates}
                        setBounds={setBounds}
                        coordinates={coordinates}
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default Tour;
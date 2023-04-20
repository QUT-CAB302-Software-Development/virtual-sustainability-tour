import React from "react";
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';
import useStyles from './MapStyle';

// google maps api usage
function Map({ setCoordinates, setBounds, coordinates }) {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');
    const defaultZoom = 14;
    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyD4NREzBr7KKSr-ei0Ag85AynWOMJoS7pQ' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={defaultZoom}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(event) => {
                    console.log(event);
                    setCoordinates({ lat: event.center.lat, lng: event.center.lng });
                    setBounds({ne: event.marginBounds.ne, sw: event.marginBounds.sw });
                }}
                onChildClick={''}
            >

            </GoogleMapReact>
        </div>
    );
}

export default Map;
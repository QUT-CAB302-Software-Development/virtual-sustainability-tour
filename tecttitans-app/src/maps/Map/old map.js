import React, { useState, useRef } from "react";
import { Paper, Typography, useMediaQuery, Rating } from '@mui/material';
import { GoogleMap, Marker } from '@react-google-maps/api';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import './Map.css'

// google maps api usage
function Map({ setCoordinates, setBounds, coordinates, places, setChildClicked, placeholderImage }) {
    const isDesktop = useMediaQuery('(min-width:600px)');
    const defaultZoom = 14;
    const defaultCoordinates = coordinates;

    return (
        <div className="mapContainer">
            <GoogleMap
                center={defaultCoordinates}
                zoom={defaultZoom}
                mapContainerStyle={{ width: '100%', height: '100%' }}
                options={{
                    disableDefaultUI: true, 
                    zoomControl: true, 
                    mapTypeControl: true,
                    streetViewControl: false,
                    disableDoubleClickZoom: true,
                }}
                onBoundChange={(event) => {
                    console.log("map change");
                    setCoordinates({ lat: event.center.lat, lng: event.center.lng });
                    setBounds({ ne: event.marginBounds.ne, sw: event.marginBounds.sw });
                }}
                onChildClick={(child) => setChildClicked(child)}
            >
                {places?.map((place, i) => (
                    <div
                    className="markerContainer"
                    lat={Number(place.latitude)}
                    lng={Number(place.longitude)}
                    key={i}
                    >
                        {
                            !isDesktop ? (
                                <LocationOnOutlinedIcon color="primary" fontSize="large"/>
                            ) : (
                                // <Marker />
                                <Paper elevation={3} className="paper">
                                    <Typography variant="subtitle2" gutterBottom>
                                        {place.name}
                                    </Typography>
                                    <img 
                                        className="pointer"
                                        src={place.photo ? place.photo.images.large.url : placeholderImage}
                                        alt={place.name}
                                    />
                                    <Rating size="small" value={Number(place.rating)} readonly />
                                </Paper>
                            )
                        }
                    </div>
                ))}
            </GoogleMap>
        </div>
    );
}

export default Map;

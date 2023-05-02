import React from "react";
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery, Rating } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import './MapStyle.css'

// google maps api usage
function Map({ setCoordinates, setBounds, coordinates, places, setChildClicked, placeholderImage }) {
    const isDesktop = useMediaQuery('(min-width:600px)');
    const defaultZoom = 14;
    const defaultCoordinates = coordinates;

    return (
        <div className="mapContainer">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                defaultCenter={defaultCoordinates}
                center={coordinates}
                defaultZoom={defaultZoom}
                margin={[50, 50, 50, 50]}
                options={{
                    disableDefaultUI: true, 
                    zoomControl: true, 
                    fullscreenControl: true, 
                    disableDoubleClickZoom: true,
                    //styles: MapVisuals
                }}
                onChange={(event) => {
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
            </GoogleMapReact>
        </div>
    );
}

export default Map;

import React from "react";
import { scaleQuantize } from 'd3-scale';
import GoogleMapReact from 'google-map-react';
import { Typography, Rating, Tooltip, Box } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import Zoom from '@mui/material/Zoom';
import getESGScore from "../../data/getESGScore";
import './Map.css';


function getColor(esgScore) {
    const colorScale = scaleQuantize()
        .domain([0, 30]) // range
        .range(['#FF0000', '#FFA000', '#00FF00' ]); // use a color scale that goes from red to yellow to green
    
    if(esgScore === "No data") { return '#B0B0B0'; }
    return colorScale(esgScore);
}

function placePopUp({ place, apiKey }){
    const imgSrc = `https://maps.googleapis.com/maps/api/place/photo?photoreference=${place.photos[0].photo_reference}&sensor=false&maxheight=400&maxwidth=250&key=${apiKey}`;
    const name = place.name;
    const esgStarRating = Math.round(100 * getESGScore(name) / 6) / 100;

    return(
        <div className="popup">
            
            <Typography variant="subtitle2" gutterBottom>{name}</Typography>

            <img 
                className="pointer"
                src={imgSrc}
                alt={name}
            />

            <Box display="flex" justifyContent="space-between">
                <Typography gutterBottom variant="subtitle2">User Rating</Typography>
                <Rating size="small" value={Number(place.rating)} readonly />
            </Box>

            <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle2">ESG Score</Typography>
                <Rating size="small" value={esgStarRating} readonly />
            </Box>
        </div>
    );
}


// google maps api usage
function Map({ places, zoom, coordinates, setPlaceClicked }) {

    const circleRadius = 100;
    const circleBorderWidth = 5;
    const circleTotalRadius = circleBorderWidth + circleRadius;
    const circleViewBox = "0 0 " + (circleTotalRadius * 2) + ' ' + (circleTotalRadius * 2);

    const defaultCoordinates = coordinates;
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

    return (
        <div className="mapContainer">
            <GoogleMapReact
                bootstrapURLKeys={{ key: apiKey }}
                defaultCenter={defaultCoordinates}
                center={coordinates}
                defaultZoom={zoom}
                zoom={zoom}
                margin={[50, 50, 50, 50]}
                options={{
                    disableDefaultUI: true, 
                    zoomControl: false, 
                    mapTypeControl: true,
                    streetViewControl: false,
                    disableDoubleClickZoom: true,
                    fullscreenControl: false,
                    clickableIcons: false,
                    //styles: MapVisuals
                }}
            >
                {places.map((place, i) => (
                    <div
                        className="markerContainer"
                        lat={Number(place.geometry.location.lat)}
                        lng={Number(place.geometry.location.lng)}
                        key={i}
                    >
                        <Tooltip
                            className="tooltip"
                            TransitionComponent={Zoom}
                            title={ placePopUp({ place, apiKey }) }
                        >
                            <div className="icon">
                                <PlaceIcon
                                    sx={{ color: getColor(getESGScore(place.name)) }}
                                    fontSize="large"
                                    onClick={() => setPlaceClicked(place)}
                                />
                               <svg 
                                    className="svg" 
                                    viewBox={circleViewBox}
                               >
                                    <circle 
                                        cx={circleTotalRadius}
                                        cy={circleTotalRadius}
                                        r={circleRadius}
                                        stroke-width={circleBorderWidth}
                                    />
                                </svg>
                            </div>
                        </Tooltip>
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    );
}

export default Map;

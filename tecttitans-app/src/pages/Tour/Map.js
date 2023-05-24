import React from "react";
import { scaleQuantize } from 'd3-scale';
import GoogleMapReact from 'google-map-react';
import { Tooltip } from '@mui/material';
import Zoom from '@mui/material/Zoom';
import PlaceIcon from '@mui/icons-material/Place';
import getESGScore from "../../data/getESGScore";
import './Map.css';
import Scale from '../../components/Scale';
import { Typography } from '@mui/material';


function getColor(esgScore) {
    const colorScale = scaleQuantize()
        .domain([5, 45]) // range
        .range(['#008000', '#9acd32', '#ffff00', '#ffa500','#ff4500']); // use a color scale that goes from red to yellow to green
    
    if(esgScore === null) { return '#B0B0B0'; }
    return colorScale(esgScore);
}


// google maps api usage ============================================================================================================
function Map({ places, zoom, coordinates, setPlaceClicked, setPlaceDetailsState, setReviewBoxState, setExplainESGState }) {
    
    const animationDelay = 250;//ms
    const tilt = 45;
    const heading = 0;
    const minZoom = 10;


    return (
        <div className="map-container">
            
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GMAPS_STYLE_KEY }}
                center={coordinates}
                zoom={zoom}
                options={{
                    mapId: process.env.REACT_APP_GMAPS_ID,
                    disableDefaultUI: true, 
                    disableDoubleClickZoom: true,
                    zoomControl: false, 
                    streetViewControl: false,
                    fullscreenControl: false,
                    mapTypeControl: false,
                    clickableIcons: false,
                    minZoom: minZoom,
                    heading: heading,
                    tilt: tilt,
                }}
            >
                {places.map((place, i) => (
                    <div
                        className="marker-container"
                        lat={Number(place.geometry.location.lat)}
                        lng={Number(place.geometry.location.lng)}
                        key={i}
                    >
                        <Tooltip
                            TransitionComponent={Zoom}
                            title={ 
                                <Typography variant="subtitle1" align="center">
                                    {place.name}
                                </Typography>
                            }
                            arrow
                        >
                            <PlaceIcon 
                                className="icon"
                                sx={{ color: getColor(getESGScore(place.name)), fontSize: 48 }}
                                onClick={() => {
                                    setPlaceDetailsState(false);
                                    setReviewBoxState(false);
                                    setExplainESGState(false);
                                    setTimeout(() => {
                                        setPlaceDetailsState(true);
                                        setPlaceClicked(place);
                                    }, animationDelay);
                                }}
                            />
                        </Tooltip>
                    </div>
                ))}
            </GoogleMapReact>
            
            <Scale/>
        </div>
    );
}





export default Map;

import React from "react";
import { scaleQuantize } from 'd3-scale';
import GoogleMapReact from 'google-map-react';
import { Tooltip } from '@mui/material';
import Zoom from '@mui/material/Zoom';
import PlaceIcon from '@mui/icons-material/Place';
import getESGScore from "../../data/getESGScore";
import './Map.css';


function getColor(esgScore) {
    const colorScale = scaleQuantize()
        .domain([0, 50]) // range
        .range(['#00FF00', '#FFA000', '#FF0000' ]); // use a color scale that goes from red to yellow to green
    
    if(esgScore === null) { return '#B0B0B0'; }
    return colorScale(esgScore);
}


// google maps api usage ============================================================================================================
function Map({ places, placePhotoAPI, zoom, coordinates, setPlaceClicked, setPlaceDetailsState }) {
    
    const tilt = 45;
    const heading = 0;
    const minZoom = 14;
    // const circleRadius = 200;
    // const circleBorderWidth = 5;
    // const circleTotalRadius = circleBorderWidth + circleRadius;
    // const circleViewBox = "0 0 " + (circleTotalRadius * 2) + ' ' + (circleTotalRadius * 2);
    //const mapId = process.env.REACT_APP_GMAPS_ID;

    return (
        <div className="mapContainer">
            
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GMAPS_STYLE_KEY }}
                center={coordinates}
                zoom={zoom}
                options={{
                    disableDefaultUI: true, 
                    zoomControl: false, 
                    mapTypeControl: false,
                    streetViewControl: false,
                    disableDoubleClickZoom: true,
                    fullscreenControl: false,
                    clickableIcons: false,
                    mapId: 'ebe080360377ac36',
                    minZoom: minZoom,
                    heading: heading,
                    tilt: tilt,
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
                            title={place.name}
                        >
                            <PlaceIcon 
                                className="icon"
                                sx={{ color: getColor(getESGScore(place.name)) }}
                                fontSize="large"
                                onClick={() => {setPlaceClicked(place); setPlaceDetailsState(true);}}
                            />
                        </Tooltip>
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    );
}





export default Map;

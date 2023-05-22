import React from "react";
import { scaleQuantize } from 'd3-scale';
import GoogleMapReact from 'google-map-react';
import { Typography, Rating, Tooltip, Stack } from '@mui/material';
import Zoom from '@mui/material/Zoom';
import PlaceIcon from '@mui/icons-material/Place';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import EnergySavingsLeafOutlinedIcon from '@mui/icons-material/EnergySavingsLeafOutlined';
import getESGScore from "../../data/getESGScore";
import './Map.css';
import { useEffect, useState } from 'react';
import {
    AmbientLight,
    DirectionalLight,
    Matrix4,
    PerspectiveCamera,
    Scene,
    WebGLRenderer,
  } from "three";
  
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
const [tilt, heading] = [45, 0]

function getColor(esgScore) {
    const colorScale = scaleQuantize()
        .domain([0, 100]) // range
        .range(['#FF0000', '#FFA000', '#00FF00' ]); // use a color scale that goes from red to yellow to green
    
    if(esgScore === null) { return '#B0B0B0'; }
    return colorScale(esgScore);
}

function placePopUp({ place, apiKey }){
    const imgSrc = `https://maps.googleapis.com/maps/api/place/photo?photoreference=${place.photos[0].photo_reference}&sensor=false&maxheight=400&maxwidth=250&key=${apiKey}`;
    const name = place.name;
    const starRating = Number(place.rating);
    const esgScore = getESGScore(name);
    let esgRatingElem = null;

    if (esgScore !== null) {
        const esgStarRating = esgScore * 5 / 100;
        esgRatingElem = 
            <Rating 
                value={esgStarRating}
                icon={<EnergySavingsLeafIcon htmlColor='LimeGreen' fontSize='small'/>}
                emptyIcon={<EnergySavingsLeafOutlinedIcon fontSize='small'/>}
                readonly 
            />
    }

    return(
        <div className="popup">
            
            <Typography variant="subtitle1" gutterBottom>{name}</Typography>

            <img 
                className="pointer"
                src={imgSrc}
                alt={name}
            />
           
            <Stack margin="auto">
                <Rating margin="auto"
                  value={starRating}
                  icon={<StarIcon htmlColor='DarkOrange' fontSize='small'/>}
                  emptyIcon={<StarBorderIcon fontSize='small'/>}
                  readonly 
                />
                {esgRatingElem}
            </Stack>
        </div>
    );
}


function Animation() {
    useEffect(() => {
        const animationFrame = () => {
          heading += 0.005;
          requestAnimationFrame(animationFrame);
        };
    
        requestAnimationFrame(animationFrame);
    
        return () => {
          cancelAnimationFrame(animationFrame);
        };
      }, []);
    
      return <div>{heading}</div>; // Replace with your desired animation output
}



// google maps api usage ============================================================================================================
function Map({ places, coordinates, setPlaceClicked, setPlaceDetailsState }) {
    const zoom = 17;
    const circleRadius = 200;
    const circleBorderWidth = 5;
    const circleTotalRadius = circleBorderWidth + circleRadius;
    const circleViewBox = "0 0 " + (circleTotalRadius * 2) + ' ' + (circleTotalRadius * 2);
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const mapId = process.env.REACT_APP_GOOGLE_MAPS_MAP_ID;
    return (
        <div className="mapContainer">
            
            <GoogleMapReact
                bootstrapURLKeys={{ key: apiKey }}
                defaultCenter={[-27.4711435,153.0274624]}
                center={[-27.4711435,153.0274624]}
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
                    mapId: 'ebe080360377ac36',
                    heading: heading,                    
                    tilt: tilt,
                    minZoom: zoom,
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
                                    onClick={() => {setPlaceClicked(place); setPlaceDetailsState(true);}}
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

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


function getColor(esgScore) {
    const colorScale = scaleQuantize()
        .domain([0, 50]) // range
        .range(['#00FF00', '#FFA000', '#FF0000' ]); // use a color scale that goes from red to yellow to green
    
    if(esgScore === null) { return '#B0B0B0'; }
    return colorScale(esgScore);
}

function placePopUp({ place, placePhotoAPI }){
    const imgSrc = `https://maps.googleapis.com/maps/api/place/photo?photoreference=${place.photos[0].photo_reference}&sensor=false&maxheight=400&maxwidth=250&key=${placePhotoAPI}`;
    const name = place.name;
    const starRating = Number(place.rating);
    const esgScore = getESGScore(name);
    let esgRatingElem = null;

    if (esgScore !== null) {
        const esgStarRating = 5 - (esgScore * 0.1); // starRating = 5 - (rawData / 50) * 5
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
                    mapTypeControl: true,
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
                            title={ placePopUp({ place, placePhotoAPI }) }
                        >
                            <div className="icon">
                                <PlaceIcon
                                    sx={{ color: getColor(getESGScore(place.name)) }}
                                    fontSize="large"
                                    onClick={() => {setPlaceClicked(place); setPlaceDetailsState(true);}}
                                />
                               {/* <svg 
                                    className="svg" 
                                    viewBox={circleViewBox}
                               >
                                    <circle 
                                        cx={circleTotalRadius}
                                        cy={circleTotalRadius}
                                        r={circleRadius}
                                        stroke-width={circleBorderWidth}
                                    />
                                </svg> */}
                            </div>
                        </Tooltip>
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    );
}





export default Map;

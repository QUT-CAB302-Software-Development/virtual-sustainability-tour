import React, { useState, useEffect } from 'react';
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
    const [tilt, setTilt] = useState(0);
    const [heading, setHeading] = useState(60);
    const minZoom = 17.2;
    const cardAnimationDelay = 100; // ms


    function animate() {
        setTilt((prevTilt) => {
            const targetTilt = 60;
            const easingFactor = 0.08; // Adjust this value for different easing effects

            const distanceTilt = targetTilt - prevTilt;
            const deltaTilt = distanceTilt * easingFactor;

            if (Math.abs(deltaTilt) > 0.1) {
                setHeading((prevHeading) => {
                    const targetHeading = 0;
                    const distanceHeading = targetHeading - prevHeading;
                    const deltaHeading = distanceHeading * easingFactor;

                    if (Math.abs(deltaHeading) > 0.1 && prevTilt > 45) {
                        return prevHeading + deltaHeading;
                    } 
                    else {
                        return targetHeading;
                    }
                });

                return prevTilt + deltaTilt;
            }  
            else {
                setHeading(0);
                return targetTilt;
            }
            });
        }
      
      useEffect(() => {
        let animationLoop;
        let counter = 0;
      
        const animateMultipleTimes = () => {
          animate();
          if (counter < 100) {
            animationLoop = setTimeout(animateMultipleTimes, 20); // Delay between animate calls adjusted to 5ms
          }
          counter++;
        };
      
        const initialAnimationTimeout = setTimeout(() => {
          animationLoop = setTimeout(animateMultipleTimes, 20); // Start animation loop after 3-second delay
        }, 2000);
      
        return () => {
          clearTimeout(initialAnimationTimeout);
          clearTimeout(animationLoop);
        };
      }, []);

    return (
        <div className="map-container">    
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GMAPS_STYLE_KEY }}
                center={coordinates}
                zoom={zoom}
                options={{
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
                mapId: process.env.REACT_APP_GMAPS_ID,
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
                        }, cardAnimationDelay);
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

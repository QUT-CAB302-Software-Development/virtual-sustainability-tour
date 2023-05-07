import React from "react";
import { scaleQuantize } from 'd3-scale';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, Rating, Tooltip } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';
import Zoom from '@mui/material/Zoom';
import './Map.css';
// import locationData from "../data/hotels_data.json"
// import sustainabilityData from "../data/Sustainability.json"


// function getESGScore(hotelName) {
//     const matchingSustainabilityData = sustainabilityData.find((sustainabilityPlace) => {
//         // RegExp() is used because indexOf() and includes() functions were not working after several testings
//         // for unknown reasons
//         // '\b' used to match word boundaries
//         const regex = new RegExp(`\\b${sustainabilityPlace.hotel_name}\\b|\\b${sustainabilityPlace.company_name}\\b`, 'i');
//         return regex.test(hotelName); // This line checks if the 'hotelName' matches with the regexp pattern
//     });

//     if (matchingSustainabilityData) {
//         return matchingSustainabilityData.esg_score;
//     } else {
//         return "No data";
//     }
// }

const ratingRange = [0, 5];

function getColor(esgScore) {
    const colorScale = scaleQuantize()
        .domain(ratingRange) // range
        .range(['#FF0000','#FF0000','#FF0000', '#FFA000', '#00FF00' ]); // use a color scale that goes from red to yellow to green
    return colorScale(esgScore);
}

function rand([min, max]) {
    // get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// google maps api usage
function Map({ setCoordinates, setBounds, coordinates, places, setChildClicked, placeholderImage }) {
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
                    mapTypeControl: true,
                    streetViewControl: false,
                    disableDoubleClickZoom: true,
                    //fullscreenControl: true, 
                    //styles: MapVisuals
                }}
                onChange={(event) => {
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
                        <Tooltip
                            className="tooltip"
                            TransitionComponent={Zoom}
                            title={
                                <Paper elevation={3} className="paper">
                                    <Typography variant="subtitle2" gutterBottom>
                                        {place.name}
                                    </Typography>
                                    <img 
                                        className="pointer"
                                        src={place.photo ? place.photo.images.large.url : placeholderImage}
                                        alt={place.name}
                                    />
                                    <Rating 
                                        size="small" 
                                        value={Number(place.rating)} 
                                        readonly 
                                    />
                                </Paper>
                            }
                        >
                            <PlaceIcon
                                className="icon"
                                sx={{ color: getColor(Number(place.rating)) }} //Number(place.rating)
                                fontSize="large"
                            />
                        </Tooltip>
                    </div>
                ))}
            </GoogleMapReact>
        </div>
    );
}

export default Map;

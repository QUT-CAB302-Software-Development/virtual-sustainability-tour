import React from 'react';
import { scaleQuantize } from 'd3-scale';
import { schemeGreens } from 'd3-scale-chromatic';
import { MapContainer, TileLayer, Marker, Popup, CircleMarker} from "react-leaflet";
import "../testingMap/testingMap.css"
import locationData from "../data/hotels_data.json"
import sustainabilityData from "../data/Sustainability.json"


function getESGScore(hotelName) {
    const matchingSustainabilityData = sustainabilityData.find((sustainabilityPlace) => {
        // RegExp() is used because indexOf() and includes() functions were not working after several testings
        // for unknown reasons
        // '\b' used to match word boundaries
        const regex = new RegExp(`\\b${sustainabilityPlace.hotel_name}\\b|\\b${sustainabilityPlace.company_name}\\b`, 'i');
        return regex.test(hotelName); // This line checks if the 'hotelName' matches with the regexp pattern
    });

    if (matchingSustainabilityData) {
        return matchingSustainabilityData.esg_score;
    } else {
        return "No data";
    }
}
function HotelPopup({ hotel }) {
    const apiKey = 'AIzaSyD4NREzBr7KKSr-ei0Ag85AynWOMJoS7pQ';
    const placePhotoUrl = `https://maps.googleapis.com/maps/api/place/photo?photoreference=${hotel.photos[0].photo_reference}&sensor=false&maxheight=400&maxwidth=250&key=${apiKey}`;
    const esgScore = getESGScore(hotel.name);

    return (
        <div className="hotel-popup">
            <h3>{hotel.name}</h3>
            <img src={placePhotoUrl} alt={hotel.name} />
            <h3>Address: {hotel.formatted_address}</h3>
            <h3>ESG score: {esgScore}</h3>
            <h3>Rating: {hotel.rating}</h3>
            <h3>User ratings: {hotel.user_ratings_total}</h3>
        </div>
    );
}
function getColor(esgScore) {
    const colorScale = scaleQuantize()
        .domain([0, 30]) // range
        .range(schemeGreens[5]); // use a green color scheme with 5 shades

    return colorScale(esgScore);
}
function Testing(){
    const circleRadius = 25; // radius of the circle marker in meters
    return(
        <MapContainer center={[-27.470125, 153.021072]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {locationData.map(hotel => (
                <React.Fragment key={hotel.id}>
                    <CircleMarker
                        center={[hotel.geometry.location.lat, hotel.geometry.location.lng]}
                        radius={circleRadius}
                        pathOptions={{
                            fillColor: getColor(getESGScore(hotel.name)),
                            fillOpacity: 0.8, // set the opacity of the CircleMarker
                            //stroke: true // disable the stroke of the CircleMarker
                            color: "black", // set the border color of the CircleMarker
                            weight: 0.5, // set the border weight of the CircleMarker
                        }}
                        eventHandlers={{
                            click: (e) => {
                                e.target.openPopup();
                            },
                            mouseover: (e) => {
                                e.target.openPopup();
                            },
                            mouseout: (e) => {
                                e.target.closePopup();
                            }
                        }}
                    />
                    <Marker

                        position={[hotel.geometry.location.lat, hotel.geometry.location.lng]}
                        eventHandlers={{
                            mouseover: (e) => {
                                e.target.openPopup();
                            },
                            mouseout: (e) => {
                                e.target.closePopup();
                            }
                        }}
                    >

                        <Popup>
                            <HotelPopup hotel={hotel} />
                        </Popup>
                    </Marker>
                </React.Fragment>
            ))}
        </MapContainer>
    );
}

export default Testing;
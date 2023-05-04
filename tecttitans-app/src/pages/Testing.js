import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../testingMap/testingMap.css"
import locationData from "../data/hotels_data.json"

function HotelPopup({ hotel }) {
    const apiKey = 'AIzaSyD4NREzBr7KKSr-ei0Ag85AynWOMJoS7pQ';
    const placePhotoUrl = `https://maps.googleapis.com/maps/api/place/photo?photoreference=${hotel.photos[0].photo_reference}&sensor=false&maxheight=400&maxwidth=250&key=${apiKey}`;


    return (
        <div className="hotel-popup">
            <h3>{hotel.name}</h3>
            <img src={placePhotoUrl} alt={hotel.name} />
            <h3>Address: {hotel.formatted_address}</h3>
            <h3>Rating: {hotel.rating}</h3>
            <h3>User ratings: {hotel.user_ratings_total}</h3>
        </div>
    );
}

function Testing(){

    return(
        <MapContainer center={[-27.470125, 153.021072]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {locationData.map(hotel => (

            <Marker

                position={[hotel.geometry.location.lat, hotel.geometry.location.lng]}
            >

                <Popup>
                    <HotelPopup hotel={hotel} />
                </Popup>
            </Marker>
            ))}

        </MapContainer>
    );
}

export default Testing;
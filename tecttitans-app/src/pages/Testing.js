import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../testingMap/testingMap.css"
import locationData from "../data/testingLocationData.json"

function Testing(){

    return(
        <MapContainer center={[-27.470125, 153.021072]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {locationData.map(hotel => (

            <Marker
                key = {hotel.id}
                position={[hotel.gps.latitude, hotel.gps.longitude]}
            >

                <Popup>
                   Hello
                </Popup>
            </Marker>
            ))}

        </MapContainer>
    );
}

export default Testing;
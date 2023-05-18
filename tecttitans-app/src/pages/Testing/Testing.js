import React from 'react';
import { scaleQuantize } from 'd3-scale';
// import { interpolateRdYlGn  } from 'd3-scale-chromatic';
import { MapContainer, TileLayer, Marker, Popup, CircleMarker} from "react-leaflet";
import locationData from "../../data/hotels_data.json"
import sustainabilityData from "../../data/Sustainability.json"
import { motion } from 'framer-motion';
import "./Testing.css";

function Testing() {
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40.76, lng: -73.983 },
        zoom: 15,
        mapTypeId: "satellite",
    });

    map.setTilt(45);
}
export default Testing;
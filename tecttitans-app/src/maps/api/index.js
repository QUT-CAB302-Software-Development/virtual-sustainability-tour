import axios from 'axios';
import sustainabilityData from '../../data/Sustainability.json';

// handles API calls
export const getPlacesData = async (type, sw, ne) => {
    try {
        // gets screen bounds and returns places within bounds
        const {data: {data}} = await axios.get(
            `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
            {
                params: {
                    bl_latitude: sw.lat,
                    tr_latitude: ne.lat,
                    bl_longitude: sw.lng,
                    tr_longitude: ne.lng,
                },
                //api call, api key has a 500/month call limit
                headers: {
                    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY,
                    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                }
            });
        return data.map((place) => {
            const matchingSustainabilityData = sustainabilityData.find((sustainabilityPlace) => {
                const regex = new RegExp(`\\b${sustainabilityPlace.hotel_name}\\b|\\b${sustainabilityPlace.company_name}\\b`, 'i');
                return regex.test(place.name);
            });
            if (matchingSustainabilityData) {
                place.esg_score = matchingSustainabilityData.esg_score;
                return place;
            } else {
                place.esg_score = "No data";
                return place;
            }

        });
    } catch (error) {
        console.log(error);
    }

};


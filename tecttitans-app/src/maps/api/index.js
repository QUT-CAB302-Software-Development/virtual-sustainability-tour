import axios from 'axios';
import sustainabilityData from '../../data/Sustainability.json';

// handles API calls
export const getPlacesData = async (type, sw, ne) => {
    let callMethod = 'GET';
    //if (type === 'hotels') { callMethod = 'POST'; }

    try {
        console.log(`API req for ${type} sent with method '${callMethod}'`);
        // gets screen bounds and returns places within bounds
        const {data: {data}} = await axios.request(
            `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
            {
                //api call
                method: callMethod,
                headers: {
                    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_TRAVEL_API_KEY,
                    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
                },
                params: {
                    bl_latitude: sw.lat,
                    tr_latitude: ne.lat,
                    bl_longitude: sw.lng,
                    tr_longitude: ne.lng,
                },
            });
        console.log("API req accepted");

        return data.map((place) => {
            const matchingSustainabilityData = sustainabilityData.find((sustainabilityPlace) => {
                // RegExp() is used because indexOf() and includes() functions were not working after several testings
                // for unknown reasons
                // '\b' used to match word boundaries
                const regex = new RegExp(`\\b${sustainabilityPlace.hotel_name}\\b|\\b${sustainabilityPlace.company_name}\\b`, 'i');
                return regex.test(place.name); // This line checks if the 'name' matches with the regexp pattern
            });
            // if there is a match, the place is a sustainable and the esg_score form the data
            // assigned to the place
            // if not, set to 'No data'
            if (matchingSustainabilityData) {
                place.esg_score = matchingSustainabilityData.esg_score;
                return place;
            } else {
                place.esg_score = "No data";
                return place;
            }

        });
    } catch (error) {
        console.log("API req rejected");
        console.log(error);
    }

};


import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

// handles API calls

export const getPlacesData = async (sw, ne) => {
    try {
        // gets screen bounds and returns places within bounds
        const { data: {data}} = await axios.get(URL, 
            {
                params: {
                    bl_latitude: sw.lat,
                    tr_latitude: ne.lat,
                    bl_longitude: sw.lng,
                    tr_longitude: ne.lng,
                },
                //api call
                headers: {
                    'X-RapidAPI-Key': 'd0f83890bbmshb339537501b6a58p15a2a5jsn5704f13578f1',
                    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
                }
            });

        return data;
        
    } catch (error) {
        console.log(error)
    }
}
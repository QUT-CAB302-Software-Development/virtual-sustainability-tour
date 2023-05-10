import sustainabilityData from "../../data/Sustainability.json"

function getESGScore(placeName) {
    const matchingSustainabilityData = sustainabilityData.find((sustainabilityPlace) => {
        // RegExp() is used because indexOf() and includes() functions were not working after several testings
        // for unknown reasons
        // '\b' used to match word boundaries
        const regex = new RegExp(`\\b${sustainabilityPlace.hotel_name}\\b|\\b${sustainabilityPlace.company_name}\\b`, 'i');
        return regex.test(placeName); // This line checks if the 'hotelName' matches with the regexp pattern
    });

    if (matchingSustainabilityData) {
        return matchingSustainabilityData.esg_score;
    } else {
        return "No data";
    }
}
export default getESGScore;
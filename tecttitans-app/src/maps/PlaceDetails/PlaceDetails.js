import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip, Rating } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import './PlaceDetails.css';

function PlaceDetails({ place, setCoordinates, selected, refProp, placeholderImage }) {
  const tripAdvisorButtonText = "Trip Advisor";
  const websiteButtonText = "Go to Website";
  const mapButtonText = "Go to Map";

  if (selected) refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" })

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={place.photo ? place.photo.images.large.url : placeholderImage}
        title={place.name}
      />
      <CardContent>

        <Typography gutterBottom variant="h5">{place.name}</Typography>

        <Box display="flex" justifyContent="space-between">
          <Rating value={Number(place.rating)} readonly />
          <Typography gutterBottom variant="subtitle1"> {place.num_reviews} reviews</Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">ESG Score</Typography>
          <Typography gutterBottom variant="subtitle1">{place.esg_score}</Typography>
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
        </Box>

        {place?.awards?.map((award) => (
          <Box my={1} display="flex" justifyContent="space-between" alignItems="center">
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
          </Box>
        ))}

        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className="chip" />
        ))}

        {place?.address && (
          <Typography gutterBottom variant="subtitle2" color="textSecondary" className="subtitle">
            <LocationOnIcon /> {place.address}
          </Typography>
        )}

        {place?.phone && (
          <Typography gutterBottom variant="subtitle2" color="textSecondary" className="spacing">
            <PhoneIcon /> {place.phone}
          </Typography>
        )}

        <CardActions>
          <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
            {tripAdvisorButtonText}
          </Button>
          <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
            {websiteButtonText}
          </Button>
          <Button size="small" color="primary" onClick={() => {
              const lat = Number(place.latitude);
              const lng = Number(place.longitude);
              setCoordinates({ lat, lng });
            }}
          >
            {mapButtonText}
          </Button>
        </CardActions>

      </CardContent>
    </Card>
  );
}

export default PlaceDetails;

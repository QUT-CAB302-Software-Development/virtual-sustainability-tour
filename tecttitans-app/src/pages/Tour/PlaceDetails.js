import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip, Rating } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import './PlaceDetails.css';
import getESGScore from "./getESGScore";

function PlaceDetails({ place, setPlaceClicked }) {
  if(place === null) return;

  const websiteButtonText = "Go to Website";
  const closeButtonText = "Close";
  const imgSrc = `https://maps.googleapis.com/maps/api/place/photo?photoreference=${place.photos[0].photo_reference}&sensor=false&maxheight=400&maxwidth=250&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;

  const name = place.name;
  const starRating = Number(place.rating);

  const esgScore = getESGScore(name);
  const esgStarRating = Math.round(100 * esgScore / 6) / 100;
  let esgScoreText = `${Math.round(esgScore)}/30, ESG Score`;
  if(esgScore === "No data") { esgScoreText = 'No ESG Score'; }

  return (
    <div className="details">
      <Card elevation={6}>
        <CardMedia
          style={{ height: 265 }}
          image={imgSrc}
          title={place.name}
        />

        <CardContent>

          <Typography gutterBottom variant="h5">{name}</Typography>

          <Box display="flex" justifyContent="space-between">
            <Rating value={starRating} readonly />
            <Typography gutterBottom variant="subtitle1">{starRating}/5, {place.user_ratings_total} reviews</Typography>
          </Box>
          
          <Box display="flex" justifyContent="space-between">
              <Rating size="small" value={esgStarRating} readonly />
              <Typography variant="subtitle1">{esgScoreText}</Typography>
          </Box>

          {/* <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Price</Typography>
            <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
          </Box>

          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Ranking</Typography>
            <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
          </Box> */}

          {place?.awards?.map((award) => (
            <Box my={1} display="flex" justifyContent="space-between" alignItems="center">
              <img src={award.images.small} alt={award.display_name} />
              <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
            </Box>
          ))}

          {place?.cuisine?.map(({ name }) => (
            <Chip key={name} size="small" label={name} className="chip" />
          ))}
          
          <Typography gutterBottom variant="subtitle2" color="textSecondary" className="subtitle">
            <LocationOnIcon/> {place.formatted_address}
          </Typography>

          {place?.phone && (
            <Typography gutterBottom variant="subtitle2" color="textSecondary" className="spacing">
              <PhoneIcon /> {place.phone}
            </Typography>
          )}
        </CardContent>

        <CardActions>
          <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
            {websiteButtonText}
          </Button>
          <Button size="small" color="primary" onClick={() => {setPlaceClicked(null)}}>
            {closeButtonText}
          </Button>
        </CardActions>

      </Card>
    </div>
  );
}

export default PlaceDetails;

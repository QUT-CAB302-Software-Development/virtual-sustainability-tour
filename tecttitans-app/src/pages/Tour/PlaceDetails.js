import React, { useState, useEffect } from "react";
import { Box, Typography, Button, IconButton, Card, CardMedia, CardContent, Rating, CardActions } from '@mui/material';

import PlaceIcon from '@mui/icons-material/Place';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import RateReviewIcon from '@mui/icons-material/RateReview';
import HelpIcon from '@mui/icons-material/Help';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import CloseIcon from '@mui/icons-material/Close';

import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import EnergySavingsLeafOutlinedIcon from '@mui/icons-material/EnergySavingsLeafOutlined';

import View360 from "./demo/View360";
import getESGScore from "../../data/getESGScore";
import './PlaceDetails.css';



function PlaceDetails({ place, setPlaceDetailsState, setReviewBoxState }) {

  const starRating = Number(place.rating);
  const esgScore = getESGScore(place.name);
  const esgStarRating = 5 - (esgScore * 0.1); // starRating = 5 - (rawData / 50) * 5


  return (
    <Card elevation={6} sx={{ borderRadius: '28px', width: "320px", }} className='card'>

        <div className="close-button-container">
          <IconButton onClick={() => {setPlaceDetailsState(false);setReviewBoxState(false);}}>
            <CloseIcon sx={{ borderRadius: '50%' }} className="close-button" />
          </IconButton>
        </div>

        <CardMedia
          style={{ height: 'calc(100vh - 480px)' }}
          image={`https://maps.googleapis.com/maps/api/place/photo?photoreference=${place.photos[0].photo_reference}&sensor=false&maxheight=400&maxwidth=250&key=${process.env.REACT_APP_GMAPS_PHOTO_KEY}`}
          title={place.name}
        />


        <CardContent>

          <Box display="flex" justifyContent="space-between">
            <Typography gutterBottom variant="h5">{place.name}</Typography>
            <IconButton size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
              <OpenInNewIcon htmlColor="DimGray" />
            </IconButton>
          </Box>

          <Box display="flex" justifyContent="space-between">
            <Typography gutterBottom variant="subtitle2" >{place.formatted_address}</Typography>
            <IconButton size="small" >
              <PlaceIcon htmlColor="red" />
            </IconButton>
          </Box>

          <Box display="flex" justifyContent="space-between">
            <Box display="flex" justifyContent="flex-start">
              <Rating
                value={starRating}
                icon={<StarIcon htmlColor='DarkOrange' fontSize="small" />}
                emptyIcon={<StarBorderIcon fontSize="small" />}
                readonly
              />
              <Typography gutterBottom variant="subtitle1">{starRating} ({place.user_ratings_total})</Typography>
            </Box>
            <IconButton size="small" color="primary" onClick={() => setReviewBoxState((value) => !value)}>
               <RateReviewIcon />
             </IconButton>
          </Box>

          {esgScore &&
          <Box display="flex" justifyContent="space-between">
            <Box display="flex" justifyContent="flex-start">
              <Rating
                value={esgStarRating}
                icon={<EnergySavingsLeafIcon htmlColor='LimeGreen' fontSize="small" />}
                emptyIcon={<EnergySavingsLeafOutlinedIcon fontSize="small" />}
                readonly
              />
              <Typography variant="subtitle1">ESG {esgScore}</Typography>
            </Box>
            <IconButton size="small" color="primary" onClick={() => setPlaceDetailsState(false)}>
              <HelpIcon />
            </IconButton>
          </Box>}

        </CardContent>


        <CardActions
          sx={{
            display: "flex",
            justifyContent: "space-around",
            paddingBottom: '20px',
          }}
        >
          <Button
            size="large"
            variant="contained"
            color="primary"
            sx={{ borderRadius : '32px', paddingX: "32px", paddingY: "16px", }}
            endIcon={<ThreeDRotationIcon htmlColor="White" fontSize="large" />}
            onClick={() => View360({ place })}
          >
            <Typography variant="h5" sx={{fontWeight: "bold" }} >View 360 Tour</Typography>
          </Button>
        </CardActions>

      </Card>
  );
}

export default PlaceDetails;
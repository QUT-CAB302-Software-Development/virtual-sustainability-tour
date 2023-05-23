import React, { useState, useEffect } from "react";
import { Box, Typography, Button, IconButton, Card, CardMedia, CardContent, Rating, CardActions, Stack, Chip, Paper } from '@mui/material';

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


function reviewBox({ setReviewBoxState, comments }) {
  return (
    <div className='modal'>
      <form>
        <button className='btn'
          onClick={() => setReviewBoxState((value) => !value)}
        >
          X
        </button>

        <div className='feedback-form'>
          <input className='feedback' placeholder="Feedback" name="Feedback" />
          <label className="placeholder">Feedback</label>
        </div>

        <button className='btn'>Submit feedback</button>

        <h3>Other Customer Feedback</h3> {/*  used dummy data can be improved to look better*/}
        {comments?.map((comment) => (
          <div key={comment.id}>
            <p className='comments'>{comment.body}</p>
          </div>
        ))}
      </form>
    </div>
  )
}


function PlaceDetails({ place, placePhotoAPI, setPlaceDetailsState }) {

  const [reviewBoxState, setReviewBoxState] = useState(false);
  const [comments, setComments] = useState([]);
  // GET data from API using React
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch('https://dummyjson.com/comments');
        const data = await response.json();
        // setComments(data);
        if (Array.isArray(data.comments)) {
          setComments(data.comments);
        } else {
          console.error('API response is not an array:', data);
        }
      }
      catch (error) {
        console.error('Error fetching comment data', error);
      }
    };
    fetchComments();
  }, []);

  const imgSrc = `https://maps.googleapis.com/maps/api/place/photo?photoreference=${place.photos[0].photo_reference}&sensor=false&maxheight=400&maxwidth=250&key=${placePhotoAPI}`;
  const name = place.name;
  const starRating = Number(place.rating);
  const esgScore = getESGScore(name);
  let esgRatingElem = null;

  if (esgScore !== null) {
    const esgStarRating = 5 - (esgScore * 0.1); // starRating = 5 - (rawData / 50) * 5
    esgRatingElem =
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
      </Box>
  }


  return (
    <div className="details">
      <Card elevation={6} sx={{ borderRadius: '28px', }}>

        <div className="close-button-container">
          <IconButton onClick={() => setPlaceDetailsState(false)}>
            <CloseIcon sx={{ borderRadius: '50%' }} className="close-button" />
          </IconButton>
        </div>

        <CardMedia
          style={{ height: 'calc(100vh - 480px)' }}
          image={imgSrc}
          title={place.name}
        />

        <CardContent>

          <Box display="flex" justifyContent="space-between">
            <Typography gutterBottom variant="h5">{name}</Typography>
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
            <IconButton size="small" color="primary" onClick={() => reviewBox({ setReviewBoxState, comments })}>
              <RateReviewIcon />
            </IconButton>
          </Box>

          {esgRatingElem}
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
            sx={{ borderRadius : '32px', padding: "16px", paddingX: "32px", }}
            endIcon={<ThreeDRotationIcon htmlColor="White" fontSize="large" />}
            onClick={() => View360({ place })}
          >
            <Typography variant="h5" sx={{fontWeight: "bold" }} >View 360 Tour</Typography>
          </Button>

          <div>
            {!reviewBoxState && (
              <button
                className='btn'
                onClick={() => setReviewBoxState((value) => !value)}>
                Feedback Form
              </button>
            )}

            {reviewBoxState && (reviewBox({ setReviewBoxState, comments }))}
          </div>
        </CardActions>

      </Card>
    </div>
  );
}

export default PlaceDetails;

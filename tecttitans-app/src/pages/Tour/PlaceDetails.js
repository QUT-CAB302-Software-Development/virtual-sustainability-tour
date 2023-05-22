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

import View3D from "./View360";
import getESGScore from "../../data/getESGScore";
import './PlaceDetails.css';


function ReviewBox({ setReviewBoxState, comments }){

    // display only three comments

    const displayedComments = comments?.slice(0,3);
  return(
    <Card className='review-card'>
        <CardContent>
            <form>
                <IconButton className='close-button' onClick={() => setReviewBoxState((value) => !value)}>
                    <CloseIcon />
                </IconButton>

        <div className='feedback-form'>
          <input className='feedback' placeholder="Feedback" name="Feedback" />
        </div>

        <button className='submit-btn'>Submit feedback</button>

        <p className="h3text">Other Customer Feedback</p> {/*  used dummy data can be improved to look better*/}
        {displayedComments?.map((comment) => (
            <div key={comment.id}>
              <p className='comments'>{comment.body}</p>
            </div>
          ))}
      </form>
        </CardContent>
    </Card>
  )
};


function PlaceDetails({ place, setPlaceDetailsState }) {
  
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
      catch(error) {
        console.error('Error fetching comment data', error);
      }
    };
    fetchComments();
  }, []);

  const imgSrc = `https://maps.googleapis.com/maps/api/place/photo?photoreference=${place.photos[0].photo_reference}&sensor=false&maxheight=400&maxwidth=250&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
  const name = place.name;
  const starRating = Number(place.rating);
  const esgScore = getESGScore(name);
  let esgRatingElem = null;

  if (esgScore !== null) {
    const esgStarRating = esgScore * 5 / 100;
    esgRatingElem = 
    <Box display="flex" justifyContent="space-between">
      <Box display="flex" justifyContent="flex-start">
        <Rating 
          value={esgStarRating}
          icon={<EnergySavingsLeafIcon htmlColor='LimeGreen' fontSize="small"/>}
          emptyIcon={<EnergySavingsLeafOutlinedIcon fontSize="small"/>}
          readonly 
        />
        <Typography variant="subtitle1">{esgScore}%</Typography>
      </Box>
      <IconButton size="small" color="primary" onClick={() => setPlaceDetailsState(false)}>
        <HelpIcon/>
      </IconButton>
    </Box>
  }

  
  return (
    <div className="details">
      <Card elevation={6}>

        <div className="close-button-container">
          <IconButton onClick={() => setPlaceDetailsState(false)}>
            <CloseIcon className="close-button"/>
          </IconButton>
        </div>

        <CardMedia
          style={{ height: 275 }}
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
                icon={<StarIcon htmlColor='DarkOrange' fontSize="small"/>}
                emptyIcon={<StarBorderIcon fontSize="small"/>}
                readonly 
              />
              <Typography gutterBottom variant="subtitle1">{starRating} ({place.user_ratings_total})</Typography>
            </Box>
            <IconButton size="small" color="primary" onClick={() => setReviewBoxState((value) => !value)}>
               <RateReviewIcon />
             </IconButton>
          </Box>

          {esgRatingElem}
          
          {/* <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">Price</Typography>
            <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
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

          {place?.types?.map(({ name }) => (
            <Chip className="chip" key={name} label={name} size="small" />
          ))}*/}
        </CardContent>

        <CardActions>
          <Button 
            size="small" 
            color="primary" 
            endIcon={<ThreeDRotationIcon color="primary"/>} 
            onClick={() => View3D({place})}
          >
            View Tour
          </Button>
        </CardActions>

      </Card>
      {reviewBoxState && <ReviewBox setReviewBoxState={setReviewBoxState} comments={comments} />}
    </div>
  );
}

export default PlaceDetails;

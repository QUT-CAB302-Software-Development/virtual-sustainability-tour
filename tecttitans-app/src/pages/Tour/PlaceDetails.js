import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip, Rating } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import getESGScore from "../../data/getESGScore";
import './PlaceDetails.css';

function PlaceDetails({ place, setPlaceClicked }) {

  const [modal, setModal] = useState(false);
  const [comments, setComments] = useState([]);
  // GET data from API using React
      useEffect(() => {
          const fetchComments = async () => {
          try {
              const response = await fetch('https://dummyjson.com/comments');
              const data = await response.json();
//              setComments(data);
             if (Array.isArray(data.comments)) {
                    setComments(data.comments);
                  } else {
                    console.error('API response is not an array:', data);
                  }
          } catch(error) {
              console.error('Error fetching comment data', error);
          }

          };
          fetchComments();
      }, []);

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


        {/*  Pop up Feedback form for each location*/}


        <div>

            {!modal && (
                <button
                    className='btn'
                    onClick={() => setModal((value) => !value)}>
                    Feedback Form
                    </button>
            )}
            {modal &&

            <div className='modal'>
            <form>
                <button className='btn'
                        onClick={() => setModal((value) => !value)}
                        >X</button>
                <div className='feedback-form'>
                    <input className='feedback' placeholder="Feedback" name="Feedback" />
                    <label className="placeholder">Feedback</label>
                </div>
                <button className='btn'>Submit feedback</button>

                    <h3>Customer Feedback</h3>
                    {comments.length > 0 ? (
                      comments.map((comment) => (
                        <div key={comment.id}>
                          <p className='comments'>{comment.body}</p>
                        </div>
                      ))
                    ) : (
                      <p>No comments found.</p>
                    )}

            </form>
            </div>
            }

        </div>

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

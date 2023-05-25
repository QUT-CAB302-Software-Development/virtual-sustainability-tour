import React, { useState, useEffect } from 'react';
import { IconButton, Card, CardContent, Typography, CardHeader, CardActions, Button, Box } from '@mui/material';
import { Rating } from '@mui/lab';

import CloseIcon from '@mui/icons-material/Close';
import RateReviewIcon from '@mui/icons-material/RateReview';
import PublishIcon from '@mui/icons-material/Publish';

import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import './ReviewBox.css';
import './Card.css';
import '../../components/Button.css';



function ReviewBox({ place, setReviewBoxState }){
    
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

    const displayedComments = comments?.slice(0,3); // display only three comments
    const placeHolderText = "Enter your review..."


    
    return (
        <Card elevation={6} sx={{ borderRadius: '28px' }} className='card'>

            <CardHeader
                avatar={<RateReviewIcon color="primary" fontSize='large'/>}
                action={
                    <IconButton onClick={() => setReviewBoxState(false)}>
                        <CloseIcon className="close-button" />
                    </IconButton>
                }
                title={<Typography gutterBottom variant="h5">Review This Place!</Typography>}
            />
            <Box display="flex" justifyContent="space-around" margin="-16px">
                <Rating
                    icon={<StarIcon htmlColor='DarkOrange' fontSize="large" />}
                    emptyIcon={<StarBorderIcon fontSize="large" />}
                />
            </Box>

            <CardContent>


                <form>
                    <div className='feedback-form'>
                        <textarea 
                            className='input' 
                            name="Feedback" 
                            placeholder={placeHolderText}
                            required
                        />
                    </div>
                </form>

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
                        sx={{ borderRadius : '16px', paddingX: "16px", paddingY: "8px", }}
                        endIcon={<PublishIcon htmlColor="White" fontSize="large" />}
                        onClick={() => {}}
                    >
                        <Typography variant="subtitle2" sx={{fontWeight: "bold" }} >SUBMIT</Typography>
                    </Button>
                </CardActions>


                <Typography gutterBottom variant="h6" textAlign="center">Other Customer Feedback</Typography> {/*  used dummy data can be improved to look better*/}
                {displayedComments?.map((comment) => (
                    <div key={comment.id}>
                        <p className='comments'>{comment.body}</p>
                    </div>
                ))}

            </CardContent>
        </Card>
    )
};

export default ReviewBox;
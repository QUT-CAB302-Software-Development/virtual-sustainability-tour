import React from "react";
import { IconButton, Card, CardContent, Typography, CardHeader, CardActions, Button } from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
import RateReviewIcon from '@mui/icons-material/RateReview';
import PublishIcon from '@mui/icons-material/Publish';

import './ReviewBox.css';
import './Card.css';
import '../../components/Button.css';



function ReviewBox({ setReviewBoxState, comments }){

    const displayedComments = comments?.slice(0,3); // display only three comments


    
    return (
        <Card elevation={6} sx={{ borderRadius: '28px', height: 'fit-content' }} className='card'>

            <CardHeader
                avatar={<RateReviewIcon color="primary" fontSize='large'/>}
                action={
                    <IconButton onClick={() => setReviewBoxState(false)}>
                        <CloseIcon sx={{ borderRadius: '50%' }} className="close-button" />
                    </IconButton>
                }
                title={<Typography gutterBottom variant="h5">Review This Place!</Typography>
                }/>

            <CardContent>
                <form>
                    <div className='feedback-form'>
                        <input className='feedback' placeholder="Feedback" name="Feedback" />
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

                <Typography gutterBottom variant="h6" className="h3text">Other Customer Feedback</Typography> {/*  used dummy data can be improved to look better*/}
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
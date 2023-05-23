import React, { useState, useEffect } from "react";
import { Box, Typography, Button, IconButton, Card, CardMedia, CardContent, Rating, CardActions } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import './ReviewBox.css';



function ReviewBox({ setReviewBoxState, comments }){

    const displayedComments = comments?.slice(0,3); // display only three comments

    return (
        <Card elevation={6} sx={{ borderRadius: '28px', width: '320px' }}>
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

export default ReviewBox;
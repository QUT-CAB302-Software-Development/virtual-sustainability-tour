import React from "react";
import { IconButton, Card, CardContent, Typography, CardHeader } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';

import './ReviewBox.css';
import './Card.css';
import './ExplainESG.css';


function ExplainESG({ place, setExplainESGState }){



    return (
        <Card elevation={6} sx={{ borderRadius: '28px' }} className='card'>

            <CardHeader
                avatar={<EnergySavingsLeafIcon htmlColor="LimeGreen" fontSize='large'/>}
                action={
                    <IconButton onClick={() => setExplainESGState(false)}>
                        <CloseIcon className="close-button" />
                    </IconButton>
                }
                title={<Typography gutterBottom variant="h5">
                        How Do We Rate Sustainability?
                    </Typography>
                }/>


            <CardContent>
                <Typography gutterBottom variant="subtitle1">
                    https://www.sustainalytics.com/esg-ratings {place.name}
                </Typography>
            </CardContent>
        </Card>
    )
};

export default ExplainESG;
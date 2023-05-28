import React from "react";
import { IconButton, Card, CardContent, Typography, CardHeader } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';

import './ReviewBox.css';
import './Card.css';
import './ExplainESG.css';


const desc = [
    "ESG scores assess a company's performance and impact in areas related to the environment, society, and governance (ESG).",
]


function ExplainESG({ place, setExplainESGState }){



    return (
        <Card elevation={6} sx={{ borderRadius: '28px' }} className='card'>

            <CardHeader
                avatar={<EnergySavingsLeafIcon htmlColor="LimeGreen" sx={{fontSize: '50px'}}/>}
                action={
                    <IconButton onClick={() => setExplainESGState(false)}>
                        <CloseIcon className="close-button" />
                    </IconButton>
                }
                title={<Typography gutterBottom variant="h5">
                        How Do We Rate Sustainability?
                    </Typography>
                }/>


            <CardContent sx={{ marginX: "4px", marginTop: "-24px" }}>
                {desc.map((para) => (
                    <Typography gutterBottom variant="subtitle2" align="center" fontWeight="normal">
                        {para}
                    </Typography>
                ))}
            </CardContent>
        </Card>
    )
};

export default ExplainESG;
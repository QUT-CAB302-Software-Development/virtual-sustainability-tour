import React from 'react';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';
import { Typography } from '@mui/material';



const desc = [
    "ESG scores assess a company's performance and impact in areas related to the environment, society, and governance (ESG).",
    "First, the average ratios for key environmental metrics such as green house gas emissions, water withdrawal, water discharge and operating income across companies in the industry are determined. These ratios serve as benchmarks for comparison.",
    "Then, a normalized score for each metric based on its impact on the company's performance and the industry's average performance is calculated. In addition to the previously described metrics, emissions like SOx, NOx, and VOC are also taken into account.",
    "Weights are assigned to each metric to reflect its importance. The normalized scores for each metric are multiplied by their respective weights, and the weighted scores are summed up to obtain an overall ESG score for the company. This score is rounded, multiplied by a normalization factor, and returned as the final result."
]

function AboutESG() {
    return (
        <div elevation={6} sx={{ borderRadius: '28px' }} className='card'>

                    <Typography gutterBottom variant="h5">
                        How Do We Rate Sustainability?
                    </Typography>
                    <EnergySavingsLeafIcon htmlColor="LimeGreen" fontSize='large'/>
           

                {desc.map((para) => (
                    <Typography gutterBottom variant="subtitle2" align="center" fontWeight="normal">
                        {para}
                    </Typography>
                ))}
        </div>
    );
}
export default AboutESG;
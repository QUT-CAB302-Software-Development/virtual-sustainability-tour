import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Slide, CssBaseline, Stack, Fade } from '@mui/material';

import places from "../../data/hotels_data.json"
import PlaceDetails from './PlaceDetails';
import SearchBox from './SearchBox';
import ReviewBox from './ReviewBox';
import ExplainESG from './ExplainESG';
import View360 from './View360';
import Map from './Map';

import './Tour.css';
import './Card.css';
import '../../App.css';



function Tour() {

    const theme = createTheme();    

    const [placeClicked, setPlaceClicked] = useState(places[0]);
    const [coordinates, setCoordinates] = useState({lat: -27.4711435, lng: 153.0274624});
    const [zoom, setZoom] = useState(16);

    const [view360State, setView360State] = useState(false);
    const [explainESGState, setExplainESGState] = useState(false);
    const [placeDetailsState, setPlaceDetailsState] = useState(false);
    const [reviewBoxState, setReviewBoxState] = useState(false);

    return(
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Map 
                    places={places}
                    zoom={zoom}
                    coordinates={coordinates}
                    setPlaceClicked={setPlaceClicked}
                    setPlaceDetailsState={setPlaceDetailsState}
                    setReviewBoxState={setReviewBoxState}
                    setExplainESGState={setExplainESGState}
                />



                <div className='elements-grid'>



                    <div className='search-container'>
                        <SearchBox 
                            places={places}
                            setZoom={setZoom}
                            setCoordinates={setCoordinates} 
                        />
                    </div>



                    <div className='card-container'>
                    <Stack direction="row" spacing={2}>

                        <Slide direction='right' in={placeDetailsState} mountOnEnter unmountOnExit>
                        <div>
                            <PlaceDetails
                                place={placeClicked}
                                setPlaceDetailsState={setPlaceDetailsState}
                                setReviewBoxState={setReviewBoxState}
                                setExplainESGState={setExplainESGState}
                                setView360State={setView360State}
                            />
                        </div>
                        </Slide>
                        
                        <Slide direction='right' in={explainESGState} mountOnEnter unmountOnExit>
                        <div>
                            <ExplainESG
                                place={placeClicked}
                                setExplainESGState={setExplainESGState}
                            />
                        </div>
                        </Slide>

                        <Slide direction='right' in={reviewBoxState} mountOnEnter unmountOnExit>
                        <div>
                            <ReviewBox
                                place={placeClicked}
                                setReviewBoxState={setReviewBoxState}
                            />
                        </div>
                        </Slide>

                        {/* <Stack spacing={2}>
                        </Stack> */}


                    </Stack>
                    </div>



                    <Fade className='view360-container' in={view360State} mountOnEnter unmountOnExit>
                    <div>
                        <View360 
                            place={placeClicked}
                            setView360State={setView360State}
                        />
                    </div>
                    </Fade>



                </div>
                
                
            </ThemeProvider>
        </motion.div>
    );
}

export default Tour;
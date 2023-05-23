import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Slide, CssBaseline, Stack } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import places from "../../data/hotels_data.json"
import PlaceDetails from './PlaceDetails';
import SearchBox from './SearchBox';
import ReviewBox from './ReviewBox';
import Map from './Map';
import './Tour.css';
import '../../App.css';
import './demo/style.css';
import ExplainESG from './ExplainESG';



function Tour() {

    const theme = createTheme();    

    const [coordinates, setCoordinates] = useState({lat: -27.4711435, lng: 153.0274624});
    const [zoom, setZoom] = useState(16);

    const [explainESGState, setExplainESGState] = useState(false);

    const [placeDetailsState, setPlaceDetailsState] = useState(false);
    const [placeClicked, setPlaceClicked] = useState(places[0]);

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
                                    />
                                </div>
                            </Slide>
                            <Slide direction='right' in={reviewBoxState} mountOnEnter unmountOnExit>
                                <div>
                                    <ReviewBox
                                        place={placeClicked}
                                        setReviewBoxState={setReviewBoxState}
                                        comments={comments}
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
                        </Stack>
                    </div>
                </div>
                
                
            </ThemeProvider>
        </motion.div>
    );
}

export default Tour;
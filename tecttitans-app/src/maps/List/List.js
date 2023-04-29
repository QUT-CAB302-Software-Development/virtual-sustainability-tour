import React, {useState, useEffect, createRef} from "react";
import { CircularProgress, Typography } from '@mui/material';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import './ListStyle.css';

// left hand list area of available locations
function List({places, childClicked, isLoading, type, setType, rating, setRating}) {
    const [elRefs, setElRefs] = useState([]);
    const title = "Places in This Area"; // change to whatever

    useEffect(() => {
        const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || createRef());
        setElRefs(refs);
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [places]);

    return (
        <div className="container">
            <Typography variant="h4">{title}</Typography>
            {isLoading ? (
                <div className="loading">
                    <CircularProgress size="5rem" />
                </div>
            ) : (
                <>
                <div className="formControl">
                    <label>Type </label>
                    <select value={type} onChange={(event) => setType(event.target.value)}>
                        <option value="restaurants">Restaurants</option>
                        <option value="hotels">Hotels</option>
                        <option value="attractions">Attractions</option>
                    </select>
                </div>
                <div className="formControl">
                    <label>Rating </label>
                    <select value={rating} onChange={(event) => setRating(event.target.value)}>
                        <option value={0}>All</option>
                        <option value={3}>Above 3.0</option>
                        <option value={4}>Above 4.0</option>
                        <option value={4.5}>Above 4.5</option>
                    </select>
                </div>
                <div className="list">
                    {places?.map((place, i) => (
                        <div ref={elRefs[i]} key={i} className={`place ${Number(childClicked) === i ? 'active' : ''}`}>
                            <PlaceDetails 
                                place={place}
                                selected={Number(childClicked) === i}
                                refProp={elRefs[i]}
                            />
                        </div>
                    ))}
                </div>
                </>
            )}
        </div>
    );
}

export default List;
import React, {useState, useEffect, createRef} from "react";
import { CircularProgress, Typography } from '@mui/material';
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import './List.css';

// left hand list area of available locations
function List({places, setCoordinates, childClicked, isLoading, type, setType, starRating, setRating, placeholderImage }) {
    const [elRefs, setElRefs] = useState([]);
    const listHeader = "Places in This Area"; // change to whatever

    useEffect(() => {
        const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || createRef());
        setElRefs(refs);
        // ignore warning for not referencing elRefs
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [places]);

    return (
        <div className="container">
            <Typography variant="h4">{listHeader}</Typography>
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
                    <select value={starRating} onChange={(event) => setRating(event.target.value)}>
                        <option value={0}>All</option>
                        <option value={1}>Above 1.0</option>
                        <option value={2}>Above 2.0</option>
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
                                setCoordinates={setCoordinates}
                                selected={Number(childClicked) === i}
                                refProp={elRefs[i]}
                                placeholderImage={placeholderImage}
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

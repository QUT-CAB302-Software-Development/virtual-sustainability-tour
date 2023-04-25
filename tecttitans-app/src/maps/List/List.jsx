import React, {useState, useEffect, createRef} from "react";
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import './ListStyle.css';

// left hand list area of available locations
function List({places, childClicked, isLoading, type, setType, rating, setRating}) {
    const [elRefs, setElRefs] = useState([]);
    // change to whatever
    const title = "Places in This Area";

    useEffect(() => {
        const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || createRef());
        setElRefs(refs);
      }, [places, elRefs]);

    return (
        <div className="container">
            <h4>{title}</h4>
            {isLoading ? (
                <div className="loading">
                    <div className="loader"></div>
                </div>
            ) : (
                <>
                <div className="formControl">
                    <label>Type</label>
                    <select value={type} onChange={(event) => setType(event.target.value)}>
                        <option value="restaurants">Restaurants</option>
                        <option value="hotels">Hotels</option>
                        <option value="attractions">Attractions</option>
                    </select>
                </div>
                <div className="formControl">
                    <label>Rating</label>
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

import React, {useState} from "react";
import {CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Menu, Card } from '@material-ui/core';
import useStyles from './ListStyle';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

// left hand list area of available locations
function List({places}) {
    const classes = useStyles();
    // change to whatever
    const title = "blah blah";
    const locationType = ["restaurants", "hotels", "attractions"];
    const [type, setType] = useState(locationType[0]);
    const [rating, setRating] = useState('');

    return (
        <div className={classes.container}>
            <Typography variant='h4'>{title}</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(event) => setType(event.target.value)}>
                    <MenuItem value={locationType[0]}>{locationType[0]}</MenuItem>
                    <MenuItem value={locationType[1]}>{locationType[1]}</MenuItem>
                    <MenuItem value={locationType[2]}>{locationType[2]}</MenuItem>
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(event) => setRating(event.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.List}>
                {places?.map((place, i) => (
                    <Grid item key={i} xs={12}>
                        <PlaceDetails place={place} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default List;
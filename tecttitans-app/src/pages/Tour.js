import React from 'react';
import '../App.css';
import { CssBaseline, Grid } from '@material-ui/core';

import Header from '../maps/Header/Header';
import List from '../maps/List/List';
import Map from '../maps/Map/Map';

function Tour() {
    return(
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item xs={12} md={4}>
                    <List />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map />
                </Grid>
            </Grid>
        </>
    );
}

export default Tour;
import React from "react";
import {Autocomplete} from '@react-google-maps/api';
import {AppBar, Toolbar, Typography, InputBase, Box} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './HeaderStyle';

// search bar and header functionality
function Header() {
    const classes = useStyles();
    // change to whatever u want
    const headingName = "Travel Advisor";
    const searchPrompt = "Enter a location";
    const searchPlaceholder = "Search...";
    
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5" className={classes.title}>
                    {headingName}
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className={classes.title}>
                        {searchPrompt}
                    </Typography>
                    {/* <Autocomplete> */}
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase placeholder={searchPlaceholder} classes={{ root: classes.inputRoot, input: classes.inputInput }}/>
                        </div>
                    {/* </Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
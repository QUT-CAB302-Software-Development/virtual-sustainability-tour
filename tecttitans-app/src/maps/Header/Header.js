import React, { useState } from "react";
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';

// search bar and header functionality
function Header({ setCoordinates }) {
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autoC) => setAutocomplete(autoC);
  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoordinates({ lat, lng });
  }

  // change to whatever u want
  const headingName = "TOUR";
  const searchPrompt = "Enter a location";
  const searchPlaceholder = "Search...";

  return (
    <AppBar position="static">
      <Toolbar className="toolbar">
        <Typography variant="h5" className="title">
          {headingName}
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className="title">
            {searchPrompt}
          </Typography>
          <Autocomplete
            onLoad={onLoad}
            onPlaceChanged={onPlaceChanged}
          >
            <div className="search">
              <SearchIcon />
              <InputBase
                placeholder={searchPlaceholder}
                classes={{
                  root: "inputRoot",
                  input: "inputInput"
                }}
              />
            </div>
          </Autocomplete>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

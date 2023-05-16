import React, { useState } from "react";
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Box, Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';

// search bar and header functionality
function Header({ setCoordinates }) {
  const [autocomplete, setAutocomplete] = useState('');

  const onLoad = (autoC) => setAutocomplete(autoC);
  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location?.lat();
    const lng = autocomplete.getPlace().geometry.location?.lng();
    setCoordinates({ lat, lng });
  }

  // change to whatever u want
  const searchPlaceholder = "Search...";

  return (
    <AppBar position="static">

      <Toolbar className="toolbar">

          <Autocomplete
            onLoad={onLoad}
            onPlaceChanged={onPlaceChanged}
          >
            <Box className="search">
              <SearchIcon />
              <Input
                type='text'
                placeholder={searchPlaceholder}
                classes={{
                  root: "inputRoot",
                  input: "inputInput"
                }}
              />
            </Box>
          </Autocomplete>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

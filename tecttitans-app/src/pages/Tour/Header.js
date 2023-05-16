import React, { useState } from "react";
import { AppBar, Toolbar, Box, Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css';
import {SearchBox} from './SearchBox';

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

          <SearchBox
            onLoad={onLoad}
            onPlaceChanged={onPlaceChanged}
          >
          </SearchBox>

      </Toolbar>
    </AppBar>
  );
}

export default Header;

import React, { useState } from "react";
import { AppBar, Toolbar, Box, Stack, Autocomplete, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import './SearchBox.css';

// search bar and header functionality
function Header({ places, setZoom, setCoordinates }) {

  const [value, setValue] = useState(null);
  const noResults = "No results";
 
  return (
    <AppBar position="static">
      <Toolbar className="toolbar">
          <Stack className="search">

            <Autocomplete 
              id="locations_search"
              getOptionLabel={(places) => places.name}
              options={places}
              noOptionsText={noResults}

              isOptionEqualToValue={(option, value) => 
                option.name === value.name
              }

              renderOption={(props, places) => (
                <Box 
                  {...props} 
                  key={places.place_id}
                >
                  {places.name}
                </Box>
              )}

              renderInput={(params) => 
                <TextField 
                  {...params} 
                  label={<SearchIcon/>}
                />
              }

              value={value}
              onChange={(_, newValue) => {
                const lat = Number(newValue?.geometry.location.lat);
                const lng = Number(newValue?.geometry.location.lng);
                setCoordinates({ lat, lng });
                setZoom(17);
                setValue(null);
              }}

            />

          </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

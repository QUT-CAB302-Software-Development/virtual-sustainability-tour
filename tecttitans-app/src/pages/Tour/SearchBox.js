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
          <Stack sx={{ borderRadius: '36px' }} className="search">

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
                  inputProps={{
                    ...params.inputProps,
                    style: {
                        padding: "6px",
                    },
                }}
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
              
              sx={{
                // border: "1px solid blue",
                "& .MuiOutlinedInput-root": {
                    borderRadius: "36px",
                    padding: "10px",
                    boxShadow: 4,
                },
                "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                    border: "3px solid Gray",
                },
              }}
            />

          </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

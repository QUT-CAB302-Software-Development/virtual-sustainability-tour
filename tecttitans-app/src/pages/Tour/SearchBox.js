import React, {useState} from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";

const autoC = ['asfda', 'ewqreqr', 'werqweafea', 'eqwfqwhlea','ikyjuokmyu'];

export const SearchBox = () => {
    const [value, setValue] = useState(null);
    console.log(value);
    return(
        <Stack spacing={1} width='275px'>
            <Autocomplete 
                options={autoC}
                renderInput={(params) =>  
                    <TextField {...params} label='Search' /> 
                }
                value={value}
                onChange={(newValue) => setValue(newValue)}
            />
        </Stack>
    );
}
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function NumberInputField(props) {
  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-number"
        label={props.label}
        type="number"
        InputLabelProps={{
          shrink: true,
        }}

        inputProps={{ min: 0 }}
        variant="outlined"
      />
    </Box>
  );
}

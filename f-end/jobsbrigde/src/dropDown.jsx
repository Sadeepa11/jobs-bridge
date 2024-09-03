import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLabels(props) {
  const [type, setType] = React.useState('');

  const handleChange = (event) => {
    
    setType(event.target.value);
    alert(type);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 220 }}>
        <InputLabel id="demo-simple-select-helper-label">{props.label}</InputLabel>
        <Select
         
          label={props.label}
          onChange={handleChange}
        >
    
          <MenuItem value={"1"}>Full-Time</MenuItem>
          <MenuItem value={"2"}>Part-Time</MenuItem>
          
        </Select>
       
      </FormControl>
    
    </div>
  );
}

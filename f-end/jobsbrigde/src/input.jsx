
import * as React from 'react';

import TextField from '@mui/material/TextField';

export default function FormPropsTextFields(props) {
  return (



    <TextField
         
          label={props.holder}
          variant="filled"
          className='col-12 mt-4'
          onChange={props.change}
        />

    
  );
}

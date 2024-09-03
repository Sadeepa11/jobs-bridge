
import * as React from 'react';

import TextField from '@mui/material/TextField';

export default function PasswordField(props) {
    return (

        <TextField
           
            label={props.holder}
            type="password"
            autoComplete="current-password"
            variant="filled"
            className='col-12 mt-4'
            onChange={props.change}

        />
    );
}

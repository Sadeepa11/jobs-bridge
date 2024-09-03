import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function LimitTags(props) {
  return (
    <Autocomplete
    
      multiple
      limitTags={5}
      id="multiple-limit-tags"
      options={Skills}
      getOptionLabel={(option) => option.title}
      defaultValue={[]}
      renderInput={(params) => (
        <TextField {...params} label="Skills" placeholder="Skills" className="col-12" />
      )}
    
    />
  );
}


const Skills = [
  { title: 'Web Development'},
  {title: "Mobile App Development"},
  {title: "Software App Development"},
  {title: "MERN Stack"},
  {title: "PHP"},
  {title: "HTML"},
  {title: "CSS"},
  {title: "React-Native"},
  {title: "JavaScript"},
  {title: "Java"},
  {title: "MySQL"},

];
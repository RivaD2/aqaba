import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 80,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  label: {
    color:'black',
    "&.Mui-focused": {
      color: "black"
    }
  },
}));

const SimpleSelect = (props) => {
  const classes = useStyles();
  const onChange = e => {
    props.onChange(e.target.value);
  };

  return (
    <div>
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label">{props.label}</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={props.selected}
          onChange={onChange}
          className={classes.label}
        >
           {props.items.map(item => (
             <MenuItem key={item} value={item}>{item}</MenuItem>
           ))}
        </Select>
      </FormControl>
    </div>
  )
}

export default SimpleSelect;
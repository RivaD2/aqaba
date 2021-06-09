import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Hidden } from '@material-ui/core';

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
  const theme = useTheme();
  const onChange = e => {
    props.onChange(e.target.value);
  };
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <div>
      <FormControl variant="filled" className={classes.formControl} size="small">
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
           {matches}
        </Select>
      </FormControl>
    </div>
  )
}

export default SimpleSelect;
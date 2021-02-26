import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Accordian from './Accordian';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
  },
}));

export default function TextFieldSizes() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-full-width"
          defaultValue="First Name"
          style={{margin: 8, width: '30%'}}
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
        id="outlined-full-width"
        defaultValue="Last Name"
        style={{margin: 8, width: '30%'}}
        variant="outlined"
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="outlined-full-width"
        defaultValue="Address"
        style={{margin: 8, width: '30%'}}
        variant="outlined"
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="outlined-full-width"
        style={{margin: 8, width: '30%'}}
        variant="outlined"
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
     <Accordian />
    </form>
  );
}
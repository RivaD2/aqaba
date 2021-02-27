import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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

const TextFieldSizes = props => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-full-width"
          defaultValue={props.field.label}
          style={{margin: 8, width: '30%'}}
          variant="outlined"
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
    </form>
  );
}

export default TextFieldSizes;
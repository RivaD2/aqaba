import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
  },
}));

const TextFieldSizes = props => {
  const classes = useStyles();

  return (
    <div>
      <Hidden mdDown>
        <form className={classes.root} noValidate autoComplete="off" >
            <TextField
              id="outlined-full-width"
              placeholder={props.field.label}
              htmlFor={props.field.label}
              style={{width: '100%'}}
              variant="outlined"
              type="text"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
        </form>
      </Hidden>
      <Hidden only="lg">
        <form className={classes.root} noValidate autoComplete="off" >
          <TextField
            id="outlined-full-width"
            placeholder={props.field.label}
            htmlFor={props.field.label}
            style={{width: '50%'}}
            variant="outlined"
            type="text"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
      </Hidden>
    </div>
  );
}

export default TextFieldSizes;
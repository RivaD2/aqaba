import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    fontFamily:['Amiri', 'serif'],
    width:'100px'
  },
}));

const IconLabelButtons = () => {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        REMOVE 
      </Button>
    </div>
  )
}
export default IconLabelButtons;
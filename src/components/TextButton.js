import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      fontFamily:['Amiri', 'serif'],
      border: '1px solid white',
      color: 'white'
    },
  },
}));

const TextButton = props => {
  const {onClick, text} = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button onClick={onClick}>{text}</Button>
    </div>
  );
}

export default TextButton;
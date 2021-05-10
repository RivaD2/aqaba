import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Hidden } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      fontFamily:['Amiri', 'serif'],
      border: '2px solid white',
      color: 'white',
      fontSize:'16pt',
      fontWeight: 'bold',
      backgroundColor: '#DC9B56',
      whiteSpace: 'nowrap',
      width: '98%'
    },
  },
  underline: {
    "&&&:before": {
      borderBottom: "none"
    },
    "&&:after": {
      borderBottom: "none"
    }
  }
}));


const TextButton = props => {
  const {onClick, text, className} = props;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hidden smDown>
        <Button 
          onClick={onClick} 
          defaultValue="default text"
          className={className}>
          {text}
          {matches}
        </Button>
      </Hidden>
    </div>
  );
}

export default TextButton;
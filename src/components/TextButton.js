import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
      width: '100%'
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
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button 
        onClick={onClick} 
        defaultValue="default text"
        className={className}>
        {text}
      </Button>
    </div>
  );
}

export default TextButton;
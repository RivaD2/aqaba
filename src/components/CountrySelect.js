import React from 'react'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const countryToFlag = isoCode => {
  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
    : isoCode;
}

const useStyles = makeStyles((theme:Theme) => 
createStyles({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 10,
      fontSize: 18,
    },
  },
  root:{
    [theme.breakpoints.between("sm", "md")]:{
      width:'100px'
    }
  }
}));


const CountrySelect = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Autocomplete
      id="country-select"
      options={countries}
      classes={{
        option: classes.option,
      }}
      autoHighlight
      getOptionLabel={option => option.label}
      renderOption={option => (
        <React.Fragment>
          <span>{countryToFlag(option.code)}</span>
          {option.label} ({option.code}) +{option.phone}
        </React.Fragment>
      )}
      renderInput= {params => (
        <TextField
          {...params}
          label="Choose a country"
          variant="outlined"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', 
          }}
        />
      )}
    />
    </div>
  );
}

const countries = [
  { code: 'US', label: 'United States', phone: '1', suggested: true },
  { code: 'CA', label: 'Canada', phone: '1', suggested: true }
];

export default CountrySelect;

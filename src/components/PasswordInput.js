import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FormControl from "@material-ui/core/FormControl";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
}));

/**
 * Renders the PassWordInput component
 */
const PassWordInput = (props) => {
  const classes = useStyles();

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  /**
   * Sets new state for the input
   * @param {string} prop password
   * @param {event} event event for when value of input changes
   */
  const handleChange = (prop) => (event) => {
    console.log(event, event);
    setValues({ ...values, [prop]: event.target.value });
  };

  /**
   * Shows password entered into input when clicked
   */
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.root}>
      <div>
        <FormControl className={classes.root} variant="outlined">
          {/* <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel> */}
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            placeholder="Password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
    </div>
  );
};

export default PassWordInput;

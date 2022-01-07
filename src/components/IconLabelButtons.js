import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  button: {
    // margin: theme.spacing(1),
    fontFamily: ["Amiri", "serif"],
    width: "100px",
  },
}));

const IconLabelButtons = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="default"
        onClick={props.onClick}
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        REMOVE
      </Button>
    </div>
  );
};
export default IconLabelButtons;

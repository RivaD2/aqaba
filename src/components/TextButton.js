import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Hidden } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import "./TextButton.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      fontFamily: ["Amiri", "serif"],
      border: "2px solid white",
      color: "white",
      fontSize: "16pt",
      fontWeight: "bold",
      backgroundColor: "#DC9B56",
      whiteSpace: "nowrap",
      width: "100%",
    },
  },
  underline: {
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderBottom: "none",
    },
  },
}));

const TextButton = (props) => {
  const { onClick, text } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hidden smUp>
        <Button
          onClick={onClick}
          defaultValue="default text"
          style={{ padding: "24px" }}
          className={"text-button-small"}
        >
          {text}
        </Button>
      </Hidden>
      <Hidden xsDown>
        <Button
          onClick={onClick}
          defaultValue="default text"
          className="text-button"
        >
          {text}
        </Button>
      </Hidden>
    </div>
  );
};

export default TextButton;

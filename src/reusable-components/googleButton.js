import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Google from "../images/google.svg";
const styles = theme => ({
  root: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: "5px",
    border: "1px solid #5490F8",
    color: "#5490F8",
    height: "55px",
    "&:focus": {
      outline: "none"
    },
    "&:hover": {
      backgroundColor: "white"
    }
  }
});

const GoogleButton = function(props) {
  const { classes } = props;
  return (
    <Button className={classes.color} {...props}>
      <img src={Google} width="25" className="mr-2" /> {props.name}
    </Button>
  );
};
export default withStyles(styles)(GoogleButton);

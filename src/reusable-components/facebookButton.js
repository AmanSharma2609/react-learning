import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Facebook from "../images/facebook.svg";

const styles = theme => ({
  root: {
    backgroundColor: "white",
    width: "100%",
    borderRadius: "5px",
    border: "1px solid #5B78A2",
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

const FacebookButton = function(props) {
  const { classes } = props;
  return (
    <Button className={classes.color} {...props}>
      <img src={Facebook} width="25" className="mr-1" />
      {props.name}
    </Button>
  );
};
export default withStyles(styles)(FacebookButton);

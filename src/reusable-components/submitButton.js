import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import transitions from "@material-ui/core/styles/transitions";

const styles = theme => ({
  root: {
    backgroundColor: "#E18F68",
    width: "100%",
    borderRadius: "5px",
    color: "white",
    fontWeight: "600",
    height: "55px",
    "&:focus": {
      outline: "none"
    },
    "&:hover": {
      backgroundColor: "#CD825F",
      transition: "backgroundColor 100ms linear "
    }
  }
});

const SubmitButton = function(props) {
  const { classes } = props;
  return (
    <Button className={classes.root} {...props}>
      {props.name}
    </Button>
  );
};
export default withStyles(styles)(SubmitButton);

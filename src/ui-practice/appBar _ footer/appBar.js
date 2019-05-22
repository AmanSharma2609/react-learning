import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/styles";
import IconButton from "@material-ui/core/IconButton";
import AppBar from "@material-ui/core/AppBar";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircle from "@material-ui/icons/AccountCircle";
import CustomButton from "../../reusable-components/button";
import WebLogo from "../../images/web-logo.png";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    position: "fixed",
    top: "0px",
    backgroundColor: "#FFFFFF",
    zIndex: "5"
  },
  appBarStyle: {
    display: "flex",
    justifyContent: "center",
    height: "65px",
    backgroundColor: "#FFFFFF",
    paddingLeft: "10%",
    paddingRight: "10%"
  },
  grow: {
    flexGrow: 1
  },
  buttonMargin: {
    marginRight: "3rem"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  popUp: {
    top: "50px !important"
  },
  liFocus: {
    "&:focus": {
      backgroundColor: "white"
    }
  },
  menuButton: {
    "&:focus": {
      outline: "none"
    }
  }
}));

function PrimaryAppbar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [showProfile, setProfile] = React.useState(false);

  function handleShowProfile() {
    setProfile(true);
  }

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      disableAutoFocusItem={true}
    >
      <MenuItem className={classes.liFocus}>
        <span>PARTIES</span>
      </MenuItem>
      <MenuItem onClick={() => props.history.push("/Candidate")}>
        <span>CANDIDATES</span>
      </MenuItem>
      <MenuItem>
        <span>ELECTIONS</span>
      </MenuItem>
      <MenuItem onClick={() => props.history.push("/Redux")}>
        <span>REDUX</span>
      </MenuItem>
      <MenuItem onClick={() => props.history.push("/Login")}>
        <span>LOGIN</span>
      </MenuItem>
    </Menu>
  );
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBarStyle} color="inherit">
        <Toolbar color="inherit">
          <div onClick={() => props.history.push("/")}>
            <img src={WebLogo} width="150" />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <div className={`${classes.buttonMargin} d-flex`}>
              <CustomButton name={"PARTIES"} />
            </div>
            <div
              onClick={() => props.history.push("/Candidate")}
              className={`${classes.buttonMargin} d-flex`}
            >
              <CustomButton name={"CANDIDATES"} />
            </div>
            <div className={`${classes.buttonMargin} d-flex`}>
              <CustomButton name={"ELECTIONS"} />
            </div>
            <div className={`${classes.buttonMargin} d-flex`}>
              <CustomButton
                onClick={() => props.history.push("/Redux")}
                name={"REDUX"}
              />
            </div>
            <CustomButton
              onClick={() => props.history.push("/Login")}
              name={"LOGIN"}
              color="inherit"
            />
            <div>
              {showProfile ? (
                <IconButton
                  aria-owns={isMenuOpen ? "material-appbar" : undefined}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              ) : null}
            </div>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              className={classes.menuButton}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
export default withRouter(PrimaryAppbar);

import React from "react";
import { AppBar, Toolbar, CssBaseline, Typography, Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import IconButton from "@material-ui/core/IconButton";
import RoomIcon from "@material-ui/icons/Room";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

export default function Navbar() {
      const classes = useStyles();
  //   const classes = useStyles();
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
    const handleLogout = async () => {
        try {
        await logOut();
        navigate("/");
        } catch (error) {
        console.log(error.message);
        }
    };
    return (
      <AppBar position="static">
        {/* Hello Welcome <br /> */}
        USER = - - {user && user.email}
        <CssBaseline />
        <Toolbar>
          <Typography variant="h4" className={classes.logo}>
            SCHOOL
          </Typography>
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              STUDENTS
            </Link>
            <Link to="/about" className={classes.link}>
              EMPLOYEES
            </Link>
            <Link to="/contact" className={classes.link}>
              PARENTS
            </Link>
          </div>
          <Button
            variant="primary"
            onClick={handleLogout}
          >
            Log out
          </Button>
        </Toolbar>
      </AppBar>
    );
};

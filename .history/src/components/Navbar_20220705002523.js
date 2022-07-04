import React from "react";
import { AppBar, Toolbar, CssBaseline, Typography, Button, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

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
        Hello Welcome <br />
        {user && user.email}
        <CssBaseline />
        <Toolbar>
          <Typography variant="h4" className={classes.logo}>
            Navbar
          </Typography>
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0z" fill="" />
            <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />

          </svg>

        </Toolbar>
      </AppBar>
    );
};

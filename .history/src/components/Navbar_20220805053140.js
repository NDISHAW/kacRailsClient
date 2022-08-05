import React from "react";
import { NavLink } from "react-router-dom";

export const MainNav = () => {
  return (
    <div className="nav main-nav">
      <span className="main-title homepage">
        my <i>travelogue</i>
      </span>
      <span className="container">
        <NavLink to="/login" className="link user-btn login-btn">
          Log In
        </NavLink>
        <NavLink to="/signup" className="link user-btn signup-btn">
          Sign Up
        </NavLink>
      </span>
    </div>
  );
};

// import React from "react";
// import { AppBar, Toolbar, CssBaseline, Typography, Button, makeStyles } from "@material-ui/core";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router";
// import { useUserAuth } from "../context/UserAuthContext";

// const useStyles = makeStyles((theme) => ({
//   navlinks: {
//     marginLeft: theme.spacing(10),
//     display: "flex",
//   },
//   logo: {
//     flexGrow: "1",
//     cursor: "pointer",
//   },
//   link: {
//     textDecoration: "none",
//     color: "white",
//     fontSize: "20px",
//     marginLeft: theme.spacing(20),
//     "&:hover": {
//       color: "yellow",
//       borderBottom: "1px solid white",
//     },
//   },
// }));

// export default function Navbar() {
//       const classes = useStyles();
//   //   const classes = useStyles();
//   const { logOut, user } = useUserAuth();
//   const navigate = useNavigate();
//     const handleLogout = async () => {
//         try {
//         await logOut();
//         navigate("/");
//         } catch (error) {
//         console.log(error.message);
//         }
//     };
//     return (
//       <AppBar position="static">
//         {/* Hello Welcome <br /> */}
//         USER = - - {user && user.email}
//         <CssBaseline />
//         <Toolbar>
//           <Typography variant="h4" className={classes.logo}>
//             SCHOOL
//           </Typography>
//           <div className={classes.navlinks}>
//             <Link to="/home" className={classes.link}>
//               STUDENTS
//             </Link>
//             <Link to="/Employee" className={classes.link}>
//               EMPLOYEES
//             </Link>
//             <Link to="/parents" className={classes.link}>
//               PARENTS
//             </Link>
//             <Button variant="contained" onClick={handleLogout}>
//               Log out
//             </Button>
//           </div>
//         </Toolbar>
//       </AppBar>
//     );
// };

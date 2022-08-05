import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./components/Home";
import { fetchCurrentUser } from "./actions/userActions";
// import UserContainer from "./components/UserContainer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Login from "./components/Login";
import MTStudet from "./components/school/MTStudet";

class App extends Component {
  componentDidMount() {
    let token = localStorage.getItem("token");
    let user = localStorage.getItem("user");
    if (token && user) {
      this.props.fetchCurrentUser();
    }
  }

  render() {
    const theme = createTheme({
      typography: { fontFamily: "Poppins" },
      palette: { primary: { main: "#0F43F9" } },
    });

    return (
      <div>
        <ThemeProvider theme={theme}>
          <div>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Login />} />
              {/* <Route path="/signup" element={<Signup />} /> */}
              <Route path="/home" element={<Home />} />
              <Route path="/MTStudet" element={<MTStudet />} />
              {/* <Route path="/Employee" element={<Employee />} />
             <Route path="/parents" element={<Parents />} />parents */}
            </Routes>
          </div>
        </ThemeProvider>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  isloggedIn: state.user.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCurrentUser: () => dispatch(fetchCurrentUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// import { Container, Row, Col } from "react-bootstrap";
// import { Routes, Route } from "react-router-dom";
// import "./App.css";
// import Home from "./components/Home";
// import Login from "./components/Login";
// // import Signup from "./components/Signup";
// import ProtectedRoute from "./components/ProtectedRoute";
// import { UserAuthContextProvider } from "./context/UserAuthContext";
// // import Employee from "./components/school/Employee";
// import MTStudet from "./components/school/MTStudet";
// // import Parents from "./components/school/Parents"

// function App() {
//   return (
//     <Container>
//       <Row>
//         <Col>
//           <UserAuthContextProvider>
//             <Routes>
//               <Route
//                 path="/home"
//                 element={
//                   <ProtectedRoute>
//                     <Home />
//                     {/* <MTStudet /> */}
//                     {/* <Employee /> */}
//                   </ProtectedRoute>
//                 }
//               />
//               <Route path="/" element={<Login />} />
//               {/* <Route path="/signup" element={<Signup />} /> */}
//               <Route path="/home" element={<Home />} />
//               <Route path="/MTStudet" element={<MTStudet />} />
//               {/* <Route path="/Employee" element={<Employee />} />
//               <Route path="/parents" element={<Parents />} />parents */}
//             </Routes>
//           </UserAuthContextProvider>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default App;

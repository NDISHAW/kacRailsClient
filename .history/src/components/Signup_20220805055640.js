import React, { Component } from "react";
import { SecondNav } from "./SecondNav";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createUser } from "../actions/userActions";
import { MainFooter } from "./MainFooter";

class Signup extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createUser(this.state);
    this.setState({ first_name: "", last_name: "", email: "", password: "" });
  };

  render() {
    return (
      <div className="signup-page">
        <SecondNav />
        <div className="login-signup">
          <div className="login-signup-container">
            <div className="title">Sign Up</div>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="First Name"
                name="first_name"
                onChange={this.handleChange}
                value={this.state.first_name}
              />
              <input
                type="text"
                placeholder="Last Name"
                name="last_name"
                onChange={this.handleChange}
                value={this.state.last_name}
              />
              <input
                type="text"
                placeholder="Email Address"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
              />
              <button type="submit">Sign Up</button>
            </form>
            <div className="alt">
              Already have an account?{" "}
              <NavLink to="/login" className="link">
                Log in
              </NavLink>
            </div>
          </div>
        </div>
        <MainFooter />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { createUser: (userInfo) => dispatch(createUser(userInfo)) };
};

export default connect(null, mapDispatchToProps)(Signup);

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Form, Alert } from "react-bootstrap";
// import { Button } from "react-bootstrap";
// // import { useUserAuth } from "../context/UserAuthContext";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [error, setError] = useState("");
//   const [password, setPassword] = useState("");
//   // const { signUp } = useUserAuth();
//   let navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       await signUp(email, password);
//       navigate("/");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <>
//       <div className="p-4 box">
//         <h2 className="mb-3">Firebase Auth Signup</h2>
//         {error && <Alert variant="danger">{error}</Alert>}
//         <Form onSubmit={handleSubmit}>
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Control
//               type="email"
//               placeholder="Email address"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Control
//               type="password"
//               placeholder="Password"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </Form.Group>

//           <div className="d-grid gap-2">
//             <Button variant="primary" type="Submit">
//               Sign up
//             </Button>
//           </div>
//         </Form>
//       </div>
//       <div className="p-4 box mt-3 text-center">
//         Already have an account? <Link to="/">Log In</Link>
//       </div>
//     </>
//   );
// };

// export default Signup;

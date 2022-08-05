import React, { Component } from "react";
import { SecondNav } from "./SecondNav";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logInUser } from "../actions/userActions";
import { MainFooter } from "./MainFooter";

class Login extends Component {
  state = {
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
    this.props.logInUser(this.state);
    this.setState({ email: "", password: "" });
  };

  render() {
    return (
      <div className="login-page">
        {/* <SecondNav /> */}
        <div className="login-signup">
          <div className="login-signup-container">
            <div className="title">Log In</div>
            <form onSubmit={this.handleSubmit}>
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
              <button type="submit">Log In</button>
            </form>
            <div className="alt">
              Don't have an account?{" "}
              <NavLink to="/signup" className="link">
                Sign Up
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
  return { logInUser: (userInfo) => dispatch(logInUser(userInfo)) };
};

export default connect(null, mapDispatchToProps)(Login);

// import { Link } from "react-router-dom";
// import { useState } from "react";

// function Login({ onLogin }) {
//   const [username, setUsername] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     fetch("/sessions", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username }),
//     }).then((r) => {
//       if (r.ok) {
//         r.json().then((user) => onLogin(user));
//       }
//     });
//   }

//   return (
//     <div className="login">
//       <span className="loginTitle">Login</span>
//       <form onSubmit={handleSubmit} className="loginForm">
//         <label>Username</label>
//         <input
//           type="text"
//           id="username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           className="loginInput"
//           placeholder="Enter your username..."
//         />
//         <label>Passowrd</label>
//         <input
//           type="password"
//           className="loginInput"
//           placeholder="Enter your password..."
//         />
//         <button className="loginButton">Login</button>
//       </form>
//       <button className="loginRegisterButton">
//         <Link className="link" to="/register">
//           Register
//         </Link>
//       </button>
//     </div>
//   );
// }

// export default Login;

import {Link} from "react-router-dom";
import { useState } from "react";
import "./login.css"




function Login({ onLogin }) {
  const [username, setUsername] = useState("");

function handleSubmit(e) {
  e.preventDefault();
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username }),
  }).then((r) => {
    if (r.ok) {
      r.json().then((user) => onLogin(user));
    }
  });
}


  return (
    <div className="login">
        <span className="loginTitle">Login</span>
         <form onSubmit={handleSubmit} className="loginForm">
            <label>Username</label> 
            <input type="text" 
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="loginInput" placeholder="Enter your username..."/>
            <label>Passowrd</label> 
            <input type="password" className="loginInput" placeholder="Enter your password..."/>
        <button className="loginButton">Login</button>
         </form>
         <button className="loginRegisterButton">
           <Link className="link"  to="/register">Register</Link>
           </button>
    </div>
  )
}

export default Login

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Form, Alert } from "react-bootstrap";
// import { Button } from "react-bootstrap";
// import GoogleButton from "react-google-button";
// import { useUserAuth } from "../context/UserAuthContext";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const { logIn, googleSignIn } = useUserAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       await logIn(email, password);
//       navigate("/home");
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleGoogleSignIn = async (e) => {
//     e.preventDefault();
//     try {
//       await googleSignIn();
//       navigate("/home");
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   return (
//     <>
//       <div className="container mt-5">
//         <div className="row d-flex justify-content-center mt-2">
//           <div className="col-md-4">
//             <h2 className="mb-3 text-white"> Login</h2>
//             {error && <Alert variant="danger">{error}</Alert>}
//             <Form onSubmit={handleSubmit}>
//               <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Control
//                   type="email"
//                   placeholder="Email address"
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="formBasicPassword">
//                 <Form.Control
//                   type="password"
//                   placeholder="Password"
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </Form.Group>

//               <div className="d-grid gap-2">
//                 <Button variant="primary" type="Submit">
//                   Log In
//                 </Button>
//               </div>
//             </Form>
//             <hr />
//             <div>
//               <GoogleButton
//                 className="g-btn"
//                 type="dark"
//                 onClick={handleGoogleSignIn}
//               />
//             </div>
//           </div>
//         </div>

//         <div className="p-4 box mt-3 text-center text-white">
//           Don't have an account? <Link to="/signup">Sign up</Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Login;

import { Link } from "react-router-dom";
import { useState } from "react";


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
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="loginInput"
          placeholder="Enter your username..."
        />
        <label>Passowrd</label>
        <input
          type="password"
          className="loginInput"
          placeholder="Enter your password..."
        />
        <button className="loginButton">Login</button>
      </form>
      {/* <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button> */}
    </div>
  );
}

export default Login;

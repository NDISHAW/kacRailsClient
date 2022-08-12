import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postUser } from "../redux/actions/user/userAction";

function Signin(props) {
  const [user_name, setUserName] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState(false);

  // ---------------------------------------------------------
  const user = useSelector((state) => {
    console.log("useSelector", state.userReducer);
    return state.userReducer.user;
  });
  const dispatch = useDispatch();
  // ---------------------------------------------------------

  const handleUserNameChange = (e) => {
    setUserName(e.target.value);
  };
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleAdminChange = (e) => {
    setAdmin(admin === false ? true : false);
  };

  function unCheck() {
    // debugger
    var x = document.getElementsByClassName("checkbox")[0];
    // for(let i=0; i<=x.length; i++) {
    // x[i].checked = false;
    // }
    x.checked = false;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      user_name,
      first_name,
      last_name,
      email,
      password,
      admin,
    };
    dispatch(postUser(data));

    // console.log("handleSubmit", user)

    setUserName("");
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    unCheck(); //reset Admin to false
  };

  return (
    <div className="signinContainer">
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>Username</label>
          <input
            type="text"
            onChange={handleUserNameChange}
            value={user_name}
          />
        </div>
        <div className="field">
          <label>First Name</label>
          <input
            type="text"
            onChange={handleFirstNameChange}
            value={first_name}
          />
        </div>
        <div className="field">
          <label>Last Name</label>
          <input
            type="text"
            onChange={handleLastNameChange}
            value={last_name}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input type="email" onChange={handleEmailChange} value={email} />
        </div>
        <div className="field">
          <label>Password</label>
          <input
            type="password"
            onChange={handlePasswordChange}
            value={password}
          />
        </div>
        <div className="field">
          <label>Admin</label>
          <input
            type="checkbox"
            onChange={handleAdminChange}
            value={admin}
            className="checkbox"
          />
        </div>
        <div className="signupButton">
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default Signin;

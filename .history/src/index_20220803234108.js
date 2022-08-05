import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import App from "./App";
import MTStudet from './components/MTStudet';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MTStudet />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

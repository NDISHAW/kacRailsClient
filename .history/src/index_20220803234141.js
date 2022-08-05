import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import App from "./App";
import MTStudet from '../.history/src/components/school/MTStudet_20220803182419';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MTStudet
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

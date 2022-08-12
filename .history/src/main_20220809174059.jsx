import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
ReactDOM.render(
  <React.StrictMode>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
  </React.StrictMode>,
  document.getElementById("root")
);
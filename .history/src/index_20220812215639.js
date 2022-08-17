import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// import React from 'react';
// import ReactDOM from 'react-dom';
// // import './index.css';
// import App from './App';

// // Redux:
// import { createStore, applyMiddleware } from 'redux';
// // Thunk:
// import thunk from "redux-thunk";
// import { Provider } from 'react-redux';
// // Reducers:
// import rootReducer from './redux/reducers/combineReducers';

// const store = createStore(rootReducer, applyMiddleware(thunk));

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//     <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

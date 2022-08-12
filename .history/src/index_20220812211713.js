import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const store = createStore(rootReducer, applyMiddleware(thunk));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
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

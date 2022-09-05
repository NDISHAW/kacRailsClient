import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { ContextProvider } from './context/ContextProvider'
ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>

        <App />
      </Router>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
// sudo apt autoremove libllvm10


// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

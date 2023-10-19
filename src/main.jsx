import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Store from "../src/Store/Store.jsx";
import { restoreState } from "./Store/RestoreStore.jsx";

import "./index.css";
import { Provider } from "react-redux";

const persistedState = localStorage.getItem('reduxState');
if (persistedState) {
  Store.dispatch(restoreState(JSON.parse(persistedState))); // Dispatch the 'RESTORE_STATE' action
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
    <App />
    </Provider>
   
  </React.StrictMode>
);

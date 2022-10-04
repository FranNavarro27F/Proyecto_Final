import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import store from "./Redux/Store/store";
import axios from "axios";
import dotenv from "dotenv";

// import "bootswatch/dist/";

dotenv.config();

//console.log("******",process.env.REACT_APP_API, process.env.NODE_ENV, "******")

// usando el back deploy ------------------------------------
// axios.defaults.baseURL = process.env.REACT_APP_API;
//-----------------------------------------------------------

// usando el back LOCAL -------------------------------------
axios.defaults.baseURL = "http://localhost:3001";
//-----------------------------------------------------------

ReactDOM.render(
  <Auth0Provider
    domain="dev-mp-bx1eb.us.auth0.com"
    clientId="Z0yFy4SxEZTYErE6Lji63C3bdWsmtWGK"
    redirectUri={window.location.origin}
  >
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById("root")
);

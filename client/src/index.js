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
dotenv.config();

axios.defaults.baseURL =
  process.env.REACT_APP_API || "https://programax.up.railway.app";

ReactDOM.render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-usdtec3d.us.auth0.com"
      clientId="ceUmQMblVekchZ1MJc9PiGzSmZarFExd"
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

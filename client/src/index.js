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

axios.defaults.baseURL =
"https://programax.vercel.app"||
  process.env.REACT_APP_API ||
<<<<<<< HEAD
=======
  "https://programax.up.railway.app/" ||
>>>>>>> fad3e57bdf81b501dd1dca5b8fadfef8cda84f40
  "http://localhost:3001";

ReactDOM.render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-mp-bx1eb.us.auth0.com"
      clientId="Z0yFy4SxEZTYErE6Lji63C3bdWsmtWGK"
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

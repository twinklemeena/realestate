import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-4wnp04ibzqjq4i0e.us.auth0.com"
      clientId="99PwYBks8AVCrUZWQsTOAerQqrXV1bZI"
      authorizationParams={{
        redirect_uri: "http://localhost:5173"
      }}
      audience="https://dev-4wnp04ibzqjq4i0e.us.auth0.com/api/v2/"
      scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

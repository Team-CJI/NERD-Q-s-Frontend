import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "App";
import { Auth0Provider } from "@auth0/auth0-react";

// import './TriviaIndex.css'
// import Trivia from './Trivia'
// import registerServiceWorker from './registerServiceWorker'

// Soft UI Context Provider
import { MaterialUIControllerProvider } from "context";

const domain = process.env.REACT_APP_AUTH_DOMAIN;
const clientId = process.env.REACT_APP_AUTH_CLIENT_ID;

ReactDOM.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin}>
        <App />
      </Auth0Provider>
    </MaterialUIControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

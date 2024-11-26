import React from 'react';
import ReactDOM from 'react-dom/client'; // Use react-dom/client instead of react-dom
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { MsalProvider } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfigB2C, msalConfigEntraID } from './authConfig';

// Toggle between B2C and Entra ID configurations
const authType = process.env.REACT_APP_AUTH_TYPE || 'b2c'; // Set 'b2c' or 'entra' in .env
const msalConfig = authType === 'b2c' ? msalConfigB2C : msalConfigEntraID;

const msalInstance = new PublicClientApplication(msalConfig);

const root = ReactDOM.createRoot(document.getElementById('root')); // Use createRoot
root.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MsalProvider>
  </React.StrictMode>
);

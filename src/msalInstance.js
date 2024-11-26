import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfigEntraID } from './authConfig'; // Adjust the path if needed

// Create the instance
const entraMsalInstance = new PublicClientApplication(msalConfigEntraID);

// Log initialization for debugging
console.log('Initializing MSAL instance...');
await entraMsalInstance.initialize(); // Await initialization (important)

export default entraMsalInstance;

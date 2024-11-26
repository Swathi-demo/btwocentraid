export const msalConfigB2C = {
    auth: {
      clientId: "0b8eead5-6c3a-4007-a033-9fc609ceaca4",
      authority: "https://pcsconsumer.b2clogin.com/pcsconsumer.onmicrosoft.com/B2C_1_ecom123",
      knownAuthorities: ["pcsconsumer.b2clogin.com"],
      redirectUri: "http://localhost:3000/",
    },
    cache: {
      cacheLocation: "sessionStorage",
      storeAuthStateInCookie: false,
    },
  };
  
  export const msalConfigEntraID = {
    auth: {
      clientId: "b54e91e7-937e-4b43-9f33-d3f459abeef3",
      authority: "https://login.microsoftonline.com/316f06ca-066c-4a48-8790-57b76d684796",
      redirectUri: "http://localhost:3000/",
    },
    cache: {
      cacheLocation: "localStorage",
      storeAuthStateInCookie: false,
    },
  };
  

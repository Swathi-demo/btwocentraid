// App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AdvancedAuthentication from './pages/AdvancedAuthentication';
import Footer from './components/Footer';
import OurCompany from './pages/OurCompany';
import { useIsAuthenticated, useMsal } from '@azure/msal-react';
import SinglesignOn from './pages/SinglesignOn';
import ProfilePage from './pages/ProfilePage';
import  { useState , useEffect } from 'react';

function App() {
  const isAuthenticated = useIsAuthenticated();
  const { accounts , instance} = useMsal();
  const [user, setUser] = useState(null);
  const [userDetails, setUserDetails] = useState(null); 
 
  useEffect(() => {
     // Update userDetails after login
    if (isAuthenticated && accounts && accounts.length > 0) {
      const account = accounts[0];
      setUserDetails({
        name: account.name || 'User',
        username: account.username || 'Unknown User',
        loginMethod: 'B2C',
      });
    }
  }, [isAuthenticated, accounts]);
  return (
    <div className="App">
      <Navbar userDetails={userDetails} setUserDetails={setUserDetails} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/advanced-authentication" element={<AdvancedAuthentication />} />
        <Route path="/ourcompany" element={<OurCompany />} />
        <Route path="/single-signon" element={<SinglesignOn />} />
        <Route path="/profile" element={<ProfilePage user={userDetails} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

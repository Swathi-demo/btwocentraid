import React, { useState ,useEffect } from 'react';
import './Navbar.css';
import {  useNavigate } from 'react-router-dom';
import {  Link } from 'react-router-dom';
import SearchModal from './SearchModal';
import './SearchModal.css';
import { jwtDecode } from "jwt-decode";
import { useMsal } from '@azure/msal-react';
import entraMsalInstance from '../msalInstance'; // Adjust path based on your structure



function Navbar({ userDetails , setUserDetails}) {
  const navigate = useNavigate();
  const { instance, accounts } = useMsal(); 
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState(null); // State for username
 

  const handleSearchClick = () => {
      setIsSearchModalOpen(true);
  };

  const closeSearchModal = () => {
      setIsSearchModalOpen(false);
  };

 /* const handleLogin = async () => {
    await instance.loginRedirect({
        scopes: ["openid", "profile", "email"],
        prompt: "login", // Forces login flow
    });
};



  const handleLogout = () => {
    instance.logoutRedirect();
  };*/
  const handleB2CLogin = async () => {
    try {
      console.log('Starting B2C login...');
      const loginResponse = await instance.loginRedirect({
        scopes: ['openid', 'profile', 'email'],
        prompt: 'login', // Forces login flow
      });
      console.log('B2C Login Successful:', loginResponse);

      // Extract account details after successful login
    const account = loginResponse.account || accounts[0]; // Use the first account if `loginResponse.account` is undefined
    setUserDetails({
      name: account?.name || 'User',
      username: account?.username,
      loginMethod: 'B2C', // Indicate the login method
    });
  } catch (error) {
    console.error('B2C Login Failed:', error);
  }
};


  const handleEntraLogin = async () => {
    try {
      console.log('Starting Entra login...');
      const loginResponse = await entraMsalInstance.loginPopup({
        scopes: ['openid', 'profile', 'User.Read'], // Ensure these scopes match your Azure configuration
      });
      console.log('Entra Login Successful:', loginResponse);

      const account = loginResponse.account;
      const name = account?.name || account?.username || 'User';

      // Update user details in the parent component
      setUserDetails({
        name: name,
        username: account?.username,
        loginMethod: 'EntraID',
      });

      // Acquire token (optional)
      const tokenResponse = await entraMsalInstance.acquireTokenSilent({
        account,
        scopes: ['openid', 'profile', 'User.Read'],
      });
      console.log('Access Token:', tokenResponse.accessToken);
    } catch (error) {
      console.error('Entra Login Failed:', error);
    }
  };
   /*const parseJwt = (token) => {   
    const base64Url = token.split('.')[1];   
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');  
     return JSON.parse(atob(base64)); };*/

     const handleLogout = async () => {
        try {
          await instance.logoutRedirect();
          setUserDetails(null); // Clear userDetails in parent
        } catch (error) {
          console.error('Logout Failed:', error);
        }
      };

  useEffect(() => {
    // Update username from accounts
    if (accounts && accounts.length > 0) {
      const account = accounts[0];
      setUsername(account.name || account.username || 'User'); // Set username from account details
    }
  }, [accounts]);


    return (
        <nav className="navbar">
         <div className="navbar-brand">
    <Link to="/">
        <img 
            src="images/CIAM1.jpg" 
            alt="CIAM" 
            style={{ height: '60px', width: '60px', marginRight: '10px', animation: 'rotate360 2s linear infinite'  }} 
        />
        
    </Link>
</div>
            <ul className="navbar-menu">
                <li><Link to="/home" style={{ fontWeight: 300 }}>Home</Link></li>
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle" style={{ fontWeight: 300 }}>
                        Solutions <span className="dropdown-icon">▼</span>
                    </a>
                    <ul className="dropdown-menu">
                    <li><Link to="/advanced-authentication" style={{ fontWeight: 300, fontSize: '14px' }}><span className="icon">⚙️</span> Advanced Authentication </Link></li>
                        <li><Link to="/single-signon" style={{ fontWeight: 300, fontSize: '14px' }}><span className="icon">🤖</span>Single-Sign On</Link></li>
                        <li><Link to="/comparisons" style={{ fontWeight: 300, fontSize: '14px' }}><span className="icon">📊</span> Comparisons</Link></li>
                        <li><Link to="/multi-cloud" style={{ fontWeight: 300, fontSize: '14px' }}><span className="icon">☁️</span> Multi-Cloud</Link></li>
                        <li><Link to="/siem" style={{ fontWeight: 300, fontSize: '14px' }}><span className="icon">🔒</span> SIEM</Link></li>
                        <li><Link to="/xdr" style={{ fontWeight: 300, fontSize: '14px' }}><span className="icon">📈</span> XDR</Link></li>
                        <li><Link to="/edr" style={{ fontWeight: 300, fontSize: '14px' }}><span className="icon">🛡️</span> EDR</Link></li>
                    </ul>
                </li>
                <li><Link to="/documentation" style={{ fontWeight: 300 }}>Documentation</Link></li>
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle" style={{ fontWeight: 300 }}>
                        Features <span className="dropdown-icon">▼</span>
                    </a>
                    <ul className="dropdown-menu">
                        <li><Link to="/secops" style={{ fontWeight: 300, fontSize: '14px' }}><span className="icon">⚙️</span> SecOps</Link></li>
                        <li><Link to="/ai-copilot" style={{ fontWeight: 300, fontSize: '14px' }}><span className="icon">🤖</span> AI & Copilot</Link></li>
                        <li><Link to="/comparisons" style={{ fontWeight: 300, fontSize: '14px' }}><span className="icon">📊</span> Comparisons</Link></li>
                        <li><Link to="/multi-cloud" style={{ fontWeight: 300, fontSize: '14px' }}><span className="icon">☁️</span> Multi-Cloud</Link></li>
                        <li><Link to="/siem" style={{ fontWeight: 300, fontSize: '14px' }}><span className="icon">🔒</span> SIEM</Link></li>
                        <li><Link to="/xdr" style={{ fontWeight: 300, fontSize: '14px' }}><span className="icon">📈</span> XDR</Link></li>
                        <li><Link to="/edr" style={{ fontWeight: 300, fontSize: '14px' }}><span className="icon">🛡️</span> EDR</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle" style={{ fontWeight: 300 }}>
                        About <span className="dropdown-icon">▼</span>
                    </a>
                    <ul className="dropdown-menu" style={{ color: '#FFFFFF' }}>
                        <li><Link to="/ourcompany" style={{ fontWeight: 300, fontSize: '14px' }}><span className="icon">🏢</span> Our Company</Link></li>
                        <li><span className="icon">👥</span> Our People and Culture</li>
                        <li><span className="icon">📜</span> Our Principles</li>
                        <li><span className="icon">🤝</span> Our Partners</li>
                        <li><span className="icon">🏆</span> Awards & Accolades</li>
                        <li><span className="icon">🌍</span> Corporate Social Responsibility</li>
                        <li><span className="icon">🌱</span> Afforestation</li>
                    </ul>
                </li>
            </ul>
            <div className="navbar-actions">
                <div className="search-icon" onClick={handleSearchClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#77819b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </div>
                <div className="navbar-actions">
        {userDetails ? (
          <div className="user-actions">
            <span className="welcome-message">
              Hello, {userDetails.name}{' '}
              <span style={{ fontSize: 'small', color: '#888' }}>
                (Signed with {userDetails.loginMethod})
              </span>
              !
            </span>
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <>
            <button className="btwoc" onClick={handleB2CLogin}>Login with B2C</button>
            <button className="entraid" onClick={handleEntraLogin}>Employee Login</button>
          </>
        )}
      </div>
      </div>
            <SearchModal isOpen={isSearchModalOpen} onClose={closeSearchModal} />
        </nav>
    );
}

export default Navbar;

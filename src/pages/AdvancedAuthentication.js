import React from 'react';
import './AdvancedAuthentication.css';

const AdvancedAuthentication = () => {
  const openModal = () => {
    document.getElementById("videoModal").style.display = "block";
  };

  const closeModal = () => {
    document.getElementById("videoModal").style.display = "none";
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      const modal = document.getElementById("videoModal");
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);
  return (
    <div className='main-advanced'>
    <div className="advanced-authentication">
      <div className="content-left">
        <h1 className="title">Advanced Authentication</h1>
        <p className="description">
          Fortify your defenses with strong and adaptive authentication, preventing unauthorized access to your most critical systems, applications, and sensitive data.
        </p>
        <div className="button-group">
  <button className="custom-button">Experience OneLogin</button>
  <button className="custom-button">Connect with our Sales Team</button>
  <button className="custom-button" onClick={() => openModal()}>Watch Demo</button>
</div>
<div id="videoModal" className="modal">
  <div className="modal-content">
    <span className="close" onClick={() => closeModal()}>&times;</span>
    <iframe src="https://app.goconsensus.com/api/mps/media/e24d34c5-0d86-4d20-a09e-032a01de43d6" width="100%" height="400" frameborder="0" allow="autoplay; fullscreen"></iframe>
  </div>
</div>
      </div>
      <div className="content-right">
        <img src="https://www.oneidentity.com/images/patterns/zigzag/6-column/advanced-authentications-header.png" alt="Advanced Authentication Illustration" className="auth-image" />
      </div>
      
    </div>
    <div className="breach-statistics">
    <div className="stat-item">
      <h2>49%</h2>
      <p>of breaches stem from stolen credentials</p>
    </div>
    <div className="stat-item">
      <h2>86%</h2>
      <p>of basic web application attacks involve stolen credentials</p>
    </div>
    <div className="stat-item">
      <h2>50%</h2>
      <p>of records breached are due to unauthorized access</p>
    </div>
  </div>
  <div className="content-section" style={{backgroundColor:'#0d1b2a'}}>
        <h2>Shift to Advanced Authentication for enhanced security</h2>
        <ul>
          <li>Strengthen endpoint and application authentication methods used</li>
          <li>Adapt required levels of authentication based on risk</li>
          <li>Go passwordless and choose from a wide range of strong authentication methods</li>
          <li>Deliver a consistent, seamless authentication experience across all devices and applications</li>
          <li>Fulfill audit and compliance requirements under GDPR and other applicable laws</li>
        </ul>
      </div>
      <div className="content-section-wrapper" style={{ backgroundColor: '#0d1b2a' }}>
  <div className="content-image">
    <img src="https://www.oneidentity.com/images/patterns/zigzag/6-column/elevate-the-security.jpg" alt="Security Illustration" style={{    marginTop: '5%'}}/>
  </div>
  <div className="content-section">
    <h2>Elevate the security of your business with a multi-layer protection approach</h2>
    <p>
      <strong>Multi-factor authentication (MFA)</strong> strengthens your defenses against unauthorized users, using independent authentication factors to verify a user’s identity prior to granting access. <strong>OneLogin MFA:</strong>
    </p>
    <ul>
      <li>Safeguards user credentials against phishing and social engineering attacks</li>
      <li>Improves user experience with a frictionless and user-friendly authentication process</li>
      <li>Ensures compliance with industry regulations that demand stringent security requirements</li>
    </ul>
   
  </div>
</div>

<div className="adaptive-auth-wrapper" style={{ backgroundColor: '#0d1b2a', padding: '20px', marginTop: '0' }}>
  <div className="adaptive-auth-content">
    <h2>Dynamically adapt to evolving risk factors and provide tailored protection for every login attempt</h2>
    <p>
      <strong>Adaptive authentication</strong> assesses real-time risk factors and applies suitable security measures to prevent unauthorized access and protect sensitive data. <strong>OneLogin SmartFactor Authentication:</strong>
    </p>
    <ul>
      <li>Balances security with usability by using OneLogin’s Vigilance AI threat engine to assess risk, automatically apply login flows and prompt users for MFA when needed.</li>
      <li>Enforces adaptive authentication policies, including device trust, across corporate and personally owned devices.</li>
      <li>Streamlines login events in real time to SIEM and other cloud communication tools to meet compliance and audit requirements.</li>
    </ul>
  </div>
  <div className="adaptive-auth-image">
    <img src="	https://www.oneidentity.com/images/patterns/zigzag/6-column/dynamically-adapt.jpg" alt="Adaptive Authentication Illustration" />
  </div>
</div>


  </div>
  );
};

export default AdvancedAuthentication;

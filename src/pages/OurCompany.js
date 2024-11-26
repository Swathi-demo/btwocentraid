import React from 'react';
import './OurCompany.css';

const OurCompany = () => {
  return (
    <div className="our-company">

      <div className="content-wrapper" style={{ marginBottom: '0px' }}>
      <video
    autoPlay
    muted
    loop
    playsInline
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: 'translate(-50%, -50%)',
      zIndex: '-1',
    }}
  >
    <source src="/images/vision2.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
        <h1 className="title">Our Company</h1>
        <h2 className="subtitle">About Us</h2>
        <p className="description">
          For nearly 3 decades, Paramount has been a trusted cybersecurity leader in the Middle East.
        </p>
      </div>
       
      <div id="about-company1">
        <div id="small-company1"><p>Paramount stands as the regional leader,
           providing unparalleled services to protect critical information assets and infrastructure. 
           Established in 1992, Paramount has undergone transformative phases, 
          emerging as a trusted cybersecurity solutions provider with a profound commitment to excellence.</p></div>
    </div>

    
</div>

      
  );
};

export default OurCompany;

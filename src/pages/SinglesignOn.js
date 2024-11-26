import React from 'react'
import './SinglesignOn.css'

const SinglesignOn = () => {
  return (
    <div className='main-singlesignon'>
    <div class="single-sign-on-section">
    <div class="content">
      <h2>Single Sign-On</h2>
      <p>Single Sign-On (SSO) is a crucial feature within CIAM that allows
         users to authenticate once and gain access to multiple applications or services without repeated logins.
         Customer Identity and Access Management (CIAM) solutions are designed to manage and 
         secure customer identities in Business-to-Consumer (B2C) scenarios</p>
    </div>
    <div class="video-container">
     
      <video  autoPlay
    muted
    loop
    playsInline
    controls style={{marginRight: '36%', height: '180px'}}>
        <source src="/images/sso.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
</div>

<div className="image-container">
<img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*IQF-dMDwfiIRjzEdBqLI7w.png" alt="SSO Illustration" style={{ width: '60%', marginTop: '20px' , height: '300px' , marginLeft: '18%'}} />
</div>
</div>
  )
}

export default SinglesignOn
import React from 'react';
import './ProfilePage.css';

function ProfilePage({ user }) {
    if (!user) {
        return <p style={{backgroundColor: '#0A1F44'}}>Loading user profile...</p>;
    }

    const idTokenClaims = user.idTokenClaims || {};
    const name = idTokenClaims.name || user.username || 'User';
    const email = idTokenClaims.email || idTokenClaims.emails?.[0] || 'No email provided';
    const givenName = idTokenClaims.given_name || 'N/A';
    const surname = idTokenClaims.family_name || 'N/A';
    const objectId = idTokenClaims.oid || 'N/A';
    const userRoles = idTokenClaims.roles || [];
   /* const identityProviderAccessToken = idTokenClaims.idp_access_token || 'Not Available';*/
    const state = idTokenClaims.state || 'Not Available';

    return (
        <div className="profile-page">
            <div className="profile-container">
                {/* Background video */}
                <div className="video-background">
                    <video autoPlay loop muted playsInline>
                        <source src="/images/profilepage.mp4" type="video/mp4" />
                        <source src="/images/profilepage.webm" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                {/* Profile content */}
                <div className="profile-content">
                    <h1>Welcome, {name}!</h1>
                    <p><strong>Email:</strong> {email}</p>
                    <p><strong>Given Name:</strong> {givenName}</p>
                    <p><strong>Surname:</strong> {surname}</p>
                    <p><strong>Object ID:</strong> {objectId}</p>
                   {/* <p><strong>Identity Provider Access Token:</strong> {identityProviderAccessToken}</p> */}
                    <p><strong>State:</strong> {state}</p>
                    <p className="user-roles">
                        <strong>User Roles:</strong>{' '}
                        {userRoles.length > 0 ? userRoles.join(', ') : 'No roles assigned'}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;

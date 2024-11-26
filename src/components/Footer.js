import React from 'react';
import './Footer.css'; // Ensure CSS styling is imported

const Footer = () => (
    <footer className="footer-distributed">
        <div className="footer-left">
            <h3>CIAM<span>logo</span></h3>
            <p className="footer-links">
                <a href="#" className="link-1">Home</a>
                <a href="#">Solutions</a>
                <a href="#">Documentation</a>
                <a href="#">Features</a>
                <a href="#">About</a>
               
            </p>
            <p className="footer-company-name">CIAM © 2015</p>
        </div>
        <div className="footer-center">
            <div>
                <i className="fa fa-map-marker"></i>
                <p><span>Dubai FZ-LLC102,</span> Building no. 1, Dubai Internet City, Dubai</p>
            </div>
            <div>
                <i className="fa fa-phone"></i>
                <p>+1.555.555.5555</p>
            </div>
            <div>
                <i className="fa fa-envelope"></i>
                <p><a href="mailto:support@company.com">support@ciam.com</a></p>
            </div>
        </div>
        <div className="footer-right">
            <p className="footer-company-about">
                <span>About the company</span>
                Customer Identity and Access Management (CIAM) is a specialized subset of 
                Identity and Access Management (IAM) that focuses
                 on managing and securing customer identities and their access to digital services.
            </p>
            <div className="footer-icons">
    <a href="#"><i class="fab fa-facebook-f"></i></a>
    <a href="#"><i class="fab fa-twitter"></i></a>
    <a href="#"><i class="fab fa-linkedin-in"></i></a>
    <a href="#"><i class="fab fa-github"></i></a>
</div>

        </div>
    </footer>
);

export default Footer;

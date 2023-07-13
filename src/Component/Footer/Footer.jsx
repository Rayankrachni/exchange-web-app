
import React from 'react';
import './Footer.css';

import logo from '../../images/logo.png';

import FaceBook from '../../images/icons/facebook.png';

import Twitter from '../../images/icons/twitter.png';

import Google from '../../images/icons/google.png';

const Footer = () => {
  return (

    <div className='global-footer'> 
     <footer className="footer">
      <div className="footer-left">
        <div className="logo">
          {/* Insert your logo here */}
          <img src={logo} alt="Logo" />
        </div>
        <div className="description">
          {/* Add your description text */}
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <li className="li-icon" >             
          <img src={Google}  className='social-icons' />

          <img src={FaceBook} className='social-icons' />
        
          <img src={Twitter}  className='social-icons' />
        </li>
      </div>
      <div className="footer-right">
        <div className="column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </div>
        <div className="column">
          <h3>Support</h3>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="column">
          <h3>Contact Us</h3>
          <ul>
            <li>Email: info@example.com</li>
            <li>Phone: +1 123 456789</li>
            <li>Address: 123 Street, City, Country</li>
          </ul>
        </div>
      </div>
    </footer>
    
    
    <p>Copyright © Sayartii 2023. All rights reserved.</p>
    </div>
  
  );
};

export default Footer;

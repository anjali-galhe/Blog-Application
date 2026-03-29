import React from 'react';
import './Footer.css';
import { FaInstagram, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-col">
          <h2>Blog<span>Zen</span></h2>
          <p>Sharing stories, tutorials, and insights from the world of tech and design.</p>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/categories">Categories</a></li>
            <li><a href="/joinus">Join Us</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <FaInstagram />
            <FaTwitter />
            <FaGithub />
            <FaLinkedin />
          </div>
        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 BlogZen. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
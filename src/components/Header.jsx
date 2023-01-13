import React from 'react';
import logo from '../assets/LogoDark.jpeg';
import './Header.css';

export default function Header (){
  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo" />
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className="social-icons">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
      </div>
    </header>
  );
};


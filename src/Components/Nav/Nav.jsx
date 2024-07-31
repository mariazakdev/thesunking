import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Nav.scss';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  
  const headerHeight = 100; 

  return (
    <header className="nav">
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <button className="nav-toggle" onClick={handleToggle}>
          {isOpen ? 'X' : 'Menu'}
        </button>
        <div className={`nav-links ${isOpen ? 'show' : ''}`}>
          <Link to="home" smooth={true} offset={-headerHeight} duration={500} onClick={handleToggle}>Home</Link>
          <Link to="about" smooth={true} offset={-headerHeight} duration={500} onClick={handleToggle}>About Us</Link>
          <Link to="gallery" smooth={true} offset={-headerHeight} duration={500} onClick={handleToggle}>Gallery</Link>
          <Link to="contact" smooth={true} offset={-headerHeight} duration={500} onClick={handleToggle}>Contact Us</Link>
          <Link to="support" smooth={true} offset={-headerHeight} duration={500} onClick={handleToggle}>Support Us</Link>
        </div>
        <div className="social-media-icons">
          {/* Add social media icons here */}
        </div>
      </nav>
    </header>
  );
};

export default Nav;

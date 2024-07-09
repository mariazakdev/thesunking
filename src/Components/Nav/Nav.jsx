import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Nav.scss';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="nav">
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <div className="logo">
          <h3>Canadian Broadway Presents</h3>
        </div>
        <button className="nav-toggle" onClick={handleToggle}>
          {isOpen ? 'X' : 'Menu'}
        </button>
        <div className={`nav-links ${isOpen ? 'show' : ''}`}>
          <Link to="home" smooth={true} onClick={handleToggle}>Home</Link>
          <Link to="about" smooth={true} onClick={handleToggle}>About Us</Link>
          <Link to="shows" smooth={true} onClick={handleToggle}>Current Shows</Link>
          <Link to="tickets" smooth={true} onClick={handleToggle}>Tickets</Link>
          <Link to="gallery" smooth={true} onClick={handleToggle}>Gallery</Link>
          <Link to="news" smooth={true} onClick={handleToggle}>News</Link>
          <Link to="contact" smooth={true} onClick={handleToggle}>Contact Us</Link>
          <Link to="support" smooth={true} onClick={handleToggle}>Support Us</Link>
        </div>
        <div className="social-media-icons">
          {/* Add social media icons here */}
        </div>
      </nav>
    </header>
  );
};

export default Nav;

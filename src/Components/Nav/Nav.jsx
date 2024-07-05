import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Nav.scss';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <div className="logo">
          <h3>Maria Zak</h3>
        </div>
        <button className="nav-toggle" onClick={handleToggle}>
          {isOpen ? 'X' : 'Menu'}
        </button>
        <Link to="home" smooth={true}>Home</Link>
          <Link to="about" smooth={true}>About Us</Link>
          <Link to="shows" smooth={true}>Current Shows</Link>
          <Link to="tickets" smooth={true}>Tickets</Link>
          <Link to="gallery" smooth={true}>Gallery</Link>
          <Link to="news" smooth={true}>News</Link>
          <Link to="contact" smooth={true}>Contact Us</Link>
          <Link to="support" smooth={true}>Support Us</Link>
        <div className="social-media-icons">
          {/* Add social media icons here */}
        </div>
      </nav>
    </header>
  );
};

export default Nav;

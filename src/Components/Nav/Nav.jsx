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
          <Link to="home" className='link' smooth={true} offset={-headerHeight} duration={500} onClick={handleToggle}>Home</Link>
          <Link to="about" className='link' smooth={true} offset={-headerHeight} duration={500} onClick={handleToggle}>About</Link>
          <Link to="gallery" className='link' smooth={true} offset={-headerHeight} duration={500} onClick={handleToggle}>Gallery</Link>
          <Link to="contact" className='link' smooth={true} offset={-headerHeight} duration={500} onClick={handleToggle}>Contact</Link>
          <Link to="support" className='link' smooth={true} offset={-headerHeight} duration={500} onClick={handleToggle}>Support</Link>
        </div>
        <div className="social-media-icons">
          {/* Add social media icons here */}
        </div>
      </nav>
    </header>
  );
};

export default Nav;

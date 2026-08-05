// import React, { useState } from 'react';
// import { Link } from 'react-scroll';
// import './Nav.scss';

// const Nav = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [copied, setCopied] = useState(false);

//   const handleToggle = () => setIsOpen(!isOpen);

//   const handleShare = async () => {
//     const url = 'https://thesunking.ca';
//     if (navigator.share) {
//       try {
//         await navigator.share({ title: 'The Sun King', text: 'Check out The Sun King — Canadian Broadway Presents', url });
//       } catch (err) {
//         if (err.name !== 'AbortError') copyFallback(url);
//       }
//     } else {
//       copyFallback(url);
//     }
//   };

//   const copyFallback = (url) => {
//     navigator.clipboard.writeText(url).then(() => {
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     });
//   };

//   const headerHeight = 100;

//   return (
//     <header className="nav">
//       <nav className={`nav ${isOpen ? 'open' : ''}`}>
//         <button className="nav-toggle" onClick={handleToggle}>
//           {isOpen ? 'X' : 'Menu'}
//         </button>
//         <div className={`nav-links ${isOpen ? 'show' : ''}`}>
//           <Link to="home" className='link' smooth={true} offset={-headerHeight} duration={500} onClick={handleToggle}>Home</Link>
//           <Link to="about" className='link' smooth={true} offset={-headerHeight} duration={500} onClick={handleToggle}>About</Link>
//           <Link to="rehearsals" className='link' smooth={true} offset={-headerHeight} duration={500} onClick={handleToggle}>Updates</Link>
//           <Link to="gallery" className='link' smooth={true} offset={-headerHeight} duration={500} onClick={handleToggle}>Gallery</Link>
//           <Link to="contact" className='link' smooth={true} offset={-headerHeight} duration={500} onClick={handleToggle}>Contact</Link>
//           <Link to="support" className='link' smooth={true} offset={-headerHeight} duration={500} onClick={handleToggle}>Support</Link>
//           <button className="share-btn" onClick={handleShare}>
//             {copied ? 'Copied!' : 'Share'}
//           </button>
//         </div>
//         <div className="social-media-icons" />
//       </nav>
//     </header>
//   );
// };

// export default Nav;

import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Nav.scss';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  // Close mobile drawer explicitly without blindly toggling on desktop
  const handleLinkClick = () => {
    if (isOpen) setIsOpen(false);
  };

  const handleShare = async () => {
    const url = 'https://thesunking.ca';
    if (navigator.share) {
      try {
        await navigator.share({ title: 'The Sun King', text: 'Check out The Sun King — Canadian Broadway Presents', url });
      } catch (err) {
        if (err.name !== 'AbortError') copyFallback(url);
      }
    } else {
      copyFallback(url);
    }
  };

  const copyFallback = (url) => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const headerHeight = 100;

  return (
    <header className="nav-header">
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <button className="nav-toggle" onClick={handleToggle} aria-label="Toggle navigation">
          {isOpen ? 'X' : 'Menu'}
        </button>
        <div className={`nav-links ${isOpen ? 'show' : ''}`}>
          <Link to="home" className="link" smooth={true} offset={-headerHeight} duration={500} onClick={handleLinkClick}>Home</Link>
          <Link to="about" className="link" smooth={true} offset={-headerHeight} duration={500} onClick={handleLinkClick}>About</Link>
          <Link to="tickets" className="link" smooth={true} offset={-headerHeight} duration={500} onClick={handleLinkClick}>Tickets</Link>
          <Link to="rehearsals" className="link" smooth={true} offset={-headerHeight} duration={500} onClick={handleLinkClick}>Updates</Link>
          <Link to="gallery" className="link" smooth={true} offset={-headerHeight} duration={500} onClick={handleLinkClick}>Gallery</Link>
          <Link to="contact" className="link" smooth={true} offset={-headerHeight} duration={500} onClick={handleLinkClick}>Contact</Link>
          <Link to="support" className="link" smooth={true} offset={-headerHeight} duration={500} onClick={handleLinkClick}>Support</Link>
          <button className="share-btn" onClick={handleShare}>
            {copied ? 'Copied!' : 'Share'}
          </button>
        </div>
        <div className="social-media-icons" />
      </nav>
    </header>
  );
};

export default Nav;
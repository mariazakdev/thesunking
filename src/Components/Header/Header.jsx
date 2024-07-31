import React from 'react';
import Nav from '../Nav/Nav';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../../Assets/Images/logo2.png';
import './Header.scss';

export default function Header() {
  const headerHeight = 100;

  return (
    <div className='header'>
      <div className='header_container'>
        <div className='header_title'>
          <ScrollLink to="home" smooth={true} offset={-headerHeight} duration={500}>
            <img src={logo} alt='logo' className='header_logo'/>
            <h3>Canadian Broadway Presents</h3>
          </ScrollLink>
        </div>
        <div className='header_menu'>
          <Nav />
        </div>
      </div>
    </div>
  );
}

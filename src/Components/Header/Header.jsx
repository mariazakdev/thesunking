import React from 'react';
import Nav from '../Nav/Nav';
import logo from '../../Assets/Images/logo2.png';
import './Header.scss';

export default function Header() {
  return (
    <div className='header'>
      <div className='header_container'>
       
        <div className='header_title'>
        <img src={logo} alt='logo' className='header_logo'/>
        <h3>Canadian Broadway Presents</h3>

        </div>
<div className='header_menu'>
        <Nav />
        </div>
      </div>
    </div>
  );
}

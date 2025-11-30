import React from 'react';
import img from '../../Assets/Images/Akhenaten-and-The-Hymn-To-The-Aten-Trips-in-Egypt.jpg';

import './Hero.scss';

function Hero() {
  return (
    <div className="hero">
      <img src={img} alt="hero" />
      <h1>The Sun King</h1>
    </div>
  );
}

export default Hero;

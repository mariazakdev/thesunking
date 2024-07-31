import React from 'react';
// import img from '../../Assets/Images/Akhenaten5.webp';
import img from '../../Assets/Images/dunes2.webp';

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

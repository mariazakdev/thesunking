import React from 'react';

import img1 from '../../Assets/Images/The Sun King 1st Poster.png';
import img2 from '../../Assets/Images/Screen Shot 2019-02-18 at 12.46.05 AM.png';
import img3 from '../../Assets/Images/Nefertiti2.webp';
import img4 from '../../Assets/Images/Akhenaten1.webp';
import './Gallery.scss'; 

const images = [
    img4,
    img1,
    img2,
    img3,

];

const Gallery = () => {


  return (
    <div className="gallery">
    <div className="gallery-content">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <img src={image} alt={`Gallery ${index}`} />
        </div>
      ))}
    </div>
    </div>
  );
}

export default Gallery;

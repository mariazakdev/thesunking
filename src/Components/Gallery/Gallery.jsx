// import React from 'react';

// import img1 from '../../Assets/Images/The Sun King 1st Poster.png';
// import img2 from '../../Assets/Images/Screen Shot 2019-02-18 at 12.46.05 AM.png';

// import './Gallery.scss'; 

// const images = [
//     img1,
//     img2,


// ];

// const Gallery = () => {


//   return (
//     <div className="gallery">
//     <div className="gallery-content">
//       {images.map((image, index) => (
//         <div key={index} className="gallery-item">
//           <img src={image} alt={`Gallery ${index}`} />
//         </div>
//       ))}
//     </div>
//     </div>
//   );
// }

// export default Gallery;
import React, { useState } from 'react';

import img1 from '../../Assets/Images/The Sun King 1st Poster.png';
import img2 from '../../Assets/Images/Screen Shot 2019-02-18 at 12.46.05 AM.png';

import './Gallery.scss';

const images = [img1, img2];

const Gallery = () => {
  const [enlargedIndex, setEnlargedIndex] = useState(null);

  const handleImageClick = (index) => {
    setEnlargedIndex(enlargedIndex === index ? null : index);
  };

  return (
    <div className="gallery">
      <div className="gallery-content">
        {images.map((image, index) => (
          <div
            key={index}
            className={`gallery-item ${enlargedIndex === index ? 'enlarged' : ''}`}
            onClick={() => handleImageClick(index)}
          >
            <img src={image} alt={`Gallery ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;

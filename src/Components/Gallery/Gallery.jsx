
import React, { useState } from 'react';

import img1 from '../../Assets/Images/The Sun King 1st Poster.png';
import img2 from '../../Assets/Images/Screen Shot 2019-02-18 at 12.46.05 AM.png';
import img3 from '../../Assets/Images/Screenshot 2025-07-16 at 1.07.29 PM.png';
import img4 from '../../Assets/Images/Screenshot 2025-07-19 at 5.51.15 PM.png';
import img5 from '../../Assets/Images/Screenshot 2025-07-19 at 7.56.57 AM.png';
import img6 from '../../Assets/Images/Screenshot 2025-07-16 at 12.39.35 PM.png';
import img7 from '../../Assets/Images/Screenshot 2025-08-03 at 8.01.14 PM.png';
import img8 from '../../Assets/Images/Screenshot 2025-07-24 at 2.42.54 PM.png';
import img9 from '../../Assets/Images/Screenshot 2025-08-03 at 7.29.01 PM.png';
import img10 from '../../Assets/Images/Screenshot 2025-08-03 at 7.28.34 PM.png';
import img11 from '../../Assets/Images/Screenshot 2025-08-03 at 7.28.09 PM.png';
import img12 from '../../Assets/Images/Screenshot 2025-07-24 at 2.40.14 PM.png';
import img13 from '../../Assets/Images/Screenshot 2025-07-24 at 2.36.01 PM.png';
import img14 from '../../Assets/Images/Screenshot 2025-08-03 at 8.01.22 PM.png';



import './Gallery.scss';

// const images = [
//   img1, img2, img3, img4,
//    img5, img6, img7, img1,img8, img9 
//    ,img10, img11, img12, img13, img14
//   ];

// const Gallery = () => {
//   const [enlargedIndex, setEnlargedIndex] = useState(null);

//   const handleImageClick = (index) => {
//     setEnlargedIndex(enlargedIndex === index ? null : index);
//   };

//   return (
//     <div className="gallery">
//       <h3>Past Productions</h3>
//       <div className="gallery-content">
//         {images.map((image, index) => (
//           <div
//             key={index}
//             className={`gallery-item ${enlargedIndex === index ? 'enlarged' : ''}`}
//             onClick={() => handleImageClick(index)}
//           >
//             <img src={image} alt={`Gallery ${index}`} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gallery;
const images = [
  img1, img2, img3, img4,
  img5, img6, img7, img8, 
  img9, img10, img11, img12, 
  img13, img14
];

const Gallery = () => {
  return (
    <div className="gallery">
      <h3>Past Productions</h3>
      <div className="gallery-content">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Gallery ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
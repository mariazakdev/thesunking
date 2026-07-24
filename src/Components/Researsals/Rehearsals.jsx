import React from 'react';
import './Gallery.scss';

// Updated all paths directly to: ../../Assets/Cast/
import img1 from '../../Assets/Cast/0c65d743-c4ce-48b2-874d-4f95a5659324.jpg';
import img2 from '../../Assets/Cast/01f92f72-75bd-43d4-8e3a-fe401232e6b1.jpg';
import img3 from '../../Assets/Cast/1d9d4d7d-273b-4ad1-8f9f-91b236723147.jpg';
import img4 from '../../Assets/Cast/2eaa1680-9b83-4589-a4e5-ec73357333c7.jpg';
import img6 from '../../Assets/Cast/5ac134cc-0ee4-4772-8b11-80dd02717105.jpg';
import img10 from '../../Assets/Cast/7cbbffa3-9ffc-4eb9-bae3-e4564475375b.jpg';
import img11 from '../../Assets/Cast/7e5ee20f-8565-44c4-9c91-8eface04fd06.jpg';
import img12 from '../../Assets/Cast/23e09b3b-910d-4fca-a490-9e80a677ce77.jpg';
import img13 from '../../Assets/Cast/26abcc49-452f-4348-9a45-af9c27d9ce9b.jpg';
import img14 from '../../Assets/Cast/31a31e7e-9598-44df-bd09-f7b96357759c.jpg';
import img15 from '../../Assets/Cast/46ebab6f-55e2-49b0-ad59-3cf205773dc9.jpg';
import img16 from '../../Assets/Cast/63bcb6f6-7b1c-49f4-83eb-fcc6736874e6.jpg';
import img17 from '../../Assets/Cast/66ac49ca-8cbc-4e9d-871a-b5c4c9b98766.jpg';
import img18 from '../../Assets/Cast/74cab0bb-cc91-42b5-9688-72086c1b1619.jpg';
import img19 from '../../Assets/Cast/82f26a2b-08c0-4541-a4f6-c778b0423dd3.jpg';
import img20 from '../../Assets/Cast/89c0436b-af68-4e04-b452-b32dd8212af8.jpg';
import img21 from '../../Assets/Cast/226dae70-b1c5-477f-9384-8f73f4c81bc7.jpg';
import img22 from '../../Assets/Cast/0268bab7-9647-43bb-955d-fef7bcd35155.jpg';

import img23 from '../../Assets/Cast/339fbc5d-aa41-4abb-aec1-5fe95573b24b.jpg';
import img24 from '../../Assets/Cast/359e434e-3536-4c8a-ac4d-a6697e0896a3.jpg';
import img25 from '../../Assets/Cast/370fc343-112d-4708-93d0-ec364467fcf3.jpg';
import img26 from '../../Assets/Cast/567de4f3-0e39-426b-b50d-2206aa06ea4d.jpg';
import img27 from '../../Assets/Cast/7189b456-8d57-4bed-a56e-bb763221c9d4.jpg';
import img28 from '../../Assets/Cast/31127e3c-872c-4513-88ce-272755a33830.jpg';
import img29 from '../../Assets/Cast/57391d7c-fa95-4347-b3a3-2674963bfa8b.jpg';
import img30 from '../../Assets/Cast/3245817f-dcf7-40a9-98c8-4f3a234318b7.jpg';
import img31 from '../../Assets/Cast/10860279-e2c8-424f-ad12-16a8521f8c64.jpg';
import img32 from '../../Assets/Cast/41522906-eb35-49e3-befd-233ed4d55d0c.jpg';
import img33 from '../../Assets/Cast/a7a11ab1-69fa-49dc-8ac2-0939815e3584.jpg';

import img34 from '../../Assets/Cast/a980d92f-900e-4980-b6fd-c91f191ce0bd.jpg';
import img35 from '../../Assets/Cast/a6847f5d-64c9-4599-a1b4-1fe5ad24e293.jpg';
import img36 from '../../Assets/Cast/b07e9c2a-536b-4b72-9b5f-28e44b3fccc3.jpg';
import img37 from '../../Assets/Cast/cd56cafa-8276-45cd-9eee-ef3c631cb378.jpg';
import img38 from '../../Assets/Cast/d87f33c7-fc11-4801-a79d-6a2dc93d37cd.jpg';
import img41 from '../../Assets/Cast/f9c6650d-2423-44ad-af5f-3787b08ba9df.jpg';
import img42 from '../../Assets/Cast/f725121a-2eb6-44ce-a167-c9d2206e3b3a.jpg';
import img43 from '../../Assets/Cast/fb1a01ba-5445-46d4-8d1a-21480d8b865b.jpg';
import img44 from '../../Assets/Cast/fd8671ae-52f0-4626-8bd1-33603d25751f.jpg';

import img45 from '../../Assets/Cast/fecc87ea-3019-4936-b367-66b97511ea18.jpg';

const IMAGES = [
  img1, img2, img3, img4,  img6,  img10, img11,
  img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22,
  img23, img24, img25, img26, img27, img28, img29, img30, img31, img32, img33,
  img34, img35, img36, img37, img38, img41, img42, img43, img44,
  img45
];

const Rehearsals = () => {
  return (
    <div className="gallery">
      <h3>Updates</h3>
      <div className="gallery-content">
        {IMAGES.map((image, index) => (
          <div key={index} className="gallery-item">
            <img 
              src={image} 
              alt={`Rehearsal ${index + 1}`} 
              loading="lazy" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rehearsals;
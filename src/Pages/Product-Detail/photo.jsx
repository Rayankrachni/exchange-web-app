
import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import './photo.css';
import { Base_url } from '../../Constant/ActionType';
function CarListing({images_list,video}) {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const images = [
    'https://sayartii.com/uploads/cars/17592239499771/c74a8d171d9ce7af807455b2a7aa6da40234daef.jpg',
    'https://sayartii.com/uploads/cars/17592190398996/37b92cd2f4fb4d2cbb6b92905c512cbae44b1125.jpg',
    'https://sayartii.com/uploads/cars/17592239499771/c74a8d171d9ce7af807455b2a7aa6da40234daef.jpg',
    'https://sayartii.com/uploads/cars/17592190398996/37b92cd2f4fb4d2cbb6b92905c512cbae44b1125.jpg',
    'https://sayartii.com/uploads/cars/17592239499771/c74a8d171d9ce7af807455b2a7aa6da40234daef.jpg',
    'https://sayartii.com/uploads/cars/17592239499771/c74a8d171d9ce7af807455b2a7aa6da40234daef.jpg',
    'https://sayartii.com/uploads/cars/17592239499771/c74a8d171d9ce7af807455b2a7aa6da40234daef.jpg',
    'https://sayartii.com/uploads/cars/17592239499771/c74a8d171d9ce7af807455b2a7aa6da40234daef.jpg',
    'https://sayartii.com/uploads/cars/17592239499771/c74a8d171d9ce7af807455b2a7aa6da40234daef.jpg',
   
    // Add more image URLs as needed
  ];

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  console.log(images_list.map((e)=>{console.log(`http://192.168.100.3:8000${e.name})`)}))
  return (

    
    <div className="photos-wrapper ratio-big">
      <div className="img-wrap-4">
        
        {images_list.map((image, index) => (
        <img
          alt={index}
          key={index}
          src={`http://192.168.100.3:8000${image.name}`}
          onClick={() => openLightbox(index)}
          className='img-wrap'
        />
      ))}

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={closeLightbox}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
          imageTitle={`Image ${photoIndex + 1}`}
        />
      )}
        
       
      </div>
    
    </div>
  );
}

export default CarListing;

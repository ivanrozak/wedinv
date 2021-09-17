import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './lightbox.css';

function LightBox() {
  // const [state, setstate] = useState({photoIndex:0, isOpen})
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const images = [
    '//placekitten.com/1500/500',
    '//placekitten.com/4000/3000',
    '//placekitten.com/800/1200',
    '//placekitten.com/1500/1500',
    '//placekitten.com/1500/500',
    '//placekitten.com/4000/3000',
    '//placekitten.com/800/1200',
    '//placekitten.com/1500/1500',
    '//placekitten.com/1500/1500',
  ];

  const openImage = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };
  return (
    <div>
      <div className='d-flex justify-content-center flex-wrap'>
        {images.map((item, index) => (
          <div key={index}>
            <img
              onClick={() => openImage(index)}
              className='img-grid'
              src={item}
              alt=''
            />
          </div>
        ))}
      </div>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + images.length + 1) % images.length)
          }
        />
      )}
    </div>
  );
}

export default LightBox;

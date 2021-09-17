import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

function LightBox() {
  // const [state, setstate] = useState({photoIndex:0, isOpen})
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const images = [
    '//placekitten.com/1500/500',
    '//placekitten.com/4000/3000',
    '//placekitten.com/800/1200',
    '//placekitten.com/1500/1500',
  ];

  const openImage = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Lightbox</button>
      {images.map((item, index) => (
        <div style={{ width: '60px' }} key={index}>
          <img
            onClick={() => openImage()}
            className='w-100'
            src={item}
            alt=''
          />
        </div>
      ))}
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={
            () =>
              setPhotoIndex((photoIndex + images.length - 1) % images.length)
            // this.setState({
            //   photoIndex: (photoIndex + images.length - 1) % images.length
            // })
          }
          onMoveNextRequest={
            () =>
              setPhotoIndex((photoIndex + images.length + 1) % images.length)
            // this.setState({
            //   photoIndex: (photoIndex + 1) % images.length
            // })
          }
        />
      )}
    </div>
  );
}

export default LightBox;

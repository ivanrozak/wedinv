import React from 'react';
import LightGallery from 'lightgallery/react';
import './galleries.css';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import Pic from '../assets/img/img6.jpg';
import Pic2 from '../assets/img/img1.jpg';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import 'lightgallery/scss/lg-fullscreen.scss';
import 'lightgallery/scss/lg-share.scss';

// import plugins if you need
// import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import fullscreen from 'lightgallery/plugins/fullscreen';
import share from 'lightgallery/plugins/share';

export default function Gallery() {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };
  return (
    <div className='App w-100'>
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgZoom, fullscreen, share]}
      >
        <a className='gallery-item' href={Pic}>
          <img className='img-responsive w-100' src={Pic} alt='' />
        </a>
        <a className='gallery-item' href={Pic2}>
          <img className='img-responsive w-100' src={Pic2} alt='' />
        </a>
        <a className='gallery-item' href={Pic}>
          <img className='img-responsive w-100' src={Pic} alt='' />
        </a>
      </LightGallery>
    </div>
  );
}

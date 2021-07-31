import React from 'react';
import LightGallery from 'lightgallery/react';
import './galleries.css';
import Pic from '../assets/img/img6.jpg';
import Pic2 from '../assets/img/img1.jpg';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';
import 'lightgallery/scss/lg-fullscreen.scss';
import 'lightgallery/scss/lg-share.scss';
import 'lightgallery/scss/lg-pager.scss';

// import plugins if you need
// import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import fullscreen from 'lightgallery/plugins/fullscreen';
import share from 'lightgallery/plugins/share';
import pager from 'lightgallery/plugins/pager';

export default function Gallery() {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };
  return (
    <div className='App m-2'>
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgZoom, fullscreen, share, pager]}
        className='m-5'
      >
        <a className='img-a' href={Pic}>
          <img className='img-grid' src={Pic} alt='' />
        </a>
        <a className='img-a' href={Pic2}>
          <img className='img-grid' src={Pic2} alt='' />
        </a>
        <a className='img-a' href={Pic}>
          <img className='img-grid' src={Pic} alt='' />
        </a>
        <a className='img-a' href={Pic2}>
          <img className='img-grid' src={Pic2} alt='' />
        </a>
        <a className='img-a' href={Pic}>
          <img className='img-grid' src={Pic} alt='' />
        </a>
        <a className='img-a' href={Pic2}>
          <img className='img-grid' src={Pic2} alt='' />
        </a>
        <a className='img-a' href={Pic}>
          <img className='img-grid' src={Pic} alt='' />
        </a>
        <a className='img-a' href={Pic2}>
          <img className='img-grid' src={Pic2} alt='' />
        </a>
        <a className='img-a' href={Pic}>
          <img className='img-grid' src={Pic} alt='' />
        </a>
        <a className='img-a' href={Pic2}>
          <img className='img-grid' src={Pic2} alt='' />
        </a>
      </LightGallery>
    </div>
  );
}

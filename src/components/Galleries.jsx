import React from 'react';
import LightGallery from 'lightgallery/react';
import './galleries.css';
import Pic from '../assets/img/img6.jpg';
import Pic2 from '../assets/img/img1.jpg';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/css/lightgallery-bundle.css';
import 'lightgallery/scss/lightgallery-bundle.scss';

// import plugins if you need
import lgZoom from 'lightgallery/plugins/zoom';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgPager from 'lightgallery/plugins/pager';

export default function Gallery() {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };
  return (
    <div className='App m-2'>
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgZoom, lgPager, lgFullscreen]}
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
      </LightGallery>
    </div>
  );
}

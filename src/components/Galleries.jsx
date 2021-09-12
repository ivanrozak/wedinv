import React from 'react';
import LightGallery from 'lightgallery/react';
import './galleries.css';
// import Pic from '../assets/img/img6.jpg';
// import Pic2 from '../assets/img/img1.jpg';
import Img1 from '../pages/themes/Classic/assets/img/2.jpg';
import Img2 from '../pages/themes/Classic/assets/img/3.jpg';
import Img3 from '../pages/themes/Classic/assets/img/4.jpg';
import Img4 from '../pages/themes/Classic/assets/img/5.jpg';

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
        <a className='img-a' href={Img1}>
          <img className='img-grid' src={Img1} alt='' />
        </a>
        <a className='img-a' href={Img2}>
          <img className='img-grid' src={Img2} alt='' />
        </a>
        <a className='img-a' href={Img3}>
          <img className='img-grid' src={Img3} alt='' />
        </a>
        <a className='img-a' href={Img4}>
          <img className='img-grid' src={Img4} alt='' />
        </a>
        <a className='img-a' href={Img1}>
          <img className='img-grid' src={Img1} alt='' />
        </a>
        <a className='img-a' href={Img2}>
          <img className='img-grid' src={Img2} alt='' />
        </a>
        <a className='img-a' href={Img3}>
          <img className='img-grid' src={Img3} alt='' />
        </a>
        <a className='img-a' href={Img4}>
          <img className='img-grid' src={Img4} alt='' />
        </a>
        <a className='img-a' href={Img1}>
          <img className='img-grid' src={Img1} alt='' />
        </a>
      </LightGallery>
    </div>
  );
}

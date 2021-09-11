import React from 'react';
import Logo from '../../../../assets/logokoendangin.svg';
// import HeroImage from '../assets/hero.jpg';

function Hero() {
  return (
    <div className='text-center'>
      <div className='top-of-img'>
        <img src={Logo} alt='' />
        <div className='color-white mt-4'>The Wedding Of</div>
        <div className='f32 color-white oleo' style={{ marginTop: '-8px' }}>
          Marsha & Yuan
        </div>
        <div className='color-white semibold' style={{ marginTop: '-6px' }}>
          02 JANUARI 2022
        </div>
      </div>
    </div>
  );
}

export default Hero;

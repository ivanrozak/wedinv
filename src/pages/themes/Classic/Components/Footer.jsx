import React from 'react';
import Logo from '../assets/burung.png';

function Footer() {
  return (
    <div
      className='bg-white text-center primary'
      style={{ paddingBottom: '70px' }}
    >
      <img src={Logo} alt='' />
      <div className='my-3'>
        Wedding Invitation Website
        <br /> created by <strong>Koendang.in</strong>
      </div>
    </div>
  );
}

export default Footer;

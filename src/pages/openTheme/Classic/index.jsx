import React from 'react';
import { Button } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';
import Logo from './assets/logokoendangin.svg';
import Hero from './assets/heroImage.png';
import BgBottom from './assets/ornamen1.png';
import { Fade } from 'react-reveal';

function Index() {
  const { name } = useParams();
  return (
    <>
      <div className='belakang color-white w-100 text-center'>
        <Fade right big>
          <img className='mt-5' src={Logo} alt='' />

          <div className='color-white f24 semibold mt-4'>
            {name ? `${name},` : 'Tamu Undangan,'}
          </div>
          <div className='color-white mb-4'>You're invited to</div>
          <div className='color-white'>The Wedding Of</div>
          <div className='f36 color-white oleo' style={{ marginTop: '-8px' }}>
            Marsha & Yuan
          </div>
          <div className='color-white semibold' style={{ marginTop: '-6px' }}>
            02 JANUARI 2022
          </div>
        </Fade>

        <img src={Hero} className='img-hero' alt='' />
      </div>
      <div className='btn-top'>
        <Button variant='contained' color='#D8C1AB'>
          <Link style={{ textDecoration: 'none', color: '#87231A' }} to='/home'>
            OPEN INVITATION
          </Link>
        </Button>
      </div>
      <div className='bottom-bg'>
        <img className='w-100' src={BgBottom} alt='' />
      </div>
    </>
  );
}

export default Index;

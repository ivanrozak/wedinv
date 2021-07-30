import React from 'react';
// import { AccessAlarm, ThreeDRotation, HomeOutlined } from '@material-ui/icons';
import Hero from '../assets/img/hero.jpg';
import Header from '../assets/img/header.png';
import Countdown from '../components/Countdown';
import GMap from '../components/Gmap';
import Galleries from '../components/Galleries';

export default function Home() {
  return (
    <>
      <div className='content'>
        <div className='homepage'>
          <img className='w-100' src={Hero} alt='' />
          <div className='homepage-title'>
            <div className='poppins'>THE WEDDING OF</div>
            <div className='sacramento' style={{ fontSize: '36px' }}>
              Faris and Wulan
            </div>
            <div className='poppins'>02 JANUARI 2022</div>
          </div>
        </div>
        <div className='couples'>
          <img src={Header} alt='' />
          <div className='dancing24 mt-4'>Muhammad Faris Effendi, S.T.</div>
          <div className='mt-2'>Putra dari</div>
          <div className='mt-1 bold'>
            Bapak Karim Wijaya, S.H. &<br />
            Ibu Yuliana Dewi Sartika, S.Ag.
          </div>
          <div className='dancing24 mt-4'>Wulan Saputri Wijaya, S.Kom.</div>
          <div className='mt-2'>Putri dari</div>
          <div className='mt-1 bold'>
            Bapak Sulthon Abdillah &<br />
            Ibu Lusi Septiani
          </div>
          <div className='section mt-5'>
            <div>
              <div className='dancing26'>Akad Nikah</div>
              <div className='mt-3 bold' style={{ letterSpacing: '0.105em' }}>
                JANUARI
              </div>
              <div className=' px-3 d-flex justify-content-center align-items-center'>
                <div className='text-center'>
                  <div className='lines'></div>
                  <div
                    className='py-2 bold'
                    style={{ letterSpacing: '0.105em' }}
                  >
                    SABTU
                  </div>
                  <div className='lines'></div>
                </div>
                <div className='px-3 f48 bold'>01</div>
                <div className='text-center'>
                  <div className='lines'></div>
                  <div className='py-2 bold'>08.30 - 10.30 WIB</div>
                  <div className='lines'></div>
                </div>
              </div>
              <div className='f24 bold'>2022</div>
              <div className=' mt-3'>Masjid Agung Jakarta</div>
              <div className='bold'>
                Jl. Raya Kota Baru Nomor 15
                <br />
                Jakarta
              </div>
            </div>
            <button className='btn btn-secondary my-4'>
              View Live Streaming
            </button>
            <div>
              <div className='dancing26'>Resepsi</div>
              <div className='mt-3 bold' style={{ letterSpacing: '0.105em' }}>
                JANUARI
              </div>
              <div className=' px-3 d-flex justify-content-center align-items-center'>
                <div className='text-center'>
                  <div className='lines'></div>
                  <div
                    className='py-2 bold'
                    style={{ letterSpacing: '0.105em' }}
                  >
                    MINGGU
                  </div>
                  <div className='lines'></div>
                </div>
                <div className='px-3 f48 bold'>02</div>
                <div className='text-center'>
                  <div className='lines'></div>
                  <div className='py-2 bold'>11.00 - 14.00 WIB</div>
                  <div className='lines'></div>
                </div>
              </div>
              <div className='f24 bold'>2022</div>
              <div className=' mt-3'>Royal Hotel and Suite</div>
              <div className='bold'>
                Jl. Raya Dharmawangsa Nomor 25
                <br />
                Jakarta
              </div>
            </div>
            <div class='dancing26 mt-5'>Our Happy Moment</div>
            <div class=' mb-4'>will be held on :</div>
            <div class='px-4 py-2 m-auto'>
              <Countdown />
            </div>
          </div>
        </div>
        <div className='gmaps'>
          <GMap />
        </div>
        <div className='galleries text-center'>
          <div class='dancing26 mt-5'>Couple Galleries</div>
          <Galleries />
        </div>
      </div>
      {/* <div className='botnav d-flex justify-content-between'>
        <HomeOutlined />
        <HomeOutlined />
        <AccessAlarm />
        <ThreeDRotation />
      </div> */}
    </>
  );
}
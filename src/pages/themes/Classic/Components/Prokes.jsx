import React from 'react';
import Protokol from '../assets/prokes.png';

function Prokes() {
  return (
    <div className='bg-white primary text-center py-5 px-4'>
      <div className='oleo f24'>Protokol Kesehatan</div>
      <div>
        Tanpa mengurangi rasa hormat, sesuai dengan peraturan pemerintah, para
        tamu undangan tetap wajib menjalankan protokol kesehatan sebagaimana
        mestinya.
        <br />
        Pastikan kondisi badan dalam keadaan sehat saat menghadiri undangan.
        <br />
        Terima kasih atas kerjasama Bapak/Ibu/Saudara/i.
      </div>
      <br />
      <img src={Protokol} alt='' />
    </div>
  );
}

export default Prokes;

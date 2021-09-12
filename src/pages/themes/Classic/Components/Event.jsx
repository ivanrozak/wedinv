import React, { useState } from 'react';
import Texture from '../assets/batik1.png';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Map from './Map';
import Car1 from '../assets/img/gambar1.png';
import Car2 from '../assets/img/gambar2.png';
import Countdown from '../../../../components/Countdown';

function Event() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const data = useSelector((state) => state.global.dataState.resultData);
  const closeBtn = (
    <Button outline color='secondary' onClick={toggle}>
      X
    </Button>
  );
  return (
    <div className='bg-white primary'>
      <img className='flip-vertical w-100 mb-4' src={Texture} alt='' />
      <div className='text-center'>
        <div className='f24 oleo bold'>We are</div>
        <div className='f24 oleo bold mn-3'>married!</div>
        <div className='px-5 mt-3 mb-5'>
          “Dan diantara tanda-tanda kebesaran-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
          dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
          kasih dan sayang. “<br />
          <br />
          Ar-Rum ayat 21
        </div>
        <img className='img-rounded' src={Car2} alt='' />
        <div className='oleo f24 mt-2'>{data.nama_wanita}</div>
        <div className='mt-1'>{`Putri dari Bapak ${data.ayah_wanita} dan`}</div>
        <div>{`Ibu ${data.ibu_wanita}`}</div>
        <img className='img-rounded mt-4' src={Car1} alt='' />
        <div className='oleo f24 mt-2'>{data.nama_pria}</div>
        <div className='mt-1'>{`Putra dari Bapak ${data.ayah_pria} dan`}</div>
        <div>{`Ibu ${data.ibu_pria}`}</div>
        <div className='section mt-5'>
          <div>
            <div className='oleo f32'>Akad Nikah</div>
            <div className='mt-3 bold' style={{ letterSpacing: '0.105em' }}>
              {moment(data.tanggal_akad).format('MMMM').toUpperCase()}
            </div>
            <div className='d-flex justify-content-center align-items-center'>
              <div className='text-center'>
                <div className='lines'></div>
                <div className='py-2 bold' style={{ letterSpacing: '0.105em' }}>
                  {moment(data.tanggal_akad).format('dddd').toUpperCase()}
                </div>
                <div className='lines'></div>
              </div>
              <div className='px-3 f48 bold'>
                {moment(data.tanggal_akad).format('Do')}
              </div>
              <div className='text-center'>
                <div className='lines'></div>
                <div className='py-2 bold'>
                  {moment(data.waktu_start_akad).format('LT')} -{' '}
                  {moment(data.waktu_end_akad).format('LT')} WIB
                </div>
                <div className='lines'></div>
              </div>
            </div>
            <div className='f24 bold'>
              {moment(data.tanggal_akad).format('YYYY')}
            </div>
            <div className=' mt-3'>{data.venue_akad}</div>
            <div className='bold'>
              {data.alamat_akad}
              <br />
              {data.kota_akad}
            </div>
          </div>

          <div>
            <div className='oleo f32'>Resepsi</div>
            <div className='mt-3 bold' style={{ letterSpacing: '0.105em' }}>
              {moment(data.tanggal_resepsi).format('MMMM').toUpperCase()}
            </div>
            <div className='d-flex justify-content-center align-items-center'>
              <div className='text-center'>
                <div className='lines'></div>
                <div className='py-2 bold' style={{ letterSpacing: '0.105em' }}>
                  {moment(data.tanggal_resepsi).format('dddd').toUpperCase()}
                </div>
                <div className='lines'></div>
              </div>
              <div className='px-3 f48 bold'>
                {moment(data.tanggal_resepsi).format('Do')}
              </div>
              <div className='text-center'>
                <div className='lines'></div>
                <div className='py-2 bold'>
                  {moment(data.waktu_start_resepsi).format('LT')} -{' '}
                  {moment(data.waktu_end_resepsi).format('LT')} WIB
                </div>
                <div className='lines'></div>
              </div>
            </div>
            <div className='f24 bold'>
              {moment(data.tanggal_resepsi).format('YYYY')}
            </div>
            <div className=' mt-3'>{data.venue_resepsi}</div>
            <div className='bold'>
              {data.alamat_resepsi}
              <br />
              {data.kota_resepsi}
            </div>
            <button className='btn btn-secondary my-4' onClick={toggle}>
              Lihat Lokasi
            </button>
          </div>
          <div className='oleo f32'>Our Happy Moment</div>
          <div className='f20 mn-2'>Countdown</div>
          <div
            className='mx-3 mt-2 px-2'
            style={{
              border: '1px solid #8a4332',
              borderRadius: '15px',
            }}
          >
            <Countdown />
          </div>
        </div>
      </div>
      <img className='w-100 mt-4' src={Texture} alt='' />
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          Lokasi Acara
        </ModalHeader>
        <ModalBody>
          <Map />
        </ModalBody>
        <ModalFooter className='justify-content-center'>
          <Button color='primary' style={{ color: 'white' }} onClick={toggle}>
            Menuju Lokasi Akad
          </Button>
          <br />
          <a href='https://goo.gl/maps/omFhPoeBtc5Fj6H6A'>
            <Button color='primary' style={{ color: 'white' }} onClick={toggle}>
              Menuju Lokasi Resepsi
            </Button>
          </a>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Event;

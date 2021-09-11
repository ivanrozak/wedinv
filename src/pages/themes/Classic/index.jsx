import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import {
  FavoriteBorder,
  // RoomOutlined,
  PhotoLibraryOutlined,
  // ForumOutlined,
  // MusicNoteOutlined,
  // PhotoAlbumOutlined,
  MusicOffOutlined,
  TranslateOutlined,
  RateReviewOutlined,
} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import Hero from './Components/Hero';
import Event from './Components/Event';
import Map from './Components/Map';
import './index.scss';

function Classic() {
  const myRef = useRef(null);
  const myRef2 = useRef(null);
  const executeScroll = () => {
    myRef.current.scrollIntoView();
  };
  const executeScroll2 = () => {
    myRef2.current.scrollIntoView();
  };
  // const dataInit = useSelector((state) => state.global.dataState.resultData);

  const Navbar = () => {
    return (
      <div className='botnav d-flex justify-content-evenly'>
        <IconButton onClick={changeToTwo}>
          <FavoriteBorder />
        </IconButton>
        <IconButton>
          <PhotoLibraryOutlined />
        </IconButton>
        <IconButton
          style={{
            border: '0.5px solid black',
            backgroundColor: 'white',
          }}
          onClick={changeToOne}
        >
          <MusicOffOutlined />
        </IconButton>
        <IconButton>
          <RateReviewOutlined />
        </IconButton>
        <IconButton>
          <TranslateOutlined />
        </IconButton>
      </div>
    );
  };

  const changeToOne = () => {
    executeScroll2();
  };
  const changeToTwo = () => {
    executeScroll();
  };

  return (
    <div>
      <div ref={myRef}>
        <Hero />
      </div>
      <div ref={myRef2}>
        <Event />
      </div>
      <div>
        <Map />
      </div>
      <div>Hello worldnote</div>
      <Navbar />
    </div>
  );
}

export default Classic;

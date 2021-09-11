import React, { useRef, useState } from 'react';
// import { useSelector } from 'react-redux';
import {
  HomeRounded,
  FavoriteRounded,
  VolumeOffRounded,
  VolumeUpRounded,
  PhotoLibraryRounded,
  ForumRounded,
} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import Hero from './Components/Hero';
import Event from './Components/Event';
import Map from './Components/Map';
import Music from './Components/Music';
import Galleries from '../../../components/Galleries';
import './index.scss';
import { Fade } from 'react-reveal';

function Classic() {
  const [music, setMusic] = useState(false);
  const homeRef = useRef(null);
  const favouriteRef = useRef(null);
  const galleriesRef = useRef(null);
  const commentRef = useRef(null);
  const scrollToHome = () => {
    homeRef.current.scrollIntoView();
  };
  const scrollToFavourite = () => {
    favouriteRef.current.scrollIntoView();
  };
  const scrollToGalleries = () => {
    galleriesRef.current.scrollIntoView();
  };
  const scrollToComment = () => {
    commentRef.current.scrollIntoView();
  };

  const playMusic = () => {
    setMusic(!music);
  };
  // const dataInit = useSelector((state) => state.global.dataState.resultData);

  const Navbar = () => {
    return (
      <div className='botnav d-flex justify-content-evenly'>
        <IconButton onClick={scrollToHome}>
          <HomeRounded />
        </IconButton>
        <IconButton onClick={scrollToFavourite}>
          <FavoriteRounded />
        </IconButton>
        <IconButton
          style={{
            border: '0.5px solid black',
          }}
          onClick={playMusic}
        >
          {!music ? (
            <VolumeOffRounded style={{ color: 'red' }} />
          ) : (
            <VolumeUpRounded />
          )}
        </IconButton>
        <IconButton onClick={scrollToGalleries}>
          <PhotoLibraryRounded />
        </IconButton>
        <IconButton onClick={scrollToComment}>
          <ForumRounded />
        </IconButton>
      </div>
    );
  };

  return (
    <div>
      <div ref={homeRef}>
        <Fade bottom>
          <Hero />
        </Fade>
      </div>
      <div ref={favouriteRef}>
        <Fade bottom>
          <Event />
        </Fade>
        <Fade bottom>
          <Map />
        </Fade>
      </div>
      <div ref={galleriesRef}>
        <Fade bottom>
          <Galleries />
        </Fade>
      </div>
      <div ref={commentRef}>
        <h1>Comments</h1>
      </div>
      <Music props={music} />
      <div className='mt-5'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis sed odio
        excepturi a labore ex doloremque harum, expedita laboriosam. Harum?
      </div>
      <Navbar />
    </div>
  );
}

export default Classic;

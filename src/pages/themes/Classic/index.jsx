import React, { useRef, useState } from 'react';
// import { useSelector } from 'react-redux';
import {
  HomeRounded,
  FavoriteRounded,
  PhotoLibraryRounded,
  ForumRounded,
  Pause,
  PlayArrow,
} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import Hero from './Components/Hero';
import Event from './Components/Event';
import Music from './Components/Music';
import Galleries from '../../../components/Galleries';
import Comment from './Components/Comments';
import Prokes from './Components/Prokes';
import Footer from './Components/Footer';
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
          {!music ? <Pause /> : <PlayArrow />}
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
      </div>
      <div className='bg-white primary' ref={galleriesRef}>
        <Fade bottom>
          <div className='oleo text-center f24 pt-4'>Couple Galleries</div>
          <Galleries />
          <div className='p-2'>
            <iframe
              className='w-100'
              src='https://www.youtube.com/embed/FgN4ieKQKw8'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </div>
        </Fade>
      </div>

      <div className='bg-white primary' ref={commentRef}>
        <Comment />
      </div>
      <Prokes />
      <Footer />
      <Music props={music} />
      <Navbar />
    </div>
  );
}

export default Classic;

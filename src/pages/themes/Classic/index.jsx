import React, { useRef } from 'react';
// import { useSelector } from 'react-redux';
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
import { Fade } from 'react-reveal';

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
        <Fade bottom big>
          <Hero />
        </Fade>
      </div>
      <div ref={myRef2}>
        <Fade bottom big>
          <Event />
        </Fade>
      </div>
      <div>
        <Fade bottom big>
          <Map />
        </Fade>
      </div>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed voluptate
        quidem maiores. Quidem quis quia voluptatum eum, laborum nihil corporis
        perspiciatis enim ducimus fugiat dolore voluptates aut at sequi optio
        dolor cupiditate distinctio voluptatibus eos autem dolores sunt veniam!
        Ducimus atque debitis harum pariatur distinctio quos magnam dolores
        ratione sit esse dolorem molestias ut autem corrupti doloremque cumque
        modi omnis laboriosam a, velit nam tempore repellat inventore doloribus!
        Accusantium sunt nemo magnam blanditiis. Quis a officiis blanditiis
        placeat dolore pariatur praesentium, fugiat atque incidunt doloremque
        magnam nostrum laudantium fuga odio esse iste. Sapiente harum voluptate
        consequatur dolor blanditiis numquam veniam dolore nihil incidunt
        aliquam rem sint magni amet, obcaecati voluptatem, doloremque
        consectetur nemo assumenda iusto! Assumenda cupiditate, harum corrupti
        quos officia minus dolorum incidunt quisquam, dolorem velit animi
        consectetur? Fugit autem commodi, exercitationem odio et doloremque
        porro ratione. Quae, maxime, magni omnis odio eveniet deleniti dolores,
        asperiores hic nobis doloribus aut temporibus reprehenderit molestiae!
        Quidem, obcaecati architecto quis eos dolorem nesciunt deserunt vel
        omnis repellat quos consectetur adipisci recusandae vero. Alias,
        veritatis provident non facilis, dolores minima similique animi deleniti
        blanditiis, enim exercitationem vero vitae accusamus dignissimos officia
        asperiores ipsa nemo dolor modi quo distinctio quam voluptatem
        voluptatibus dicta! Sequi?
      </div>
      <Navbar />
    </div>
  );
}

export default Classic;

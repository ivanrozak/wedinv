import React from 'react';
import {
  FavoriteBorder,
  HomeOutlined,
  RoomOutlined,
  PhotoLibraryOutlined,
  ForumOutlined,
} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';

export default function Navbar() {
  return (
    <div className='botnav d-flex justify-content-evenly'>
      <IconButton>
        <HomeOutlined />
      </IconButton>
      <IconButton>
        <FavoriteBorder />
      </IconButton>
      <IconButton>
        <RoomOutlined />
      </IconButton>
      <IconButton>
        <PhotoLibraryOutlined />
      </IconButton>
      <IconButton>
        <ForumOutlined />
      </IconButton>
    </div>
  );
}

import React, { useState } from 'react';
import Sound from 'react-sound';
import Badguy from '../assets/sounds/sample music.mp3';
import IconButton from '@material-ui/core/IconButton';
import { MusicNote, MusicOff } from '@material-ui/icons';

export default function Music(
  handleSongPlaying,
  handleSongLoading,
  handleSongFinishedPlaying
) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <IconButton
        onClick={() => setIsPlaying(!isPlaying)}
        color='primary'
        component='span'
      >
        {!isPlaying ? <MusicOff /> : <MusicNote />}
      </IconButton>
      <Sound
        url={Badguy}
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
        playFromPosition={5000}
        onLoading={handleSongLoading}
        onPlaying={handleSongPlaying}
        onFinishedPlaying={handleSongFinishedPlaying}
      />
    </div>
  );
}

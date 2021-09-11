import React, { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Sound from '../assets/sample music.mp3';

function Music(props) {
  const [state, setState] = useState(false);

  useEffect(() => {
    function changeState() {
      setState((state) => !state);
    }
    changeState();
  }, [props]);
  return (
    <div>
      {state ? (
        <ReactAudioPlayer src={Sound} autoPlay />
      ) : (
        <ReactAudioPlayer src={Sound} autoPlay muted />
      )}
    </div>
  );
}

export default Music;

import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import './countdown.css';
import { useSelector } from 'react-redux';

const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 80,
  strokeWidth: 0,
};

const renderTime = (dimension, time) => {
  return (
    <div className='time-wrapper'>
      <div className='time'>{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

export default function Countdown() {
  const data = useSelector(
    (state) => state.global.dataState.resultData.tanggal_resepsi
  );
  const newData = Date.parse(data);
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  // const endTime = Date.parse('21 Dec 2021 00:12:00 GMT') / 1000; // use UNIX timestamp in seconds
  const endTime = Date.parse(data) / 1000; // use UNIX timestamp in seconds
  // const endTime = stratTime + 243248; // use UNIX timestamp in seconds

  const remainingTime = endTime - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;

  return (
    <div className='App'>
      {console.log(data, newData)}
      <CountdownCircleTimer
        {...timerProps}
        colors={[['#000000']]}
        duration={daysDuration}
        initialRemainingTime={remainingTime}
      >
        {({ elapsedTime }) =>
          renderTime('days', getTimeDays(daysDuration - elapsedTime))
        }
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors={[['#000000']]}
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > hourSeconds,
        ]}
      >
        {({ elapsedTime }) =>
          renderTime('hours', getTimeHours(daySeconds - elapsedTime))
        }
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors={[['#000000']]}
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > minuteSeconds,
        ]}
      >
        {({ elapsedTime }) =>
          renderTime('minutes', getTimeMinutes(hourSeconds - elapsedTime))
        }
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors={[['#000000']]}
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={(totalElapsedTime) => [
          remainingTime - totalElapsedTime > 0,
        ]}
      >
        {({ elapsedTime }) =>
          renderTime('seconds', getTimeSeconds(elapsedTime))
        }
      </CountdownCircleTimer>
    </div>
  );
}

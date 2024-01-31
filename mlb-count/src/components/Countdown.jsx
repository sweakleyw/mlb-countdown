import React, { useState, useEffect, useRef } from "react";

import "./Countdown.css";

export const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let interval = useRef();

  const startCount = () => {
    const cdDate = new Date("March 28, 2024 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const timeFrame = cdDate - now;

      const timeDays = Math.floor(timeFrame / (1000 * 60 * 60 * 24));
      const timeHours = Math.floor(
        (timeFrame % (1000 * 60 * 60 * 24)) / (100 * 60 * 60)
      );
      const timeMins = Math.floor((timeFrame % (1000 * 60 * 60)) / (1000 * 60));
      const timeSecs = Math.floor((timeFrame % (1000 * 60)) / 1000);

      if (timeFrame < 0) {
        clearInterval(interval.current);
      } else {
        setDays(timeDays);
        setHours(timeHours);
        setMinutes(timeMins);
        setSeconds(timeSecs);
      }
    }, 1000);
  };

  useEffect(() => {
    startCount();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div className='countdown'>
      <h1>Countdown To Opening Day</h1>
      <div className='container'>
        <div className='values'>
          <p className='big'>{days}</p>
          <span>Days</span>
        </div>
        <div className='values'>
          <p className='big'>{hours}</p>
          <span>Hours</span>
        </div>
        <div className='values'>
          <p className='big'>{minutes}</p>
          <span>Minutes</span>
        </div>
        <div className='values'>
          <p className='big'>{seconds}</p>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
};

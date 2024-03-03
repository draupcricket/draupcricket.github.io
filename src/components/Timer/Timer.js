import React, { useState, useEffect } from 'react';
import './Timer.scss'
const launchDate = new Date('2024-03-21T08:00:00');
const calculateTimeLeft = () => {
  const difference = +launchDate - +new Date();
  let timeLeft = {};
  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }
  return timeLeft;
};
const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
      <div className="Timer-class">
        {timeLeft.days || timeLeft.hours || timeLeft.minutes || timeLeft.seconds ? (
          <div>
            <div>
              {timeLeft.days && <span className='timer_style'>{timeLeft.days}D </span>}
              {timeLeft.hours && <span className='timer_style'>{timeLeft.hours}H </span>}
              {timeLeft.minutes && <span className='timer_style' >{timeLeft.minutes}M </span>}
              {timeLeft.seconds && <span className='timer_style'>{timeLeft.seconds}S</span>}
            </div>
          </div>
        ) : (
          <p>It's here!</p>
        )}
      </div>
  );
};
export default Timer;
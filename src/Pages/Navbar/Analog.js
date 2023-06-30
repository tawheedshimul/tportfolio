import React, { useState, useEffect } from 'react';

const AnalogWatch = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const getRotation = (handType) => {
    const handDegrees = {
      hour: (time.getHours() % 12) * 30 + time.getMinutes() * 0.5,
      minute: time.getMinutes() * 6,
      second: time.getSeconds() * 6
    };

    if (handType === 'hour') {
      // Adjust the hour hand rotation based on the minutes
      return handDegrees[handType] + time.getMinutes() * 0.5;
    }

    return handDegrees[handType];
  };

  return (
    <div className="analog-watch h-10 w-10 bg-white border-2 border-gray-500 rounded-full flex items-center justify-center">
      <div
        className="hand hour-hand bg-red-200 h-10 w-2 absolute"
        style={{ transform: `rotate(${getRotation('hour')}deg)` }}
      ></div>
      <div
        className="hand minute-hand bg-pink-800 h-10 w-2 absolute"
        style={{ transform: `rotate(${getRotation('minute')}deg)` }}
      ></div>
      <div
        className="hand second-hand bg-red-500 h-10 w-1 absolute"
        style={{ transform: `rotate(${getRotation('second')}deg)` }}
      ></div>
    </div>
  );
};

export default AnalogWatch;

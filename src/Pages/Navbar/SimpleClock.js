import React, { useEffect, useState } from 'react';

const SimpleClock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();
//   const formattedDate = currentTime.toLocaleDateString();

  return (
    <div className="text-center">
      <h1 className="text-white animate-bounce bottom-0">{formattedTime}</h1>
      {/* <p className="text-white animate-bounce">{formattedDate}</p> */}
    </div>
  );
};

export default SimpleClock;
import React, { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1);
  }, []);

  return (
    <>
      {' '}
      <div>
        <h2 className='m-0'>
          {dateState.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true,
          })}
        </h2>
        <span>
          {dateState.toLocaleDateString('ja-JP', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </span>
      </div>
    </>
  );
};

export default DigitalClock;

import { useEffect, useState } from 'react';

const AnalogueClock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // Get time
    const time = [date.getHours(), date.getMinutes(), date.getSeconds()];
    const [h, m, s] = time;

    // Get angles
    const degHour = h * (360 / 12) + m * (360 / 12 / 60);
    const degMin = m * (360 / 60) + s * (360 / 60 / 60);
    const degSec = s * (360 / 60);

    // Set angles to CSS custom property
    const rootStyle = document.documentElement.style;
    rootStyle.setProperty('--degHour', `${degHour}deg`);
    rootStyle.setProperty('--degMin', `${degMin}deg`);
    rootStyle.setProperty('--degSec', `${degSec}deg`);

    return () => clearInterval(timerId);
  }, [date]);

  return (
    <div className='clock'>
      <div className='h-hand'></div>
      <div className='m-hand'></div>
      <div className='s-hand'></div>
    </div>
  );
};

export default AnalogueClock;

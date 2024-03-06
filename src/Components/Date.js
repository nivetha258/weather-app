import React from 'react';

const DateComponent = ({ index }) => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const getDateWithIndex = (index) => {
    const currentDate = new Date();
    const futureDate = new Date(currentDate.getTime() + index * 24 * 60 * 60 * 1000);

    const dayName = daysOfWeek[futureDate.getDay()];
    const timeString = futureDate.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true });

    console.log("date com",`${dayName} ${timeString}`)
    return `${dayName} ${timeString}`;
  };

  const formattedDate = getDateWithIndex(1);

  return (
    <div>
      <p>{formattedDate}</p>
    </div>
  );
};

export default DateComponent;

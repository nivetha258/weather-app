

const DateComponent = ({ index }) => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const futureDate = new Date(currentDate.getTime() + index * 24 * 60 * 60 * 1000);

    const dayName = daysOfWeek[futureDate.getDay()];
    // const timeString = futureDate.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true });

    return `${dayName} `;
};

const FormatTime = (time,value) => {
  const date = value === "graph" ? new Date(time) : new Date();
  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
return  `${formattedTime}`
};



export { FormatTime, DateComponent}

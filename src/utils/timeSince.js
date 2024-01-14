const timeSince = (date) => {
  const seconds = Math.floor((new Date() - date) / 1000);

  const intervals = [
    { unit: 'year', duration: 31536000 },
    { unit: 'month', duration: 2592000 },
    { unit: 'day', duration: 86400 },
    { unit: 'hour', duration: 3600 },
    { unit: 'minute', duration: 60 },
    { unit: 'second', duration: 1 },
  ];

  const interval = intervals.find((int) => {
    const duration = seconds / int.duration;
    return duration > 1;
  });

  if (interval) {
    const duration = seconds / interval.duration;
    return `${Math.floor(duration)} ${interval.unit}${duration > 1 ? 's' : ''}`;
  }

  return `${Math.floor(seconds)} seconds`;
};

export default timeSince;

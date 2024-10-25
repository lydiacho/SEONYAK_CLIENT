import { useState, useEffect } from 'react';

function calculateTimeLeft(date?: string, startTime?: string) {
  if (!date || !startTime) {
    return { diffText: '', diff: undefined, dDayDiff: undefined };
  }

  const formattedDate = date.replace(/\./g, '-');
  const targetDateTime = new Date(`${formattedDate}T${startTime}`);
  const currentDate = new Date();
  const diff = targetDateTime.getTime() - currentDate.getTime();

  if (diff <= 0) {
    return { diffText: '00일 00시 00분', diff: 0, dDayDiff: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  const diffText = `${String(days).padStart(2, '0')}일 ${String(hours).padStart(2, '0')}시 ${String(minutes).padStart(2, '0')}분`;

  return { diffText, diff, dDayDiff: days };
}

function useCountdown(date?: string, startTime?: string) {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(date, startTime));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(date, startTime));
    }, 1000);

    return () => clearInterval(timer);
  }, [date, startTime]);

  return timeLeft;
}

export default useCountdown;

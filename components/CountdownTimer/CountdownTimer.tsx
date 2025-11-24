'use client';
import React, { useEffect, useState } from 'react';
import { TimeLeft } from './CountdownTimer.types';


const WEDDING_DATE = new Date('2026-11-28T00:00:00').getTime();

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = WEDDING_DATE - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft(); // Initial call
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isMounted) return null;

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center mx-2 md:mx-6 mb-4 animate-float">
      <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-lg p-4 w-20 h-24 md:w-32 md:h-40 flex items-center justify-center border border-wedding-200 transform transition hover:scale-105 duration-300">
        <span className="text-3xl md:text-6xl font-serif text-wedding-600 font-bold">
          {value < 10 ? `0${value}` : value}
        </span>
      </div>
      <span className="mt-3 text-sm md:text-lg font-medium uppercase tracking-widest text-wedding-800">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex flex-wrap justify-center items-center p-4">
      <TimeUnit value={timeLeft.days} label="Días" />
      <TimeUnit value={timeLeft.hours} label="Horas" />
      <TimeUnit value={timeLeft.minutes} label="Minutos" />
      <TimeUnit value={timeLeft.seconds} label="Segundos" />
    </div>
  );
};

export default CountdownTimer;

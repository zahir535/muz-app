import { useCallback, useEffect, useState } from "react";

export const useCountdown = ({ initialTime = 30 }: { initialTime: number }) => {
  const [countdown, setCountdown] = useState<number>(initialTime);

  const formatCountdown = useCallback((countdown: number) => {
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
    return `${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }, []);

  const resetTimer = () => {
    setCountdown(30);
  };

  // countdown timer
  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [countdown]);

  return {
    formattedCountdown: formatCountdown(countdown),
    countdown,
    resetTimer,
  };
};

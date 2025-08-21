import { useState, useEffect } from "react";

interface UseCounterProps {
  targetValue: number;
  duration?: number;
}

export function useCounter({ targetValue, duration = 50 }: UseCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start++;

      setCount(start);

      if (start === targetValue) {
        clearInterval(interval);
      }
    }, duration);

    return () => clearInterval(interval);
  }, [targetValue, duration]);

  return count;
}

import { useState, useEffect } from "react";

function useTime() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString(),
  );

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentTime(new Date().toLocaleTimeString()),
      1000,
    );
    return () => {
      clearInterval(interval);
    };
  }, []);

  return currentTime;
}

export default useTime;

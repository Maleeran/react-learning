import { useState, useEffect } from "react";

function useGeolocation() {
  const [position, setPosition] = useState(null);

  function getPosition() {
    const geolocation = navigator.geolocation;
    if (!geolocation) {
      alert("Geolocation is not supported by your browser!");
      return;
    } else {
      geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          setPosition({ latitude, longitude });
        },
        (error) => {
          alert("something Wrong!");
          console.error(error);
        },
      );
    }
  }

  useEffect(() => {
    getPosition();
  }, []);

  return position;
}

export default useGeolocation;

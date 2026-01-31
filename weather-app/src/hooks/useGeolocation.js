import { useState, useEffect } from "react";

function useGeolocation() {
  const [status, setStatus] = useState("Get Current Weather");

  async function getPosition() {
    return new Promise((resolve, reject) => {
      const geolocation = navigator.geolocation;

      setStatus("Locating...");

      if (!geolocation) {
        reject("Geolocation is not supported by your browser!");
        return;
      } else {
        geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;

            resolve({ latitude, longitude });
            setStatus("Get Forecast Weather");
          },
          (error) => {
            alert("something Wrong!");
            setStatus(error.message);
            reject(error);
          },
        );
      }
    });
  }

  // useEffect(() => {
  //   getPosition();
  // }, []);

  return { getPosition, status };
}

export default useGeolocation;

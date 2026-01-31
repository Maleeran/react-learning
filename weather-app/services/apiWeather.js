const API_URL = import.meta.env.VITE_API_URL;

const API_KEY = import.meta.env.VITE_API_KEY;
export async function getCurrentWeather(lat, lon) {
  const reponse = await fetch(
    `${API_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`,
  );

  const data = await reponse.json();
  return data;
}

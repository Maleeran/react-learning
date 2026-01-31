import { Button } from "@mui/material";
import Day from "./Day";
import styles from "./Home.module.css";
import { getCurrentWeather as getCurrentWeatherApi } from "../../services/apiWeather";
import { useState } from "react";

function Home({ getPosition, status }) {
  const [data, setData] = useState(null);

  async function getCurrentWeather() {
    const position = await getPosition();

    const currentWeatherData = await getCurrentWeatherApi(
      position.latitude,
      position.longitude,
    );

    console.log(currentWeatherData);

    setData(currentWeatherData);
  }

  return (
    <section className={styles.section}>
      {data && (
        <Day
          temperature={{ min: data.main.temp_min, max: data.main.temp_max }}
          iconCode={data.weather[0].icon}
        />
      )}
      <Button variant="contained" size="large" onClick={getCurrentWeather}>
        {status}
      </Button>
    </section>
  );
}
export default Home;

import styles from "./CurrentWeather.module.css";
import Day from "./Day";
import { Button } from "@mui/material";

function CurrentWeather({ data, status, setIsHome }) {
  return (
    <section className={styles.section}>
      {" "}
      <Day
        temperature={{ min: data.main.temp_min, max: data.main.temp_max }}
        iconCode={data.weather[0].icon}
      />
      <Button variant="contained" size="large" onClick={() => setIsHome(false)}>
        {status}
      </Button>
    </section>
  );
}
export default CurrentWeather;

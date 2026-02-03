import { List } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import useForecastWeather from "../../hooks/useForecastWeather";
import ForecastListItem from "./ForecastListItem";
import FloatingButton from "../../ui/FloatingButton";

// Weather forecast
// https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

function Forecast({ position, setIsHome }) {
  const { filteredForecastDataList } = useForecastWeather(position);

  function handleClickBackHome() {
    setIsHome(true);
  }

  return (
    <>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {filteredForecastDataList?.map((forecastData) =>
          ForecastListItem(forecastData),
        )}
      </List>
      <FloatingButton onClick={handleClickBackHome}>
        <HomeIcon />
      </FloatingButton>
    </>
  );
}
export default Forecast;

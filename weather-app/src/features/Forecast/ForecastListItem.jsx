import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

function ForecastListItem(forecastWeatherData) {
  return (
    <ListItem key={forecastWeatherData.id}>
      <ListItemAvatar>
        <Avatar>
          <img width={48} src={forecastWeatherData.weatherIcon} alt="" />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={forecastWeatherData.weather}
        secondary={forecastWeatherData.date.split(" ")[0]}
      />
      <span>
        {Math.floor(forecastWeatherData.min)}&deg;/
        {Math.ceil(forecastWeatherData.max)}&deg;
      </span>
    </ListItem>
  );
}
export default ForecastListItem;

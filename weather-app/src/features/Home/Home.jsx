import { Button } from "@mui/material";
// import Day from "./Day";
import { Children, useState } from "react";
import Welcome from "../../ui/Welcome";
import useCurrentWeather from "../../hooks/useCurrentWeather";
import CurrentWeather from "./CurrentWeather";

function Home({ getPosition, status, setIsHome }) {
  const { getCurrentWeather, data, isMutating } =
    useCurrentWeather(getPosition);

  if (data) {
    return <CurrentWeather data={data} status={status} setIsHome={setIsHome} />;
  }

  return (
    <>
      <Welcome>{!isMutating ? "Welcome To Weather App" : "Loading..."}</Welcome>
      <Button
        disabled={isMutating}
        variant="contained"
        size="large"
        onClick={getCurrentWeather}
      >
        {status}
      </Button>
    </>
  );
}
export default Home;

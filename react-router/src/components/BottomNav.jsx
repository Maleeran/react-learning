import { useEffect } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router";

const BottomNav = () => {
  const [value, setValue] = React.useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) {
      navigate("/");
      return;
    }

    if (value === 1) {
      navigate("/search");
      return;
    }

    if (value === 2) {
      navigate("/add");
    }
  }, [value]);

  return (
    <Box
      sx={{ width: "100%", position: "fixed", bottom: 0, left: 0, right: 0 }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
        <BottomNavigationAction label="Add" icon={<AddIcon />} />
      </BottomNavigation>
    </Box>
  );
};
export default BottomNav;

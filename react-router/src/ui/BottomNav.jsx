import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router";
import { useMemo } from "react";

const BottomNav = () => {
  const navigate = useNavigate();

  const value = useMemo(() => {
    const path = location.pathname;

    if (path === "/" || path === "") return 0;
    if (path.startsWith("/search")) return 1;
    if (path.startsWith("/add")) return 2;

    return 0; // 默认 home
  }, [location.pathname]);

  const handleChange = (_event, newValue) => {
    if (newValue === 0) {
      navigate("/");
    } else if (newValue === 1) {
      navigate("/search");
    } else if (newValue === 2) {
      navigate("/add");
    }
  };
  return (
    <Box
      sx={{ width: "100%", position: "fixed", bottom: 0, left: 0, right: 0 }}
    >
      <BottomNavigation showLabels value={value} onChange={handleChange}>
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
        <BottomNavigationAction label="Add" icon={<AddIcon />} />
      </BottomNavigation>
    </Box>
  );
};
export default BottomNav;

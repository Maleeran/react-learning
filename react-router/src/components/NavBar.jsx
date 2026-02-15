import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "fixed",
        zIndex: "2",
        width: "100%",
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            align="center"
          >
            Memorandum
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

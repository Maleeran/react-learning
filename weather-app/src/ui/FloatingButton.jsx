import { Fab } from "@mui/material";

function FloatingButton({ onClick, children }) {
  const fabstyle = {
    position: "absolute",
    bottom: 16,
    right: 16,
  };
  return (
    <Fab color="primary" sx={fabstyle} onClick={onClick}>
      {children}
    </Fab>
  );
}
export default FloatingButton;

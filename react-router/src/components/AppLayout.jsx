import { Outlet } from "react-router";
import NavBar from "./NavBar";
import BottomNav from "./BottomNav";

const AppLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <BottomNav />
    </>
  );
};
export default AppLayout;

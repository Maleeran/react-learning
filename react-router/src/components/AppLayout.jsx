import { Outlet } from "react-router";
import NavBar from "./NavBar";
import BottomNav from "./BottomNav";
import { Toaster } from "react-hot-toast";

const AppLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <BottomNav />
      <Toaster />
    </>
  );
};
export default AppLayout;

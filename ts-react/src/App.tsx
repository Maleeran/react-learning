import "./App.css";
import AdminInfo from "./Components/AdminInfo";
// import Button from "./Components/Button"
import UserInfo from "./Components/UserInfo";
import { type Info, type AdminInfoList } from "./types/usertypes";

const App = () => {
  const user: Info = {
    id: 1,
    name: "Amy",
    email: "amy@gmail.com",
  };

  const admin: AdminInfoList = {
    id: 2,
    name: "Lily",
    email: "lily@gmail.com",
    role: "admin",
    lastLogin: new Date(),
  };

  return (
    <div>
      <UserInfo {...user} />
      <AdminInfo {...admin} />
    </div>
  );
};

export default App;

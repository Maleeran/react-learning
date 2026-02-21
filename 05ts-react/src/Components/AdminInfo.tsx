import { type AdminInfoList } from "../types/usertypes";

const AdminInfo = ({ id, name, email, role, lastLogin }: AdminInfoList) => {
  return (
    <div>
      <h1>Id: {id}</h1>
      <h1>Name: {name}</h1>
      <h1>E-mail: {email}</h1>
      <h1>Role: {role}</h1>
      <h1>Last Login Time: {lastLogin.toLocaleString()}</h1>
    </div>
  );
};
export default AdminInfo;

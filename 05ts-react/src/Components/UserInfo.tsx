import { type Info } from "../types/usertypes";

const UserInfo = ({ id, name, email }: Info) => {
  return (
    <div>
      <h1>Id: {id}</h1>
      <h1>Name: {name}</h1>
      <h1>E-mail: {email}</h1>
    </div>
  );
};
export default UserInfo;

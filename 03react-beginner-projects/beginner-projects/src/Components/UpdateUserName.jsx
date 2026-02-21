import { useContext, useState } from "react";
import { UserContext } from "../UserContext";

const UpdateUserName = () => {
  const { updateUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName.trim()) {
      updateUser(newName);
      setNewName("");
    }
  };

  const [newName, setNewName] = useState("");
  return (
    <div>
      <h1>Update User Name</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newName}
          onChange={(e) => {
            setNewName(e.target.value);
          }}
        />
      </form>
    </div>
  );
};
export default UpdateUserName;

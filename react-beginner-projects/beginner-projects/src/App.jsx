import { useState } from "react";
import BasicEffect from "./Components/BasicEffect";
import CountEffect from "./Components/CountEffect";
import FetchEffect from "./Components/FetchEffect";
import UserProfile from "./Components/UserProfile";
import { UserContext } from "./UserContext";
import UpdateUserName from "./Components/UpdateUserName";
import Counter from "./Components/Counter";

const App = () => {
  const [user, setUser] = useState({ name: "John Doe" });

  const updateUser = (newName) => {
    setUser({ name: newName });
  };
  return (
    <div>
      <Counter />
      {/* <Todo/> */}
      {/* <Meals /> */}
      {/* <Calculator /> */}
      {/* <ToggleColor /> */}
      {/* <HiddenSearchBar /> */}
      {/* <Testmonials /> */}
      {/* <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div> */}
      {/* <Form /> */}
      {/* <BasicEffect /> */}
      {/* <CountEffect /> */}
      {/* <FetchEffect /> */}
      {/* <UserContext value={{ user, updateUser }}>
        <UserProfile />
        <UpdateUserName />
      </UserContext> */}
    </div>
  );
};

export default App;

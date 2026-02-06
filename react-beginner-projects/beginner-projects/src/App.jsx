import Counter from "./Components/counter";
import Todo from "./Components/Todo";
import Meals from "./Components/Meals";
import Calculator from "./Components/Calculator";
import ToggleColor from "./Components/ToggleColor";
import HiddenSearchBar from "./Components/HiddenSearchBar";
import Testmonials from "./Components/Testmonials";
import { accordionData } from "./utils/content";
import Accordion from "./Components/Accordion";
import Form from "./Components/Form";

const App = () => {
  return (
    <div>
      {/* <Counter /> */}
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
      <Form />
    </div>
  );
};

export default App;

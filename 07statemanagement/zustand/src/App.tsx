import { useStore } from "./hooks/useStore";

const App = () => {
  const { count, increment } = useStore();

  return (
    <div>
      <div>Count:{count}</div>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default App;

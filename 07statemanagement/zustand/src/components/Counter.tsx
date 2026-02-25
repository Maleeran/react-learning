import useCounterStore from "../hooks/useCounterStore";

const Counter = () => {
  const { count, history, hisrotyIndex, increment, decrement, timeTravel } =
    useCounterStore();
  return (
    <div>
      <h1>Couter:{count}</h1>
      <h2>History:{`[${history}]`}</h2>
      <button onClick={increment}> Increment</button>
      <input type="text" onChange={(e) => timeTravel(+e.target.value)} />
      <button onClick={decrement}> Decrement</button>
    </div>
  );
};
export default Counter;

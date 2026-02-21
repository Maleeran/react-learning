import { useEffect, useState } from "react";

const CountEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count:${count}`;
  }, [count]);

  return (
    <div>
      <h1>Count:{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </button>
    </div>
  );
};
export default CountEffect;

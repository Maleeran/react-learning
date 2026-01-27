/*
  1. Bind the input/select to the states
  2. Change the circle styles based on the states

  tips: circle size and rotate style:
  height: 0px,
  width: 0px,
  lineHeight: 0px,
  transform: `rotate(0deg)`,
*/

function MyApp() {
  const [size, setSize] = React.useState(150);
  const [rotate, setRotate] = React.useState(0);
  const [textColor, setTextColor] = React.useState("");
  const [isPurple, setisPurple] = React.useState(false);

  const circleClasses = `${isPurple ? "purple" : ""} ${textColor}`;

  const handleTextColorChange = function (e) {
    const value = e.target.value;
    setTextColor(value);
  };
  const handleCircleColorChange = function () {
    setisPurple(!isPurple);
  };

  return (
    <main>
      <label className="">
        Purple
        <input
          type="checkbox"
          onChange={handleCircleColorChange}
          checked={isPurple}
        />
      </label>

      <label>
        text color
        <select onChange={handleTextColorChange}>
          <option value="">White</option>
          <option value="text-black">Black</option>
          <option value="text-orange">Orange</option>
        </select>
      </label>

      <label>
        Circle Size
        <input
          type="number"
          value={size}
          onChange={(e) => {
            setSize(e.target.value);
          }}
        />
      </label>

      <label>
        Circle Rotate
        <input
          type="number"
          value={rotate}
          onChange={(e) => {
            setRotate(e.target.value);
          }}
        />
      </label>
      <div
        className={`circle ${circleClasses}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          lineHeight: `${size}px`,
          rotate: `${rotate}deg`,
        }}
      >
        Hi!
      </div>
    </main>
  );
}

const appEl = document.querySelector("#app");
const root = ReactDOM.createRoot(appEl);

root.render(<MyApp />);

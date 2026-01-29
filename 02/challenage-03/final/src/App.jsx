/*
  1. Migrate all the project to vite scaffold
  2. Abstract CircleProperty component from circle size and circle rotate
  
  More: Create TogglePurple and TextColor components

  tips: circle size and rotate style:
  height: 0px,
  width: 0px,
  lineHeight: 0px,
  transform: `rotate(0deg)`,
*/
import { useState } from 'react'
import './App.css'
import CircleProperty from './CircleProperty';
import TogglePurple from './TogglePurple';
import TextColor from './TextColor';

function MyApp() {
  const [isPurple, setIsPurple] = useState(false);
  const [textColor, setTextColor] = useState("");

  const circleClasses = `${isPurple ? "purple" : ""} ${textColor}`;

  const [size, setSize] = useState(150);
  const [rotate, setRotate] = useState(0);

  const circleStyles = {
    height: `${size}px`,
    width: `${size}px`,
    lineHeight: `${size}px`,
    transform: `rotate(${rotate}deg)`,
  };

  return (
    <main>
      <label>
        Purple
        <TogglePurple isPurple={isPurple}setIsPurple={setIsPurple}
        />
      </label>

      <label>
        text color
        <TextColor textColor={textColor} setTextColor={setTextColor}/>
        {/* <select
          value={textColor}
          onChange={(event) => setTextColor(event.target.value)}
        >
          <option value="">
            White
          </option>
          <option value="text-black">Black</option>
          <option value="text-orange">Orange</option>
        </select> */}
      </label>

      <label>
        Circle Size
        <CircleProperty type="number"
          value={size}
          onChange={(event) => setSize(event.target.value)}/>
      </label>

      <label>
        Circle Rotate
        <CircleProperty
          type="number"
          value={rotate}
          onChange={(event) => setRotate(event.target.value)}
        />
      </label>
      <div className={`circle ${circleClasses}`} style={circleStyles}>
        Hi!
      </div>
    </main>
  );
}
export default MyApp
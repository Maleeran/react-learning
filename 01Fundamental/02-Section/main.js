function App() {
  let [inputText, setInputText] = React.useState("");

  function handleChange(e) {
    const text = e.target.value;
    // console.log(text);
    setInputText(text);
  }

  return (
    <>
      <h1>Hello from React</h1>
      <input type="text" onChange={handleChange} />
      <p>{inputText}</p>
    </>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

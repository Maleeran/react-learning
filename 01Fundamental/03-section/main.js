function App() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    alert(`Username: ${username} Password:${password}`);

    setUsername("");
    setPassword("");
  }

  return (
    <main
      style={{
        border: "2px solid black ",
        textAlign: "center",
      }}
    >
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <input
          style={{
            margin: "4px",
          }}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          style={{
            margin: "4px",
          }}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button
          type="submit"
          style={{
            margin: "10px",
          }}
        >
          Login
        </button>
      </form>
    </main>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);

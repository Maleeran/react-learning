function App() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  // Derived State
  const usernameClass =
    username.length > 0 && username.length <= 2 ? "input-error" : "";
  const passwordClass =
    password.length > 0 && password.length <= 2 ? "input-error" : "";

  function handleSubmit(event) {
    event.preventDefault();

    if (usernameClass || passwordClass) {
      alert("Invalid username or password!");
      return;
    }

    alert(`Username: ${username} Password:${password}`);

    setUsername("");
    setPassword("");
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <input
          type="text"
          value={username}
          className={usernameClass}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          value={password}
          className={passwordClass}
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

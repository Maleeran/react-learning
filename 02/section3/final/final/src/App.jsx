import { useState } from 'react'
import './App.css'
import AppInput from './AppInput'
import AppButton from './AppButton';

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameClass =
    username.length <= 2 && username.length > 0 ? "input-error" : "";
  const passwordClass =
    password.length <= 2 && password.length > 0 ? "input-error" : "";

  function handleSubmit(event) {
    event.preventDefault();

    if (usernameClass.length > 0 || passwordClass.length > 0) {
      alert("Invalid username or password");
      return;
    }

    alert(`Username: ${username} Password: ${password}`);

    setUsername("");
    setPassword("");
  }

  return (
    <main>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>
        <AppInput type= "text"
          value= {username}
          className={usernameClass}
          onChange={(event) => setUsername(event.target.value)}/> 
        <br />
        <AppInput type="password"
          value={password}
          className={passwordClass}
          onChange={(event) => setPassword(event.target.value)}/>

        <br />
        {/* <AppButton children="Login"/>
        <AppButton children="Sign Up"/> */}
        <AppButton>Login</AppButton>
        <AppButton>Sign Up</AppButton>
         
      </form>
    </main>
  );
}

export default App



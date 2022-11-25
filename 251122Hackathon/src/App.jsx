import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    console.log(email);
  }
  function handleInput(e) {
    setEmail(e.target.value);
  }
  return (
    <div className="App">
      <form>
        <label htmlFor="email-input">Customer's email:</label>
        <br />
        <input type="email" id="email-input" onChange={handleInput} />
        <br />
        <input type="submit" value="Send" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default App;

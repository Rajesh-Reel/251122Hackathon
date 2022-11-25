import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    async function postEmail(email) {
      const settings = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      };
      try {
        const fetchResponse = await fetch(`http://localhost:3000/`, settings);
        const data = await fetchResponse.json();
        return data;
      } catch (e) {
        return e;
      }
    }
    postEmail(email);
  }
  function handleInput(e) {
    setEmail(e.target.value);
  }
  return (
    <div className="App">
      <h1>Wheelers & Dealers</h1>
      <form className="form">
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

import { useState, useReducer } from "react";
import "./App.css";

const reducer = (state, action) => {
  switch (action.type) {
    case 'email':
      return {...state, email: action.payload};
    case 'subject':
      return {...state, subject: action.payload};
    case 'message':
      return {...state, message: action.payload};
    default:
      throw new Error();
  }
}

function App() {
  /*
  State
  email address
  subject
  message
  */

  const [state, dispatch] = useReducer(reducer, {
    email: '',
    subject: '',
    message: ''
  })
  
  const [email, setEmail] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    async function postEmail(state) {
      const settings = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...state,
        }),
      };
      try {
        const fetchResponse = await fetch(`http://localhost:3000/new`, settings);
        const data = await fetchResponse.json();
        return data;
      } catch (e) {
        return e;
      }
    }
    postEmail(state);
  }
  
  // function handleInput(e) {
  //   setEmail(e.target.value);
  // }

  console.log(state);

  return (
    <div className="App">
      <h1>Wheelers & Dealers</h1>
      <form className="form">
        <label htmlFor="email-input">Customer's email:</label>
        <br />
        <input type="email" value={state.email} id="input-email" onChange={(e) => dispatch({ type: "email", payload: e.target.value})} />
        <br />
        <label htmlFor="subject">Subject</label>
        <br />
        <input type="text" id="input-subject" value={state.subject} onChange={(e) => dispatch({ type: "subject", payload: e.target.value})} />
        <br />
        <label htmlFor="input-message">Message</label>
        <br />
        <textarea 
          name="message"
          value={state.message}
          id="input-message"
          placeholder="Type your email here"
          onChange={(e) => dispatch({ type: "message", payload: e.target.value})}
        />
        <input type="submit" value="Send" onClick={handleSubmit} />
      </form>
    </div>
  );
}

export default App;

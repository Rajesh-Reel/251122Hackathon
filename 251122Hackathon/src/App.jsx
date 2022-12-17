import { useState, useReducer } from "react";
import "./App.css";
import Emails from "./components/Emails";
import sendRequest from "../helpers/sendRequest";

const reducer = (state, action) => {
  switch (action.type) {
    case "email":
      return { ...state, email: action.payload };
    case "subject":
      return { ...state, subject: action.payload };
    case "message":
      return { ...state, message: action.payload };
    default:
      throw new Error();
  }
};

function App() {

  const [state, dispatch] = useReducer(reducer, {
    email: "",
    subject: "",
    message: "",
  });

  function handleSubmit(e, bodyObj, url) {
    e.preventDefault();
    sendRequest(bodyObj, url);
  }
  
  return (
    <div className="App">
      <h1>Wheelers & Dealers</h1>
      <div className="row">
        <div>
          <Emails />
          <form>
            <label htmlFor="add-email">Customer's email:</label>
            <br />
            <input
              type="email"
              value={state.email}
              id="add-email"
              onChange={(e) =>
                dispatch({ type: "email", payload: e.target.value })
              }
            />
            <input
              type="submit"
              value="Add"
              onClick={(e) => handleSubmit(e, {email: state.email}, `http://localhost:3000/email`)}
              />
          </form>
        </div>
        {/*<form className="form">
           <label htmlFor="email-input">Customer's email:</label>
          <br />
          <input
            type="email"
            value={state.email}
            id="input-email"
            onChange={(e) =>
              dispatch({ type: "email", payload: e.target.value })
            }
          />
          <br /> 
          <label htmlFor="subject">Subject</label>
          <br />
          <input
            type="text"
            id="input-subject"
            value={state.subject}
            onChange={(e) =>
              dispatch({ type: "subject", payload: e.target.value })
            }
          />
          <br />
          <label htmlFor="input-message">Message</label>
          <br />
          <textarea
            name="message"
            value={state.message}
            id="input-message"
            placeholder="Type your email here"
            onChange={(e) =>
              dispatch({ type: "message", payload: e.target.value })
            }
          />
          <input type="submit" value="Send" onClick={handleSubmit} />
        </form>*/}
      </div>
    </div>
  );
}

export default App;

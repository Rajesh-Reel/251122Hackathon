import React from "react";
import { useState } from "react";
import styles from "./Email.module.css";

export default function Emails() {
  const [emailDisplay, SetEmailDisplay] = useState([]);

  async function GetAllEmails() {
    const fetchResponse = await fetch(`http://localhost:3000/new`);
    const data = await fetchResponse.json();

    SetEmailDisplay(data.rows);

    return data;
  }

  async function DeleteSpecificEmail(id) {
    const fetchResponse = await fetch(`http://localhost:3000/new/${id}`, {
      method: "DELETE",
      // body: JSON.stringify(id),
      // headers: {
      //   "Content-type": "application/json; charset=UTF-8",
      // },
    });
    // const data = await fetchResponse.json();
  }

  return (
    <div className={styles.emailContainer}>
      <button onClick={() => GetAllEmails()}>Get Database emails</button>
      <div>
        <ul>
          {emailDisplay.map((item) => {
            return (
              <div className={styles.emailRow} key={item.id}>
                <li>{item.content}</li>
                <button onClick={() => DeleteSpecificEmail(item.id)}>X</button>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

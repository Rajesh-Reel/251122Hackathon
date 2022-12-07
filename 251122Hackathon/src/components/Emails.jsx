import React from 'react'
import styles from './Email.module.css'
import { useState } from 'react';

export default function Emails() {
  const [emailDisplay, SetEmailDisplay] = useState([]);

  async function GetAllEmails(){
    //fetch info
    //store info
    //map through info
    //render info
    const fetchResponse = await fetch(`http://localhost:3000/new`);
    const data = await fetchResponse.json();
    console.log("line 15", data);
    SetEmailDisplay(data);
    return data;
  }

  return (
    <div className={styles.emailContainer}>
      <div className={styles.emailRow}>
        <p>example@gmail.com</p>
        <button onClick={()=>GetAllEmails()}>Delete</button>
      </div>
      <div className={styles.emailRow}>
        <p>example@gmail.com</p>
        <button>Delete</button>
      </div>
      <div className={styles.emailRow}>
        <p>example@gmail.com</p>
        <button>Delete</button>
      </div>
      <div className={styles.emailRow}>
        <p>example@gmail.com</p>
        <button>Delete</button>
      </div>
    </div>
  )
};
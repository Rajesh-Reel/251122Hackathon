import React from 'react'
import { useState } from 'react';
import styles from './Email.module.css'

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
    SetEmailDisplay(data.rows);
        
    // console.log("hello", emailDisplay);
    return data;
  }
  // for(let i=0; data.length; i++)
  // data.rows[i].content

  // function DisplayEmails() {
  //   const emails = data.map
  //   return emails
  // }
  function DeleteSpecificEmail() {

  }

  return (
    <div className={styles.emailContainer}>

      <button onClick={()=>GetAllEmails()}>Get Database emails</button>
      <div>
        <ul>
          {emailDisplay.map((item) => {
            return (
              <div className={styles.emailRow} key={item.id}>
                <li>{item.content}</li>
                <button>X</button>
              </div>
              )
          })}
        </ul>
      </div>
    </div>
  )
};
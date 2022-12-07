import React from 'react'
import styles from './Email.module.css'

export default function Emails() {
  return (
    <div className={styles.emailContainer}>
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
      <div className={styles.emailRow}>
        <p>example@gmail.com</p>
        <button>Delete</button>
      </div>
    </div>
  )
}
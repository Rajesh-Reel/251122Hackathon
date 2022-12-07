import styles from './Email.module.css'

function EmailStructureExample() {
    return(
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

export default EmailStructureExample;
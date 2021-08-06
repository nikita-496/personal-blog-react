import React from "react"
import send from "../../../../img/notes/send.svg"
import styles from "../../../../scss-blocks/Notes/Action.module.scss"

export default function Action () {
  return(
    <div className={styles.formActions}>
      <div className={styles.itemActions}>
        <label className={styles.addPostFile}>
          <input type="file"/>
        </label>
        
        <button className={styles.addPostSend}>
            <img src={send} alt="Отправить"/>
        </button>
      </div>
    </div>
  )
}


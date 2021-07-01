import React from "react"
import send from "../../../../../img/notes/send.svg"
import styles from "../../../../../scss-blocks/Home/Notes/Action.module.scss"

export default function Action () {
  return(
    <div className={styles.formActions}>
      <label className={styles.addPostFile}>
        <input type="file"/>
      </label>
      
      <button className={styles.addPostSend} type="submit">
          <img src={send} alt="Отправить"/>
      </button>
    </div>
  )
}


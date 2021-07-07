import React from "react"
import send from "../../../../../img/notes/send.svg"
import styles from "../../../../../scss-blocks/Home/Notes/Action.module.scss"

export default function Action (props) {
  function onAddNotes () {
    props.handleAddNotes()
  }
  return(
    <div className={styles.formActions}>
      <label className={styles.addPostFile}>
        <input type="file"/>
      </label>
      
      <button className={styles.addPostSend} onClick={onAddNotes}>
          <img src={send} alt="Отправить"/>
      </button>
    </div>
  )
}


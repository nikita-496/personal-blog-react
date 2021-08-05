import React, { useContext } from "react"
import send from "../../../../img/notes/send.svg"
import styles from "../../../../scss-blocks/Notes/Action.module.scss"
import TO_ACTION from "../../Notes"
export default function Action () {
  
  const CREATE_ARTICLE = useContext(TO_ACTION)
  
  function onAddNotes () {
    CREATE_ARTICLE()
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


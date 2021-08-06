import React from "react"
import styles from "../../../scss-blocks/Notes/EnteringNotes.module.scss"
import Action from "./Action/Action"
 
  const EnteringNotes = (props) => {
  const  onNotesText = (e) => {
    props.updateNotesText(e.target.value)
  }
  return(
    <div className={styles.wrapper} onClick={e => e.stopPropagation()}>
      <div className={styles.addPost} >
        <textarea placeholder="Написать заметку" value={props.notesText} onChange={onNotesText}/>
        <Action/>
      </div>
    </div>
  )
}

export default EnteringNotes
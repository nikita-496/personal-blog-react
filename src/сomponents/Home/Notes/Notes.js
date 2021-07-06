import React from "react"
import styles from "../../../scss-blocks/Home/Notes/Notes.modules.scss"
import EnteringNotes from "../Notes/EnteringNotes/EnteringNotes"
import ViewNotes from "../Notes/ViewNotes/ViewNotes"

export default function Notes (props) {
  return(
    <div className={styles.wrapper}>
      <EnteringNotes dispatch={props.dispatch} textNotes={props.textNotes}/>
      <ViewNotes />
    </div>
  )
}


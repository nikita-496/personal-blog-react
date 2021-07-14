import React from "react"
import styles from "../../../scss-blocks/Home/Notes/Notes.modules.scss"
import ViewNotes from "../Notes/ViewNotes/ViewNotes"
import EnteringNotesContainer from "./EnteringNotes/EnteringNotesContainer"

export default function Notes (props) {
  return(
    <div className={styles.wrapper}>
      <EnteringNotesContainer store={props.store} state={props.state}/>
      <ViewNotes />
    </div>
  )
}


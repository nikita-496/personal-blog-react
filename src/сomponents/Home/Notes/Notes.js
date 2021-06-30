import React from "react"
import styles from "../../../scss-blocks/Home/Notes/Notes.modules.scss"
import EnteringNotes from "../Notes/EnteringNotes/EnteringNotes"
import ViewNotes from "../Notes/ViewNotes/ViewNotes"

export default function Notes () {
  return(
    <div className={styles.wrapper}>
      <EnteringNotes />
      <ViewNotes />
    </div>
  )
}


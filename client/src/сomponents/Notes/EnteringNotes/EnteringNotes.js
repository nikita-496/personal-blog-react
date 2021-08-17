import React from "react"
import CustomTextArea from "../../../common/TextArea/CustomTextArea"
import styles from "../../../scss-blocks/Notes/EnteringNotes.module.scss"
import Action from "./Action/Action"

 
  const EnteringNotes = ({notesText, updateNotesText}) => {
  return(
    <div className={styles.wrapper} onClick={e => e.stopPropagation()}>
      <div className={styles.addPost} >
        <CustomTextArea  placeholder="Написать заметку"
          value={notesText} callback={updateNotesText}
        />
        <Action/>
      </div>
    </div>
  )
}
export default EnteringNotes
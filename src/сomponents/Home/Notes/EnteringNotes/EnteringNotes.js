import React from "react"
import style from "../../../../scss-blocks/Home/Notes/EnteringNotes.module.scss"
import Action from "./Action/Action"


export default function EnteringNotes (props) {
  
  function handleTextNotes (e) {
    props.updateNotesText(e.target.value)
  }
  return(
    <div className={style.wrapper}>
      <div className={style.addPost} >
        <textarea placeholder="Написать заметку" value={props.notes.textNotes} onChange={handleTextNotes}/>
        <Action addNotes={props.addNotes} value={props.notes.textNotes}/>
      </div>
    </div>
  )
}
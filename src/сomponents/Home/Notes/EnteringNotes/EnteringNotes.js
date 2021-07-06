import React from "react"
import { udDateNotesTextActionCreator } from "../../../../redux/notes-reducer.js"
import style from "../../../../scss-blocks/Home/Notes/EnteringNotes.module.scss"
import Action from "./Action/Action"

export default function EnteringNotes (props) {
  
  function handleTextNotes (e) {
    props.dispatch(udDateNotesTextActionCreator(e.target.value))
  }
  return(
    <div className={style.wrapper}>
      <div className={style.addPost} >
        <textarea placeholder="Написать заметку" value={props.textNotes} onChange={handleTextNotes}/>
        <Action dispatch={props.dispatch} />
      </div>
    </div>
  )
}
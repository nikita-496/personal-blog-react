import React from "react"
import style from "../../../../scss-blocks/Home/Notes/EnteringNotes.module.scss"
import Action from "./Action/Action"

export default function EnteringNotes (props) {
  function onTextNotes (e) {
    props.handleTextNotes(e.target.value)
  }
  return(
    <div className={style.wrapper}>
      <div className={style.addPost} >
        <textarea placeholder="Написать заметку" value={props.textNotes} onChange={onTextNotes}/>
        <Action handleAddNotes={props.handleAddNotes} />
      </div>
    </div>
  )
}
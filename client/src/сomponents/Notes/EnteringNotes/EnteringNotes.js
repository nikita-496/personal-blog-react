import React from "react"
import style from "../../../scss-blocks/Notes/EnteringNotes.module.scss"
import Action from "./Action/Action"

  const EnteringNotes = (props) => {
  function onTextNotes (e) {
    props.handleTextNotes(e.target.value)
  }
  return(
    
    <div className={style.wrapper} onClick={e => e.stopPropagation()}>
      <div className={style.addPost} >
        <textarea placeholder="Написать заметку" value={props.textNotes} onChange={onTextNotes}/>
        <Action/>
      </div>
    </div>
  )
}

export default EnteringNotes
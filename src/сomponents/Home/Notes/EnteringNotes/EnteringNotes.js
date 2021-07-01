import React from "react"
import style from "../../../../scss-blocks/Home/Notes/EnteringNotes.module.scss"
import Action from "./Action/Action"


export default function EnteringNotes () {
  return(
    <div className={style.wrapper}>
      <form className={style.addPost}action="/"  method="porst">
        <textarea name="post-note" placeholder="Написать заметку"/>
        <Action />
      </form>
    </div>
  )
}
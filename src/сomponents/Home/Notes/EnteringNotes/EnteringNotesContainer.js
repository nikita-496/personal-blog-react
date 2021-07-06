import React from "react"
import { addNotesTextActionCreator, updateNotesTextActionCreator } from "../../../../redux/notes-reducer.js"
import EnteringNotes from "./EnteringNotes.js"

export default function EnteringNotesContainer (props) {
  function onAddNotes () {
    props.store.dispatch(addNotesTextActionCreator())
  }
  function onTextNotes (text) {
    props.store.dispatch(updateNotesTextActionCreator(text))
  }
  return(<EnteringNotes handleTextNotes={onTextNotes} handleAddNotes={onAddNotes} textNotes={props.state.notesComponent.textNotes}/>)
}


import { connect } from "react-redux"
import { createNotesThunk, setCategory, updateNotesText, updateNotesTitle } from "../../redux/features/notes/notes-slice"
import Notes from "./Notes"

let mapStateToProps = (state) => {
  return {
    notesText: state.notes.notesText,
    notes: state.notes.noteItems
  }
}

const NotesContainer = connect (mapStateToProps, {updateNotesTitle, updateNotesText, setCategory, createNotesThunk})(Notes)
export default NotesContainer

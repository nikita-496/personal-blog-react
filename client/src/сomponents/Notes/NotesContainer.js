import { connect } from "react-redux"
import { addNotesTextActionCreator, updateNotesTextActionCreator } from "../../redux/features/notes/notes-slice"
import Notes from "./Notes"

let mapStateToProps = (state) => {
  return {
    textNotes: state.notes.textNotes,
    notes: state.notes.noteItems
  }
}
let mapDipsatchToProps = (dispatch) => {
  return {
    handleTextNotes: (text) => {
      dispatch(updateNotesTextActionCreator(text))
    },
    handleAddNotes: () => {
      dispatch(addNotesTextActionCreator())
    }
  }
}

const NotesContainer = connect (mapStateToProps, mapDipsatchToProps)(Notes)
export default NotesContainer
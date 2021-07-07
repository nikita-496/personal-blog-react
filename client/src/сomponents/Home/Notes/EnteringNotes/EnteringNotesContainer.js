import { connect } from "react-redux"
import { addNotesTextActionCreator, updateNotesTextActionCreator } from "../../../../redux/notes-reducer.js"
import EnteringNotes from "./EnteringNotes.js"

let mapStateToProps = (state) => {
  return {
    textNotes: state.notesComponent.textNotes,
    notes: state.notesComponent.notes
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

const EnteringNotesContainer = connect (mapStateToProps, mapDipsatchToProps)(EnteringNotes)
export default EnteringNotesContainer

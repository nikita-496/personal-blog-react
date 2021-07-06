const UPDATE_NOTES_TEXT = "UPDATE-NOTES-TEXT"
const ADD_NOTES = "ADD-NOTES"

let initialState = {
    notes : [],
    textNotes: ""
  }

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NOTES_TEXT: 
    state.textNotes = action.newTextNotes
      return state
    case ADD_NOTES:
      let newNotes = {
        id: Date.now(),
        text: state.textNotes
      }
      state.notes.push(newNotes)
      state.textNotes = ""
      return state
    default: 
      return state  
  }
}

export const udDateNotesTextActionCreator = (text) => ({
  type:UPDATE_NOTES_TEXT, 
  newTextNotes: text
})
export const addNotesTextActionCreator = () => ({type:ADD_NOTES})

export default notesReducer
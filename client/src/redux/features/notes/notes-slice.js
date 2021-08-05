const UPDATE_NOTES_TEXT = "UPDATE-NOTES-TEXT"
const ADD_NOTES = "ADD-NOTES"

let initialState = {
    noteItems : [],
    textNotes: ""
  }

const notesReducer = (state = initialState, action) => {
  switch (action.type) {

    case UPDATE_NOTES_TEXT: {
      let stateCopy = {...state}
      stateCopy.textNotes = action.newTextNotes
      return stateCopy
    }

    case ADD_NOTES: {
      let newNotes = {
        id: Date.now(),
        text: state.textNotes
      }
      let stateCopy = {...state}
      stateCopy.notes = [...state.notes]
      stateCopy.notes.push(newNotes)
      stateCopy.textNotes = ""
      return stateCopy
    }

    default: 
      return state  
  }
}

export const updateNotesTextActionCreator = (text) => ({
  type: UPDATE_NOTES_TEXT, 
  newTextNotes: text
})
export const addNotesTextActionCreator = () => ({type:ADD_NOTES})

export default notesReducer
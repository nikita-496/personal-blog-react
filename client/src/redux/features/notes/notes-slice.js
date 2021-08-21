import {NotesService } from "../../../api/api"
import settingDate from "../../../utility/date"
import update from "../../../utility/update"


const UPDATE_NOTES_TITLE = "notes/notesUpdateNotesTitle"
const UPDATE_NOTES_TEXT = "notes/notesUpdateNotesText"
const SET_CATEGORY = "notes/setCategory"
const NOTES_ADDED = "notes/notesAdded"
const GET_NOTES = "notes/notesGetNotes"


let initialState = {
  notesTitle: "",
  notesText: "",
  notesCategory: "",
  noteItems : [],
}

const notesReducer = (state = initialState, action) => {
  switch (action.type) {

    case UPDATE_NOTES_TITLE: {
      return update(state, action, "notesTitle", "state.notesTitle")
    }
    case UPDATE_NOTES_TEXT: {
      return update(state, action, "notesText", "state.notesText")
    }
    case SET_CATEGORY: {
      return update(state, action, "notesCategory", "state.notesCategory")
    }
    case NOTES_ADDED: {
      let stateCopy = {...state}
      let newNotes = {
        title: state.notesTitle,
        text: state.notesText,
        publicDate: settingDate(),
        category: state.notesCategory
      }
      stateCopy.noteItems = newNotes
      return stateCopy
    }
    case GET_NOTES: {
      let stateCopy = {...state, noteItems: action.payload}
      return stateCopy
    }
    default: 
      return state  
  }
}

export const updateNotesTitle = (payload) => ({type: UPDATE_NOTES_TITLE, payload})
export const updateNotesText = (payload) => ({type: UPDATE_NOTES_TEXT, payload})
export const setCategory= (payload) => ({type: SET_CATEGORY, payload})
export const addNotes = () => ({type:NOTES_ADDED})
export const getNotes = (payload) => ({type:GET_NOTES, payload})

export const createNotesThunk = () => {
  return (dispatch, getState) => {
    dispatch(addNotes())
    NotesService.createNotes(getState())
    }
  }

export const getNotesThunk = () => {
  return (dispatch) => {
    NotesService.getNotes().then(response => {
      dispatch(getNotes(response.data))
    })
  }
}


export default notesReducer
import settingDate from "../../../utility/date"
import update from "../../../utility/update"
import { ADD, GET, TEXT_UPDATE } from "./case"

const initialState = {
  newCommentText: "",
  comment: [
      {
       _id: "",    
       author: "",
       avatar: "",
       text: "",
       publicDate: null,
      }   
  ]
}     

const commentCreationReducer = (state = initialState, action) => {
  switch(action.type) {
      case TEXT_UPDATE : {
          return update(state, action, "newCommentText", "state.newCommentText") 
      }
      case ADD : {
        let stateCopy = {...state}
        let newComment = {
            text: state.newCommentText,
            publicDate: settingDate(),
        }
        stateCopy.comment = newComment
        stateCopy.newCommentText = ""
        return stateCopy
      }
      case GET : {
        let stateCopy =  {...state, comment: action.payload}
        return stateCopy
      }
          default: 
          return state
  }
}

export default commentCreationReducer
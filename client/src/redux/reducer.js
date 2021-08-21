import { combineReducers} from "redux"
import articleCreationReducer from "./features/article/articles-slice"
import commentCreationReducer from "./features/comments/comments-slice"
import notesReducer from "./features/notes/notes-slice"

const rootReducer = combineReducers({
    articles: articleCreationReducer,
    notes: notesReducer,
    comments: commentCreationReducer,
})

export default rootReducer
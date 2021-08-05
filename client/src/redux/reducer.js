import { combineReducers} from "redux"
import articleCreationReducer from "./features/article/articles-slice"
import notesReducer from "./features/notes/notes-slice"

const rootReducer = combineReducers({
    articles: articleCreationReducer,
    notes: notesReducer
})

export default rootReducer
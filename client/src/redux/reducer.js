import postsReducer from "./features/posts/posts-slice"
import { combineReducers} from "redux"

const rootReducer = combineReducers({
    posts: postsReducer,
})

export default rootReducer
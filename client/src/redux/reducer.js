import postsReducer from "./features/posts/posts-slice"
import { combineReducers} from "redux"
import articleCreationReducer from "./features/article-creation/articles-slice"

const rootReducer = combineReducers({
    posts: postsReducer,
    articles: articleCreationReducer 
})

export default rootReducer
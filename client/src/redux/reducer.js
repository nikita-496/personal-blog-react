import postsReducer from "./features/posts/posts-slice"
import { combineReducers} from "redux"
import articleCreationReducer from "./features/article-creation/articles-slice"

const rootReducer = combineReducers({
    posts: postsReducer,
    createArticles: articleCreationReducer 
})

export default rootReducer
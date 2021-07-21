import filtersReducer from "./features/filters/filters-slice"
import postsReducer from "./features/posts/posts-slice"
import { combineReducers} from "redux"
/*
const rootReducer = (state = {}, action) => {
    //возвращаем новый объект для root state
    return {
        //значения "state.posts" - то, что вернет reducer постов
        posts: postsReducer(state.posts, action),
        //для обоих reducer передаем только их slice состояния
        filters: filtersReducer(state.filters, action)
    }
}
*/

const rootReducer = combineReducers({
    posts: postsReducer,
    filters: filtersReducer
})

export default rootReducer
import { combineReducers, createStore } from "redux";
import arcticleReducer from "./article-reducer";
import notesReducer from "./notes-reducer";
import postReducer from "./posts-reducer";


let reducers = combineReducers({
  notesComponent: notesReducer,
  postsComponent: postReducer,
  textPage: arcticleReducer
})

let store = createStore(reducers)

export default store
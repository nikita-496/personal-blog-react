import { combineReducers, createStore } from "redux";
import arcticleReducer from "./article-reducer";
import notesReducer from "./notes-reducer";
import postReducer from "./posts-reducer";
import sandboxReducer from "./sandbox-reducer";

let reducers = combineReducers({
  notesComponent: notesReducer,
  postsComponent: postReducer,
  textPage: arcticleReducer,
  sandBox: sandboxReducer
})

let store = createStore(reducers)

window.store = store

export default store
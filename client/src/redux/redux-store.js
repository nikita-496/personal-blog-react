import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import arcticleReducer from "./article-reducer";
import notesReducer from "./notes-reducer";
import postReducer from "./posts-reducer";
import sandboxReducer from "./sandbox-reducer";

let reducers = combineReducers({
  notesComponent: notesReducer,
  postsComponent: postReducer,
  textPage: arcticleReducer,
  sandBox: sandboxReducer,
})

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducers, composeEnhancers(applyMiddleware()
  ));

export default store
import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducer";

/*import arcticleReducer from "./article-reducer";
import notesReducer from "./notes-reducer";
import postReducer from "./posts-reducer";
import sandboxReducer from "./sandbox-reducer";

let reducers = combineReducers({
  notesComponent: notesReducer,
  postsComponent: postReducer,
  textPage: arcticleReducer,
  sandBox: sandboxReducer,
})*/

//загрузка начального состояния
//для добавления исходных даннхы при создании store, таких как значения, включеные 
//в HTML-страницу
//отправленные с сервера 
//сохраненные в localStorage
//а также для чтения, когда пользователь вновь посетил страницу
let preloaderState  
const persistedPostsString = localStorage.getItem("posts")

if (persistedPostsString) {
  preloaderState = {
    posts:JSON.parse(persistedPostsString)
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(rootReducer, preloaderState, composeEnhancers(applyMiddleware()
  ));

export default store
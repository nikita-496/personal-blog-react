import srcPost from "../img/post/Conference.jpg";
import srcText from "../img/text-page/code.jpg";
import articleReducer from "./article-reducer";
import notesReducer from "./notes-reducer";
import postsReducer from "./posts-reducer";

export let store = {
  _state: {
    notesComponent: {
      notes : [],
      textNotes: ""
    },
    postsComponent: {
      posts : [
        {id: 1, title: "Как я сходил на FrontEnd Conf 2021", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.", img: srcPost, publicDate: "1.07.2021", category: "создание сайтов", link: "читать"}
      ]
    },
    textPage: {
      arcticle: [
        {
        id: 1, title: "Как я сходил на FrontEnd Conf 2021", paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.", img: srcText,publicDate: "1.07.2021", category: "создание сайтов"
        }
      ]
    }
  },
  getState() {
    return this._state
  },
  _callSubscribe () {
      console.log("state changed")
    },
  dispatch(action) {
    this._state.notesComponent = notesReducer(this._state.notesComponent,action)
    this._state.postsComponent = postsReducer(this._state.postsComponent,action)
    this._state.textPage = articleReducer(this._state.textPage,action)
    this._callSubscribe(this._state)
    }, 
  subscribe(observer) {
    this._callSubscribe = observer  // observer
  }
}


window.store = store
import srcPost from "../img/post/Conference.jpg";
import srcText from "../img/text-page/code.jpg";

export let store = {
  _state: {
    home: {
      posts : [
        {id: 1, title: "Как я сходил на FrontEnd Conf 2021", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.", img: srcPost, publicDate: "1.07.2021", category: "создание сайтов", link: "читать"}
    ],
      notes : [],
      textNotes: ""
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
  disaptch(action) {
    
    if (action.type === "UPDATE-NOTES-TEXT") {
        this._state.home.textNotes = action.newTextNotes
        this._callSubscribe()
    }else if (action.type === "ADD-NOTES") {
        
        let newNotes = {
          id: Date.now(),
          text: this._state.home.textNotes
        }
        this._state.home.notes.push(newNotes)
        this._state.home.textNotes = ""
        this._callSubscribe()
      }
    },
  subscribe(observer) {
    this._callSubscribe = observer  // observer
  }
}

window.store = store
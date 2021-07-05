import srcPost from "../img/post/Conference.jpg";
import srcText from "../img/text-page/code.jpg";

function rerenderEntireTree () {
  console.log("state changed")
}

let state = {
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
}

window.state = state

export function updateNotesText (textNotes) {
  state.home.textNotes = textNotes
  rerenderEntireTree()
}

export function addNotes () {
  let newNotes = {
    id: Date.now(),
    text: state.home.textNotes
  }
  state.home.notes.push(newNotes)
  state.home.textNotes = ""
  rerenderEntireTree()
}

export function subscribe(observer) {
  rerenderEntireTree = observer  // observer
}
export default state

 
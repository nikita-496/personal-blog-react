import srcPost from "../img/post/Conference.jpg";

let initialState = {
  posts : [
    {id: 1, title: "Как я сходил на FrontEnd Conf 2021", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.", img: srcPost, publicDate: "1.07.2021", category: "создание сайтов", link: "читать"}
  ]
}

const postReducer = (state = initialState, action ) => {

  return state
}

export default postReducer
import React from "react"
import src from "../../../img/post/Conference.jpg"
import Post from "./Post/Post"



export default function Posts () {
  let posts = [
    {id: 1, title: "Как я сходил на FrontEnd Conf 2021", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat.", img: src, publicDate: "1.07.2021", category: "создание сайтов", link: "читать"}
  ]

  let postsElement = posts.map(p => <Post  titleArticle={p.title} text={p.text} src={p.img} date={p.publicDate} tagsName={p.category} nameLink={p.link} key={p.id}/>)


  return(
    <div >
     {postsElement}
    </div>
  )
}
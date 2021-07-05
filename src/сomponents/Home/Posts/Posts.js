import React from "react"
import Post from "./Post/Post"



export default function Posts (props) {

  let postsElement = props.posts.map(p => <Post  titleArticle={p.title} text={p.text} src={p.img} date={p.publicDate} tagsName={p.category} nameLink={p.link} key={p.id}/>)


  return(
    <div >
     {postsElement}
    </div>
  )
}
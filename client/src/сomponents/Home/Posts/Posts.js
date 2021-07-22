import React from "react"
import Post from "./Post/Post"

export default function Posts (props) {

  let postsElement = props.posts.map(p => <Post  
    key={p._id}
    titleArticle={p.title} 
    text={p.text} 
    src={p.img} 
    date={p.publicDate} 
    tagsName={p.category} 
    nameLink={p.link} 
    selected = {p.selected}
    />)
  
  const handleCategory = (e) => {
     (e.target.value === "все") ? props.viewAllPosts(e.target.value)
    : props.viewSelectedPosts(e.target.value)
  }

  return(
    <div>
      <div>
        <button value={"css"} onClick={handleCategory}>css</button>
        <button value={"javascript"} onClick={handleCategory}>javascript</button>
        <button value={"react"} onClick={handleCategory}>react</button>
        <button value={"другое"} onClick={handleCategory}>другое</button>
        <button value={"все"} onClick={handleCategory}>все</button>
      </div>
     {postsElement}
    </div>
  )
}
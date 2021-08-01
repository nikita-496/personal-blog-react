import React, { useEffect, useState } from "react"
import Post from "../../Home/Posts/Post/Post"

export default function Posts ({posts, getPostsThunk}) {
  const [category, setCategory] = useState("все")
  
  useEffect(()=> {
    getPostsThunk(category)
  },[category])
  
  let postsElement
  (posts.length !== 0) ? postsElement = posts.map(p => <Post  
    key={p._id}
    titleArticle={p.title} 
    text={p.text} 
    date={p.publicDate} 
    tagsName={p.category} 
    nameLink={p.link} 
    />) 
    : postsElement = posts

  const handleCategory = (e) => {
      return setCategory(e.target.value)
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
      <p style={ {color: "#ffff"}}>Length is {posts.length}</p>
      {postsElement}
    </div>
  )
}
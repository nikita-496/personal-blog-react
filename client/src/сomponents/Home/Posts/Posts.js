import React, { useEffect, useState } from "react"
import Post from "../../Home/Posts/Post/Post"

export const getContext = React.createContext() 

export default function Posts ({posts, getPostsThunk, article, getArticleThunk}) {
  const [category, setCategory] = useState("все")  
  useEffect(() => {
    if(posts.length === 0) {
      getPostsThunk("все")
    }
  })
  
  useEffect(()=> {
    getPostsThunk(category)
  },[category])

  let postsElement
  (posts.length !== 0) ? postsElement = posts.map(p => 
      <getContext.Provider value = {{article, getArticleThunk}}>
        <Post  
          key={p._id}
          titleArticle={p.title} 
          text={p.paragraph} 
          date={p.publicDate} 
          tagsName={p.category} 
          nameLink={p.link} 
        />
      </getContext.Provider>
    ) 
    : postsElement = null
  
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
      {postsElement}
    </div>
  )
}
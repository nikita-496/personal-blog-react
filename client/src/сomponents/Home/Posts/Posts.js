import React, { useEffect, useState } from "react"
import Post from "../../Home/Posts/Post/Post"

export default function Posts ({article, getArticlesThunk}) {
  debugger
  const [category, setCategory] = useState("все")  
  useEffect(() => {
    if(article.title === "") {
      getArticlesThunk()
    }
  })
  
  useEffect(()=> {
    getArticlesThunk(category)
  },[category])

  let articleElement
  (article.length !== 0) ? articleElement = article.map(a => 
        <Post  
          id={a._id}
          titleArticle={a.title} 
          text={a.paragraph} 
          date={a.publicDate} 
          tagsName={a.category} 
        />
    ) 
    : articleElement = null
  
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
      {articleElement}
    </div>
  )
}
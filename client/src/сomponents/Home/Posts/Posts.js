import React, { useEffect, useState } from "react"
import Post from "../../Home/Posts/Post/Post"
import Pagination from "./Pagination/Pagination"

export default function Posts ({article, getArticlesThunk, totalCount, pageSize, currentPage}) {

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
          category={a.category} 
        />
    ) 
    : articleElement = null
  
  let pagesCount = Math.ceil(totalCount / pageSize)

  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }
  
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
      <Pagination pages={pages} currentPage={currentPage}/>
    </div>
  )
}
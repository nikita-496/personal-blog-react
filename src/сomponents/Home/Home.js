import React from "react"
import CategoriesArticles from "./CategoriesArticle/CategoriesArticles"
import Notes from "./Notes/Notes"
import Posts from "./Posts/Posts"

export default function Home () {
  return(
    <div>
      <CategoriesArticles />
      <Notes />
      <Posts />
    </div>
  )
}


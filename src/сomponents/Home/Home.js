import React from "react"
import CategoriesArticles from "./CategoriesArticle/CategoriesArticles"
import Notes from "./Notes/Notes"
import Post from "./Post/Post"

export default function Home () {
  return(
    <div>
      <CategoriesArticles />
      <Notes />
      <Post />
    </div>
  )
}


import React from "react"
import CategoriesArticles from "./CategoriesArticle/CategoriesArticles"
import Notes from "./Notes/Notes"
import Posts from "./Posts/Posts"

export default function Home (props) {
  return(
    <div>
      <CategoriesArticles />
      <Notes dispatch={props.dispatch} textNotes={props.home.textNotes}/>
      <Posts posts={props.home}/>
    </div>
  )
}

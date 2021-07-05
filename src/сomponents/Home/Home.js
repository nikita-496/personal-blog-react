import React from "react"
import CategoriesArticles from "./CategoriesArticle/CategoriesArticles"
import Notes from "./Notes/Notes"
import Posts from "./Posts/Posts"

export default function Home (props) {
  return(
    <div>
      <CategoriesArticles />
      <Notes addNotes={props.addNotes} updateNotesText={props.updateNotesText} notes={props.home.notes}/>
      <Posts posts={props.home}/>
    </div>
  )
}

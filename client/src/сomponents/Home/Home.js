import React from "react"
import Notes from "./Notes/Notes"
import Posts from "./Posts/Posts"
import CategoriesArticles from "./CategoriesArticle/CategoriesArticles"
export default function Home (props) {
  let state = props.store.getState()
  return(
    <div>
      <CategoriesArticles state={state.postsComponent}/>
      <Posts state={state.postsComponent}/>
      <Notes store={props.store} state={state}/>
    </div>
  )
}

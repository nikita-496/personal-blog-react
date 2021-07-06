import React from "react"
import CategoriesArticles from "./CategoriesArticle/CategoriesArticles"
import Notes from "./Notes/Notes"
import Posts from "./Posts/Posts"

export default function Home (props) {
  let state = props.store.getState()
  return(
    <div>
      <CategoriesArticles />
      <Notes store={props.store} state={state}/>
      <Posts posts={state.postsComponent.posts}/>
    </div>
  )
}

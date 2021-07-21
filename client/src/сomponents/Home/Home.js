import React from "react"
import Notes from "./Notes/Notes"
import Posts from "./Posts/Posts"
import CategoriesArticles from "./CategoriesArticle/CategoriesArticles"
export default function Home (props) {
  let state = props.store.getState()
  return(
    <div>
      <CategoriesArticles category={state.filters}/>
      <Posts posts={state.posts}/>
      {/*<Notes store={props.store} state={state}/>*/}
    </div>
  )
}

import React from "react"
import Notes from "./Notes/Notes"
import PostsContainer from "./Posts/PostsContainer"

export default function Home () {
  return(
    <div>
      <PostsContainer />
      {/*<Notes store={props.store} state={state}/>*/}
    </div>
  )
}

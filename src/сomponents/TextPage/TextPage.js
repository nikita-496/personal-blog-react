import React from "react"
import Articles from "./Articles/Articles"


export default function TextPage (props) {
  let state = props.store.getState()
  return(
    <div>
      <Articles arcticle={state.textPage.arcticle}/>
    </div>
  )
}
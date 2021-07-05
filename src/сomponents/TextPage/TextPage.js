import React from "react"
import Articles from "./Articles/Articles"


export default function TextPage (props) {
  return(
    <div>
      <Articles text={props.article}/>
    </div>
  )
}
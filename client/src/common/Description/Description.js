import React from "react"
import SubTitle from "./SubTitle"
import Title from "./Title"

export default function Description (props) {

  return (
    <div>
      <Title title={props.title} titleArticle={props.titleArticle}/>
      <SubTitle description={props.description}/>
    </div>
  )
}
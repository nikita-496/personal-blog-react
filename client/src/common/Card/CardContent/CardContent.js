import React from "react"
import SubTitle from "../../Text/SubTitle"
import Title from "../../Text/Title"

export default function CardContent (props) {
  return (
    <div>
      <Title titleArticle={props.titleArticle}/>
      <SubTitle description={props.description}/>
    </div>
  )
}
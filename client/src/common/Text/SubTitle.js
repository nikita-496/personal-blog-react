import React from "react"
import SubTitlestyles from "../scss-blocks/Text.module.scss"

export default function SubTitle (props) {
  const handleText = text => {
    let paragraphList = text.split("\n").map(paragraph => 
    <p className={ paragraph === "" ? SubTitlestyles.newParagraph : SubTitlestyles.subTitleArticle}>{paragraph}</p>
    )
    
    return paragraphList

  }
  return (
    <>
      {
         (props.description) ?  
         <p className={SubTitlestyles.subTitleArticle}>{props.description}</p>
         :  (props.text) ?  handleText(props.text) 
         :  (props.about) ? <p className={SubTitlestyles.about}>{props.about}</p>
         : <p className={SubTitlestyles.subTitleNotes}>{props.notes}</p>
      }
    </>
  )
}

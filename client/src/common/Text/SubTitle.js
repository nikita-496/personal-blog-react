import React from "react"
import styles from "../scss-blocks/SideBar/Description.module.scss"

export default function SubTitle (props) {
  const handleText = text => {
    let paragraphList = text.split("\n").map(paragraph => <p className={styles.subTitleArticle}>{paragraph}</p>)
    return paragraphList

  }
  return (
    <div>
      {
         (props.description) ?  
         <p className={styles.subTitleArticle}>{props.description}</p>
         :  (props.text) ?  handleText(props.text) 
         :  (props.about) ? <p className={styles.about}>{props.about}</p>
         : <p className={styles.subTitleNotes}>{props.notes}</p>
      }
    </div>
  )
}

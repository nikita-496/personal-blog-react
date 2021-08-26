import React from "react"
import styles from "../scss-blocks/SideBar/Description.module.scss"

export default function SubTitle (props) {
  return (
    <div>
      {
         (props.description) ?  
         <p className={styles.subTitleArticle}>{props.description}</p>
         :  (props.text) ?  <p className={styles.subTitleArticle}>{props.text}</p>
         :  (props.about) ? <p className={styles.about}>{props.about}</p>
         : <p className={styles.subTitleNotes}>{props.notes}</p>
      }
    </div>
  )
}
import React from "react"
import styles from "../scss-blocks/SideBar/Description.module.scss"

export default function Title (props) {
  
  return (
    <div>
      {(props.title) ? <p className={styles.heading}>{props.title}</p> 
      :  <p className={styles.headingArticle}>{props.titleArticle}</p> 
      }
    </div>
  )
}
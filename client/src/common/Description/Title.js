import React from "react"
import styles from "../scss-blocks/SideBar/Description.module.scss"

export default function Title (props) {
  
  return (
    <div>
      {(props.title) ? <h3 className={styles.heading}>{props.title}</h3> 
      :  <h3 className={styles.headingArticle}>{props.titleArticle}</h3> 
      }
    </div>
  )
}
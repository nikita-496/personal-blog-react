import React  from "react"
import styles from "../../scss-blocks/Card/Tags.module.scss"


export default function Tags (props) {
  return (
    <>
        {
            (props.header) ? <div className={styles.tagsHeader}> {props.children} </div> 
          : (props.link === "читать") ? <div className={styles.tagsFooter}> {props.children} </div>
          : (props.articleData) ? <div className={styles.tagsFooter}> {props.children} </div>
          : <div className={styles.works}> {props.children} </div>
        } 
   </>
  )
}
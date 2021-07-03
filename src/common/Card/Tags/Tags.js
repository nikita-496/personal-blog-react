import React from "react"
import share from "../../../img/text-page/share.svg"
import styles from "../../scss-blocks/Card/Tags.module.scss"



export default function Tags (props) {
  let date = "1.07.2021" 

  return (
    <div className={styles.tagsWrapper}>
       {
      (props.headerTags) ?  <>
      <a href="/" className={styles.action}> вернуться назад</a>
      <a href="/" className={styles.action}> поделиться <img src={share}/>
      </a>
      </>

      : (props.tagsName)  ? <>
      <div className={styles.tags}>
          <time className={styles.date} dateTime="2021-07-01">{date}</time>
          <span className={styles.caregoty}>{props.tagsName}</span>
        </div>
           {props.children}
        </>
      : <>  
        <time className={styles.datePublic} dateTime="2021-07-01">{date}</time>
      </>
      }
    </div>
  )
}
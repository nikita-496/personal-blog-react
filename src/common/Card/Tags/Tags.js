import React from "react"
import share from "../../../img/text-page/share.svg"
import Button from "../../Button/Button"
import styles from "../../scss-blocks/Card/Tags.module.scss"

/*function ListTags (props) {
  return(
    <li>
      {props.value}
    </li>
  )
}*/

export default function Tags (props) {
  let date = "1.07.2021" 
  /*const listTags = props.workTags.map(tag => {
    <ListTags key={tag} value={tag} /> 
  })*/

  return (
    <>
       {
      (props.headerTags) ?  <div className={styles.tagsWrapper}>
      <a href="/" className={styles.action}> вернуться назад</a>
      <a href="/" className={styles.action}> поделиться <img src={share}/>
      </a>
      </div>

      : (props.tagsName)  ?  <div className={styles.tagsWrapper}>
      <div className={styles.tags}>
          <time className={styles.date} dateTime="2021-07-01">{date}</time>
          <span className={styles.caregoty}>{props.tagsName}</span>
        </div>
           {props.children}
        </div>
      : (props.workTags) ? <div className={styles.wrapper}>
            <ul className={styles.workTags}>
              <li>дизайн</li>
              <li>создание сайтов</li>
              <li>SMM</li>
            </ul>
            <div className={styles.footer}>
              <Button text="перейти на сайт"/>
            </div>
            </div>
      :  <div className={styles.tagsWrapper}> 
        <time className={styles.datePublic} dateTime="2021-07-01">{date}</time>
      </div>
      }
   </>
  )
}
import React from "react"
import share from "../../../img/text-page/share.svg"
import Button from "../../Button/Button"
import styles from "../../scss-blocks/Card/Tags.module.scss"


export default function Tags (props) {
  
  return (
    <>
       {
      (props.headerTags) ?  <div className={styles.tagsWrapperArticle}>
      <a href="/" className={styles.action}> вернуться назад</a>
      <a href="/" className={styles.action}> поделиться <img src={share} alt="share"/>
      </a>
      </div>

      : (props.tagsName)  ?  <div className={styles.tagsWrapperPosts}>
        <div className={styles.tags}>
            <time className={styles.date} dateTime="2021-07-01">{props.date}</time>
            <span className={styles.caregoty}>{props.tagsName}</span>
        </div>
        <div>
          <a href="/" className={styles.link}>{props.nameLink}</a>
        </div>
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
        <time className={styles.datePublic} dateTime="2021-07-01">{props.date}</time>
      </div>
      }
   </>
  )
}
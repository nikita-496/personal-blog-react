import React from "react"
import Card from "../../../../common/Card/Card"
import Tags from "../../../../common/Card/Tags/Tags"
import Description from "../../../../common/Description/Description"
import Logo from "../../../../common/Logo/Logo"
import styles from "../../../../scss-blocks/Home/Post/Post.module.scss"




export default function Post (props) {
 
  return(
    <div className={styles.wrapper}>
      <Card>
      <div className={styles.content}>
        <Logo src={props.src}/>
        <Description text={props.text} titleArticle={props.titleArticle}/>
        <Tags tagsName={props.tagsName} date={props.date} nameLink={props.nameLink}/>
      </div>  
      </Card> 
    </div>
  )
}


/*
<div className={styles.footerPost}>
            <div className={styles.tags}>
              <time className={styles.date} dateTime="2021-07-01">{props.date}</time>
              <span className={styles.caregoty}>{props.tagNames}</span>
            </div>
            <a href="/" className={styles.link}>{props.nameLink}</a>
          </div>
        </div>
*/
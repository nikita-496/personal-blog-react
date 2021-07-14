import React from "react"
import Description from "../../Description/Description"
import Logo from "../../Logo/Logo"
import styles from "../../scss-blocks/Card/CardPosts.module.scss"
import Card from "../Card"
import Tags from "../Tags/Tags"

export default function CardPost (props) {
  return(
    <div className={styles.wrapper}>
     <Card>
       { (props.src) ?  <>
       <Logo src={props.src}/>
       <div className={styles.content}>
       <Description className={styles.text} 
          text={props.text}
          titleArticle={props.titleArticle}
          />
          <Tags tagsName={props.category}>
              <a href="/" className={styles.link}>{props.nameLink}</a>
          </Tags>
        </div>
       </>
       : <div className={styles.content}>
       <Description className={styles.text} 
           text={props.text}
           titleArticle={props.titleArticle}
          />
          <Tags tagsName={props.category}>
              <a href="/" className={styles.link}>{props.nameLink}</a>
          </Tags>
       </div>
      }
      </Card>
    </div>
  )
}
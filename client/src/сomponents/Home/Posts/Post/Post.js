import React from "react"
import Card from "../../../../common/Card/Card"
import Tags from "../../../../common/Card/Tags/Tags"
import Description from "../../../../common/Description/Description"
import Logo from "../../../../common/Logo/Logo"
import styles from "../../../../scss-blocks/Home/Post/Post.module.scss"

export default function Post (props) {
  const isSelected = props.selected
  return(
    <div className={styles.wrapper}>
      {isSelected 
      ? <Card>
          <div className={styles.content}>
            <Logo src={props.src}/>
            <Description text={props.text} titleArticle={props.titleArticle}/>
            <Tags tagsName={props.tagsName} date={props.date} nameLink={props.nameLink}/>
          </div>  
      </Card>
      : <> </>
    } 
    </div>
  )
}


import React from "react"
import Card from "../../../common/Card/Card"
import CardPost from "../../../common/Card/CardPosts/CardPosts"
import src from "../../../img/post/Conference.jpg"
import styles from "../../../scss-blocks/Home/Post/Post.module.scss"


export default function Post () {
  return(
    <div className={styles.wrapper}>
     <Card>
       <CardPost src={src} nameLink="читать"/>
      </Card>
    </div>
  )
}

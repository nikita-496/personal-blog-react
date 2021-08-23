import React from "react"
import CommentFiled from "../../../../common/Field/Field"
import styles from "../../../../scss-blocks/TextPage/Comments/Comments.module.scss"
import Comment from "./Comment/Comment"

export default function Comments (props) {
  return (
    <div className={styles.wrapperCommets}>
      <h4 className={styles.title}>Комментарии</h4>
      <CommentFiled value={props.value} callback={props.callback}
       create={props.create} changeState={props.changeState} id={props.id} flag={"comment"}
       placeholder={"Текст комментария"}/>
      <Comment commentData={props.commentData}/>
    </div>
  )
}
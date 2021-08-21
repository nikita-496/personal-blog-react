import React from "react"
import CommentFiled from "../../../../common/Field/Field"
import styles from "../../../../scss-blocks/TextPage/Comments/Comments.module.scss"
import Comment from "./Comment/Comment"

export default function Comments (props) {
  return (
    <div className={styles.wrapperCommets}>
      <h4 className={styles.title}>Обсуждения</h4>
      <CommentFiled newComment={props.newComment} updateComments={props.updateComments} 
      createComment={props.createComment} id={props.id}/>
      <Comment commentText={props.commentText}/>
    </div>
  )
}
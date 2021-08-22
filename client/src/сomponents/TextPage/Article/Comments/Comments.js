import React, { useEffect, useState } from "react"
import CommentFiled from "../../../../common/Field/Field"
import useFetching from "../../../../hooks/useFetching"
import styles from "../../../../scss-blocks/TextPage/Comments/Comments.module.scss"
import Comment from "./Comment/Comment"

export default function Comments ({commentText, updateComments, ...props}) {
  return (
    <div className={styles.wrapperCommets}>
      <h4 className={styles.title}>Комментарии</h4>
      <CommentFiled commentText={commentText} 
      updateComments={updateComments} create={props.create}
      comments={props.comments} change={props.change}
      id={props.id}/>
      <Comment commentData={props.commentData} />
    </div>
  )
}
import React from "react"
import styles from "../../../../common/scss-blocks/Field.module.scss"
import Comment from "./Comment/Comment"
import FieldwitHover from "../../../../common/Field/FieldWithHover"

export default function Comments (props) {
  return (
    <div className={styles.wrapperCommets}>
      <h4 className={styles.title}>Комментарии</h4>
      <FieldwitHover  createComment={props.createComment} changeState={props.changeState} 
          value={props.value} callback= {props.callback} 
          placeholder={"Текст комментария"} text={"Оставить комменатрий"}
          isButton={props.isButton} id={props.id} comment={props.comment}/>
      <Comment commentData={props.commentData}/>
    </div>
  )
}


import React from "react"
import fieldStyles from "../../../../common/scss-blocks/Field.module.scss"
import Comment from "./Comment/Comment"
import FieldwitHover from "../../../../common/Field/FieldWithHover"

function checkComment (data) {
  let rootComment
  return (!data.parentId) ? rootComment = <Comment comment={data}/> : null
 
}

export default function Comments (props) {
  return (
    <div className={fieldStyles.wrapperCommets}>
      <h4 className={fieldStyles.title}>Комментарии</h4>

      <FieldwitHover  createComment={props.createComment} changeState={props.changeState} 
          value={props.value} callback= {props.callback} 
          placeholder={"Текст комментария"} text={"Оставить комменатрий"}
          isButton={props.isButton} id={props.id} comment={props.comment}/>

      <div className={fieldStyles.coometsContainer}>
          {props.commentData ? checkComment(props.commentData): null}
      </div>
     
    </div>
  )
}


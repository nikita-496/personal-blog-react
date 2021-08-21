import React from "react"
import Button from "../Button/Button"
import CustomTextArea from "../CustomTags/CustomTextArea"
import styles from "../scss-blocks/Field.module.scss"

export default function CommentFiled ({newComment, updateComments,createComment, id}) {
  return ( 
    <form className={styles.form}>
      <div className={styles.formGroup}> 
      <CustomTextArea formControl={styles.formControl} placeholder={"Текст комментария"}
      value={newComment} callback={updateComments} createComment={createComment} id={id}>
        <span className={styles.formLine}></span>
      </CustomTextArea>
      
    </div>
    </form>
  )
}
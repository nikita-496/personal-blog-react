import React from "react"
import Button from "../Button/Button"
import CustomTextArea from "../CustomTags/CustomTextArea"
import styles from "../scss-blocks/Field.module.scss"

export default function CommentFiled ({commentText, updateComments, create, withComments, id, ...props}) {
  return ( 
    <div className={styles.form}>
      <div className={styles.formGroup}> 
      <CustomTextArea formControl={styles.formControl} placeholder={"Текст комментария"}
        value={commentText} callback={updateComments} 
        create={create} comments={props.comments} 
        change={props.change} id={id} 
      >
        <span className={styles.formLine}></span>
      </CustomTextArea>
      
    </div>
    </div>
  )
}
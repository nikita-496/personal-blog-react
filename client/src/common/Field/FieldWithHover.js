import React from "react"
import Button from "../Button/Button"
import CustomTextArea from "../CustomTags/CustomTextArea"
import styles from "../scss-blocks/Field.module.scss"

export default function FiledwitHover (props) { 
  return ( 
    <>
    <form className={styles.form}>
      <div className={styles.formGroup}>
        <CustomTextArea value={props.value} callback={props.callback} placeholder={props.placeholder} 
        className={styles.formControl} type={props.type}/>
        <span className={styles.formLine}/>
      </div>
      {props.isButton ? <Button createComment={props.createComment} value={props.value}
      changeState={props.changeState} id={props.id}>{props.text}</Button> : <></>}
    </form>
    </>
  )
}
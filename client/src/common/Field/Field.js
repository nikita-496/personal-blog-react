import React from "react"
import Button from "../Button/Button"
import styles from "../scss-blocks/Field.module.scss"

export default function Filed (props) {
  return ( 
  <form className={styles.form} action="/" method="post">
    { (props.btn) ? <>
    <div className={styles.formGroup}> 
      <textarea className={styles.formControl} name="comment-text" placeholder={props.placeholder}/>
      <span className={styles.formLine}></span>
    </div>
    <Button text={props.text}/>
    </>

    : <>
    <div className={styles.formGroup}> 
      <textarea className={styles.formControl} name="comment-text" placeholder={props.placeholder}/>
      <span className={styles.formLine}></span>
    </div>
  
    </>
  }
  </form>
  )
}
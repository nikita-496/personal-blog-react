import React from "react"
import Button from "../Button/Button"
import styles from "../scss-blocks/Field.module.scss"
export default function Filed () {
  return (
      <form className={styles.form} action="/" method="post">
        <div className={styles.formGroup}> 
          <textarea className={styles.formControl} name="comment-text" placeholder="Текст комментария"/>
          <span className={styles.formLine}></span>
        </div>
        <Button text="Отправить"/>
        
      </form>
  )
}
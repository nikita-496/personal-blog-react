import React from "react"
import Field from "../../../../common/Field/Field"
import styles from "../../../../scss-blocks/TextPage/Comments/Comments.module.scss"
import Comment from "./Comment/Comment"

export default function Comments () {
  return (
    <div className={styles.wrapperCommets}>
      <h4 className={styles.title}>Обсуждения</h4>
      <Field/ >
      <Comment />
    </div>
  )
}
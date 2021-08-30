import React from "react"
import styles from "../scss-blocks/Button.module.scss"

export default function Button (props) {
  const onCreate = (id, cb, comment) => {
    props.createComment(id)
    cb(comment)
  }
  
  const selectCategorise = (categories) => categories.map(category => <button key={category} className={styles[category]} 
      text={category} onClick={props.onClick}> {(category === "other" ? "другое" : category)}
      </button>)

  return (
    <div className={styles.btnWrapper}>
      {
        props.name ? selectCategorise(props.name) 
        : (props.id) ? <button className={styles.request} 
        onClick={() => onCreate(props.id, props.changeState, props.value)}>{props.children}</button>
        : <button className={props.create ? styles.modal : styles.request} onClick={props.onClick}>{props.children}</button>
      }

    </div>
  )
}

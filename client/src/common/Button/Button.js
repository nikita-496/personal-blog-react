import React from "react"
import styles from "../scss-blocks/Button.module.scss"

export default function Button (props) {
  const handle = (id, call, comment) => {
    props.createComment(id)
    call(comment)
  }
  return (
    <div className={styles.btnWrapper}>
      {props.category ? 
        props.category.map(c => {
          return <button key={c} className={styles[c]} text={c} onClick={props.onClick}> {(c=== "other" ? "другое" : c)}</button>
        })
        : (props.flag) ? <button className={props.create ? styles.create : styles.link} onClick={() => handle(props.id, props.change, props.text)}>{props.children}</button>
        : <button className={props.create ? styles.create : styles.link}>{props.children}</button>
      }
    </div>
  )
}

import React from "react"
import styles from "../scss-blocks/Button.module.scss"

export default function Button (props) {
  const handle = (id) => {
    props.createComments(id)
  }
  return (
    <div className={styles.btnWrapper}>
      {props.category ? 
        props.category.map(c => {
          return <button key={c} className={styles[c]} text={c} onClick={props.onClick}> {(c=== "other" ? "другое" : c)}</button>
        })
        : (props.comment) ? <button className={props.create ? styles.create : styles.link} onClick={() => handle(props.id)}>{props.children}</button>
        : <button className={props.create ? styles.create : styles.link}>{props.children}</button>
      }
    </div>
  )
}

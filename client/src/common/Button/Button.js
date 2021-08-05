import React from "react"
import styles from "../scss-blocks/Button.module.scss"

export default function Button (props) {
  return (
    <div className={styles.btnWrapper}>
      {props.category ? 
        props.category.map(c => {
          return <button className={styles[c]} text={c} onClick={props.onClick}> {(c=== "other" ? "другое" : c)}</button>
        })
        : <button className={props.create ? styles.create : styles.link} onClick={props.onClick}>{props.children}</button>
      }
    </div>
  )
}

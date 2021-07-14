import React from "react"
import styles from "../scss-blocks/Button.module.scss"

export default function Button (props) {
  return (
    <div className={styles.btnWrapper}>
      <button className={styles.link} type="submit" onClick={props.onClick}>{props.text}</button>
    </div>
  )
}
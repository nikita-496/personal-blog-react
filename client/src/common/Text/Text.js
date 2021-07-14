import React from "react"
import styles from "../scss-blocks/Text.module.scss"


export default function Text (props) {
  return (
    <div>
      <p className={styles.text}>{props.text}</p>
    </div>
  )
}
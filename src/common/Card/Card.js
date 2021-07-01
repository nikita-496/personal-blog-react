import React from "react"
import styles from "../../common/scss-blocks/Card/Card.module.scss"


export default function Card (props) {
  return (
    <div className={styles.cardWrapper}>
      {props.children}
    </div>
  )
}
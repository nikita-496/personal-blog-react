import React from "react"
import styles from "../../common/scss-blocks/Card/Card.module.scss"


export default function Card (props) {
  return (
    <div className={props.active ? styles.modalContent : styles.cardWrapper} onClick={e => e.stopPropagation()}>
      {props.children}
    </div>
  )
}
import React from "react"
import cardStyles from "../../common/scss-blocks/Card/Card.module.scss"


export default function Card (props) {
  return (
    <div className={props.active ? cardStyles.modalContent : cardStyles.cardWrapper} onClick={e => e.stopPropagation()}>
      {props.children}
    </div>
  )
}
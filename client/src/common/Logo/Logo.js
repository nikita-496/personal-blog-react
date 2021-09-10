import React from "react"
import logoStyles from "../scss-blocks/Logo.module.scss"

export default function Logo (props) {
  return (
    <>
      <img className={props.comment ? logoStyles.commentAuthor : logoStyles.logo} src={props.src} alt={props.src}/>
    </>
  )
}
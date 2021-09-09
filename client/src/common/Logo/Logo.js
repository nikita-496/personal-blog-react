import React from "react"
import logoStyles from "../scss-blocks/Logo.module.scss"

export default function Logo (props) {
  return (
    <>
      <img className={logoStyles.logo} src={props.src} alt={props.src}/>
    </>
  )
}
import React from "react"
import styles from "../scss-blocks/Logo.module.scss"

export default function Logo (props) {
  return (
    <div>
      <img className={styles.logo}src={props.src} alt={props.src}/>
    </div>
  )
}
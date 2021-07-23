import React from "react"
import styles from "../scss-blocks/Button.module.scss"

export default function Button (props) {
  
  const choiseBtn = () => {
    if (props.css) return styles.cssBtn 
    if (props.js) return styles.jsBtn 
    if (props.react) return styles.reactBtn  
    if(props.other) return styles.otherBtn 
  }

  return (
    <div className={styles.btnWrapper}>
      <button className={props.category ? choiseBtn() : styles.link} 
      type="submit" onClick={props.onClick}>{props.text}</button>
    </div>
  )
}
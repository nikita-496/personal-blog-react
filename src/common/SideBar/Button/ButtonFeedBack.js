import React from "react"
import styles from "../../scss-blocks/SideBar/Button.module.scss"

export default function ButtonFeedBack () {
  return (
    <button className={styles.feedback}> 
    <a href="/">Написать мне</a>
    </button>
  )
}
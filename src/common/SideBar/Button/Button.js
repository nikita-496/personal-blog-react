import React from "react"
import styles from "../../scss-blocks/SideBar/Button.module.scss"


export default function Button () {
  return (
    <div className={styles.btnWrapper}>
      <button className={styles.work}>
        <a href="/">Мои работы</a>
      </button>
      
      <button className={styles.feedback}> 
        <a href="/">Написать мне</a>
      </button>
    </div>
  )
}
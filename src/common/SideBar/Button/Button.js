import React from "react"
import styles from "../../scss-blocks/SideBar/Button.module.scss"
import ButtonFeedBack from "../Button/ButtonFeedBack"
import ButtonWork from "../Button/ButtonWork"

export default function Button () {
  return (
    <div className={styles.btnWrapper}>
      <ButtonWork />
      <ButtonFeedBack />
    </div>
  )
}
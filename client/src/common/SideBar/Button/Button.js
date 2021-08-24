import React from "react"
import styles from "../../scss-blocks/SideBar/Button.module.scss"
import ButtonFeedBack from "./ButtonFeedBack"
import ButtonWork from "./ButtonWork"

export default function Button () {
  return (
    <div className={styles.btnWrapper}>
      <ButtonWork />
      <ButtonFeedBack />
    </div>
  )
}
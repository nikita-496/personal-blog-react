import React from "react"
import bntStyles from "../../scss-blocks/SideBar/Button.module.scss"
import ButtonFeedBack from "./ButtonFeedBack"
import ButtonWork from "./ButtonWork"

export default function Button () {
  return (
    <div className={bntStyles.btnWrapper}>
      <ButtonWork />
      <ButtonFeedBack />
    </div>
  )
}
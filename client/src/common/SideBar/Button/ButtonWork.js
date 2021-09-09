import React from "react"
import { NavLink } from "react-router-dom"
import bntStyles from "../../scss-blocks/SideBar/Button.module.scss"

export default function ButtonWork () {
  return (
      <button className={bntStyles.work}>
        <NavLink to="works">Мои работы</NavLink>
      </button>
  )
}

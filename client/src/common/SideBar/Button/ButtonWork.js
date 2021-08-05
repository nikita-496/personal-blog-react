import React from "react"
import { NavLink } from "react-router-dom"
import styles from "../../scss-blocks/SideBar/Button.module.scss"

export default function ButtonWork () {
  return (
      <button className={styles.work}>
        <NavLink to="works">Мои работы</NavLink>
      </button>
  )
}

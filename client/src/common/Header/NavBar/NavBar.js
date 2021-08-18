import React from "react"
import { NavLink } from "react-router-dom"
import styles from "../../scss-blocks/Header/NavBar.module.scss"

export default function NavBar () {
  return (
    <span className={styles.s}>
      <NavLink className={styles.nav} to="/all">Главная</NavLink>
      <NavLink className={styles.nav} to="/note">Заметки</NavLink>
      <NavLink className={styles.nav} to="/sandbox"></NavLink>
      <NavLink className={styles.nav} to="/search"></NavLink>
      <NavLink className={styles.nav} to="/auth"></NavLink>
      <NavLink className={styles.nav} to="/signup"></NavLink>
      <NavLink className={styles.nav} to="/reset"></NavLink>
      <NavLink className={styles.nav} to="/error"></NavLink>
      <NavLink className={styles.nav} to="/profile">Профиль</NavLink>
    </span>
  )
}


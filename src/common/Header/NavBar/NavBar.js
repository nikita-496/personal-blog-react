import React from "react"
import { NavLink } from "react-router-dom"
import styles from "../../scss-blocks/Header/NavBar.module.scss"




export default function NavBar () {
  return (
    <span className={styles.s}>
      <NavLink className={styles.nav} to="/Home">Главная</NavLink>
      <NavLink className={styles.nav} to="/TextPage">Статьи</NavLink>
      <NavLink className={styles.nav} to="/Notes">Заметки</NavLink>
      <NavLink className={styles.nav} to="/SearchResult"></NavLink>
      <NavLink className={styles.nav} to="/Works"></NavLink>
      <NavLink className={styles.nav} to="/Auth"></NavLink>
      <NavLink className={styles.nav} to="/SignUp"></NavLink>
      <NavLink className={styles.nav} to="/Reset"></NavLink>
      <NavLink className={styles.nav} to="/Profile">Профиль</NavLink>
    </span>
  )
}


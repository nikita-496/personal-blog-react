import React from "react"
import { NavLink } from "react-router-dom"
import styles from "../../scss-blocks/Header/NavBar.module.scss"




export default function NavBar () {
  return (
    <span className={styles.s}>
      <NavLink className={styles.nav} to="/Home">Главная</NavLink>
      <NavLink className={styles.nav} to="/TextPage">Статьи</NavLink>
      <NavLink className={styles.nav} to="/Works">Обо мне</NavLink>
      <NavLink className={styles.nav} to="/SearchResult">Реклама</NavLink>
      <NavLink className={styles.nav} to="/Profile">Профиль</NavLink>
    </span>
  )
}


import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AuthContext } from "../../_functionality/Context/context"
import styles from "../../scss-blocks/Header/NavBar.module.scss"

export default function NavBar () {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  //в момент выхода из приложения, удаляем запись об авторизации из хранилища
  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem("auth")
  }

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
      <button onClick={logout}>Выйти</button>
    </span>
  )
}


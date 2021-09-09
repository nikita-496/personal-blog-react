import React, { useContext } from "react"
import headerStyles from "./Header.module.scss"
import { AuthContext } from "../_functionality/Context/context"
import SearchContainer from "./Search/SearchContainer"
import { NavLink } from "react-router-dom"

export default function Header () {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  //в момент выхода из приложения, удаляем запись об авторизации из хранилища
  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem("auth")
  }

  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.headerContainer}>
        <div className={headerStyles.headerMenu}>
         <NavLink to="/all">
           <img src="http://dummyimage.com/40x40/c0c0c0" alt="logo"></img>
         </NavLink>
          <div className={headerStyles.searchBox}>
            <SearchContainer />
          </div>
          <div className={headerStyles.profile}>
            <button onClick={logout}>Выйти</button>
          </div>
        </div>

        </div>
    </header>
  )
}



import React, { useContext } from "react"
import FieldwitHover from "../../common/Field/FieldWithHover"
import { AuthContext } from "../../common/_functionality/Context/context"
import styles from "../../scss-blocks/Auth/Auth.module.scss"


export default function Auth () {
  const {isAuth, setIsAuth} = useContext(AuthContext)
  
  const login = () => {
    setIsAuth(true)
    //в момент авторизации сохраняем статус в хранилище 
    localStorage.setItem("auth", "true")
  }
  return(
    <div>
      <p className={styles.title}>Вход</p>
      <form className={styles.profileWrapper} >
          <div>
            <FieldwitHover  placeholder="Имя пользователя"/>
            <FieldwitHover btn="true" type="password" text="Войти" placeholder="Пароль"/>
          </div>
          <div className={styles.authFooter}>
            <ul>
              <li>
              <button onClick={login}>войти</button>
              </li>
              <li>
              <a href="Reset">восстановить</a>
              </li>
              <li>
              <a href="SignUp">регистрация</a></li>
            </ul>
          </div>
      </form>
    </div>
  )
}
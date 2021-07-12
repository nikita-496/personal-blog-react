import React from "react"
import Filed from "../../common/Field/Field"
import styles from "../../scss-blocks/Auth/Auth.module.scss"


export default function Auth () {
  return(
    <div>
      <p className={styles.title}>Вход</p>
      <div className={styles.profileWrapper}>
          <div>
            <Filed  placeholder="Имя пользователя"/>
            <Filed btn="true" type="password" text="Войти" placeholder="Пароль"/>
          </div>

          <div className={styles.authFooter}>
            <ul>
              <li>
              <a href="Reset">восстановить</a>
              </li>
              <li>
              <a href="SignUp">регистрация</a></li>
            </ul>
          </div>
      </div>
    </div>
  )
}
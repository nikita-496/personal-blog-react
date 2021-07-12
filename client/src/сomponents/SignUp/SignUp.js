import React from "react"
import Filed from "../../common/Field/Field"
import styles from "../../scss-blocks/SignUp/SignUp.module.scss"


export default function SignUp () {
  return(
    <div>
      <p className={styles.title}>Регистрация</p>
      <div className={styles.profileWrapper}>
          <div>
            <Filed placeholder="Имя пользователя"/>
            <Filed type="email"placeholder="E-mail"/>
          <Filed  type="password" placeholder="Пароль"/>
          <Filed btn="true" type="password"  text="Регистрация" placeholder="Подтвердить пароль"/>
          </div>

          <div className={styles.authFooter}>
            <ul>
              <li>
              <a href="Auth">вход</a>
              </li>
              <li>
              <a href="Reset">восстановить</a></li>
            </ul>
          </div>
         
      </div>
    </div>
  )
}
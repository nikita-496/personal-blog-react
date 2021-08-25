import React from "react"
import FiledwitHover from "../../common/Field/FieldWithHover"
import styles from "../../scss-blocks/SignUp/SignUp.module.scss"


export default function SignUp () {
  return(
    <div>
      <p className={styles.title}>Регистрация</p>
      <div className={styles.profileWrapper}>
          <div>
            <FiledwitHover placeholder="Имя пользователя"/>
            <FiledwitHover type="email"placeholder="E-mail"/>
          <FiledwitHover  type="password" placeholder="Пароль"/>
          <FiledwitHover btn="true" type="password"  text="Регистрация" placeholder="Подтвердить пароль"/>
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
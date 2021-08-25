import React from "react"
import FiledwitHover from "../../common/Field/FieldWithHover"
import styles from "../../scss-blocks/Reset/Reset.module.scss"

export default function Reset () {
  return(
    <div>
      <p className={styles.title}>Восстановить пароль</p>
      <div className={styles.profileWrapper}>
          <div>
            <FiledwitHover type="email" placeholder="E-mail"/>
            <FiledwitHover btn="true" type="password" text="Восстановить" placeholder="Пароль"/>
          </div>

          <div className={styles.authFooter}>
            <ul>
              <li>
              <a href="Auth">вход</a>
              </li>
              <li>
              <a href="SignUp">регистрация</a></li>
            </ul>
          </div>
      </div>
    </div>
  )
}
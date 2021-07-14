import React from "react"
import Filed from "../../common/Field/Field"
import Logo from "../../common/Logo/Logo"
import src from "../../img/profile/avatar.png"
import styles from "../../scss-blocks/Profile/Profile.module.scss"


export default function Profile () {
  return(
    <div>
      <p className={styles.title}>Профиль</p>
      <div className={styles.profileWrapper}>
        <div className={styles.field}>
          <Filed  placeholder="Имя пользователя"/>
          <Filed type="email" placeholder="E-mail"/>
          <Filed  type="password" placeholder="Новый пароль"/>
          <Filed  btn="true" type="password" text="Сохранить" placeholder="Подтвердить пароль"/>
        </div>

        <div>
          <Logo src={src}/>
          <label>
            <input type="file"/>выбрать аватар
          </label>
        </div>
      </div>
    </div>
  )
}
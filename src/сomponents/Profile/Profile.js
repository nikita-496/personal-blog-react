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
          <Filed type="profile" placeholder="Имя пользователя"/>
          <Filed type="profile" placeholder="E-mail"/>
          <Filed type="profile" placeholder="Новый пароль"/>
          <Filed text="Сохранить" placeholder="Подтвердить пароль"/>
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
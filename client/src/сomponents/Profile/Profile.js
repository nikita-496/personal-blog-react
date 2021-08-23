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
          <Filed  placeholder="Имя пользователя" flag={null}/>
          <Filed type="email" placeholder="E-mail" flag={null}/>
          <Filed  type="password" placeholder="Новый пароль" flag={null}/>
          <Filed  type="password" placeholder="Подтвердить пароль" flag={"profile"}/>
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
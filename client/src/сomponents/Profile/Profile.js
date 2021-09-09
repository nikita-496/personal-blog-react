import React from "react"
import FieldwitHover from "../../common/Field/FieldWithHover"
import Logo from "../../common/Logo/Logo"
import withButton from "../../hoc/withButton"
import src from "../../img/profile/avatar.png"
import styles from "../../scss-blocks/Profile/Profile.module.scss"

 function Profile ({isButton}) {
  return(
    <div>
      <p className={styles.title}>Профиль</p>
      <div className={styles.profileWrapper}>
        <div className={styles.field}>
          <FieldwitHover  placeholder="Имя пользователя" />
          <FieldwitHover type="email" placeholder="E-mail"/>
          <FieldwitHover type="password" placeholder="Новый пароль" />
          <FieldwitHover type="password" placeholder="Подтвердить пароль" isButton={isButton} text={"Сохранить"}/>
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

export default withButton(Profile)
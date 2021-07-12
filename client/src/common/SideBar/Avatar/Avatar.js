import React from "react"
import avatarIcon from "../../../img/side-bar/123.png"
import Logo from "../../Logo/Logo"
import styles from "../../scss-blocks/SideBar/Avatar.module.scss"


export default function Avatar () {
  return (
    <div className={styles.avatarWrapper}>
     <Logo src={avatarIcon}/>
    </div>
  )
}
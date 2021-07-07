import React from "react"
import Description from "../Description/Description"
import styles from "../scss-blocks/SideBar/SideBar.module.scss"
import AboutMe from "./AboutMe/AboutMe"
import Avatar from "./Avatar/Avatar"
import Button from "./Button/Button"
import HeaderSideBar from "./HeaderSideBar/HeaderSideBar"
import Social from "./Social/Social"


export default function Sidebar () {
  return (
    <div className={styles.sidebar}>
      <HeaderSideBar />
      <Avatar />
      <Description title="Никита Шевкунов" about="блог Front-end разработчика"/>
      <Social />
      <AboutMe />
      <Button />
    </div>
  )
}


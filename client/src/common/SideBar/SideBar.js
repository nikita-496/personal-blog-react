import React from "react"
import SubTitle from "../Text/SubTitle"
import Title from "../Text/Title"
import styles from "../scss-blocks/SideBar/SideBar.module.scss"
import AboutMe from "./AboutMe/AboutMe"
import Avatar from "./Avatar/Avatar"
import Button from "./Button/Button"
import HeaderSideBar from "./HeaderSideBar/HeaderSideBar"
import Social from "./Social/Social"

export default function Sidebar () {
  return (
    <aside className={styles.sidebar}>
      <HeaderSideBar />
      <div className={styles.fixedPart}>
        <Avatar />
        <Title title={true}>Никита Шевкунов</Title>
        <SubTitle about={"блог Front-end разработчика"}/>
        <Social />
        <AboutMe />
        <Button />
      </div>
    </aside>
  )
}


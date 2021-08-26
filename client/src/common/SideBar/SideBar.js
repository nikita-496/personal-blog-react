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
    <div className={styles.sidebar}>
      <HeaderSideBar />
      <Avatar />
      <Title titleArticle="Никита Шевкунов"/>
      <SubTitle about={"блог Front-end разработчика"}/>
      <Social />
      <AboutMe />
      <Button />
    </div>
  )
}


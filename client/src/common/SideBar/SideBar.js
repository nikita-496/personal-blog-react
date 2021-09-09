import React from "react"
import SubTitle from "../Text/SubTitle"
import Title from "../Text/Title"
import sideBarStyles from "../scss-blocks/SideBar/SideBar.module.scss"
import AboutMe from "./AboutMe/AboutMe"
import Button from "./Button/Button"
import Social from "./Social/Social"
import Logo from "../Logo/Logo"
import logoHeader from "../../img/side-bar/default.jpg"

const  HeaderSideBar = () =>  <Logo src={logoHeader}> </Logo> 

export default function Sidebar () {
  return (
    <aside className={sideBarStyles.sidebar}>
      <HeaderSideBar />
      <div className={sideBarStyles.container}>
        <article className={sideBarStyles.authorInfo}>
          <Title title={true}>Никита Шевкунов</Title>
          <SubTitle about={"Front-end разработчик"}/>
        </article>
        <Social />
        <AboutMe />
        <Button />
      </div>
    </aside>
  )
}


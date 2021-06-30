import React from "react"
import styles from "../scss-blocks/SideBar/SideBar.module.scss"
import AboutMe from "./AboutMe/AboutMe"
import Avatar from "./Avatar/Avatar"
import Description from "./Description/Description"
import HeaderSideBar from "./HeaderSideBar/HeaderSideBar"
import Social from "./Social/Social"

export default function Sidebar () {
  return (
    <div className={styles.sidebar}>
      <HeaderSideBar />
      <Avatar />
      <Description />
      <Social />
      <AboutMe />
    </div>
  )
}



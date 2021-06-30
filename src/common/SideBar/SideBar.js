import React from "react"
import AboutMe from "./AboutMe/AboutMe"
import Avatar from "./Avatar/Avatar"
import Description from "./Description/Description"
import HeaderSideBar from "./HeaderSideBar/HeaderSideBar"
import Social from "./Social/Social"


export default function Sidebar () {
  return (
    <div>
     <HeaderSideBar />
     <Avatar />
     <Description />
     <Social />
     <AboutMe />
    </div>
  )
}



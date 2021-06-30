import React from "react"
import style from "../../../scss-blocks/Home/Post/Post.module.scss"
import Description from "./DescriptionPost/DescriptionPost"
import FooterPost from "./FooterPost/FooterPost"
import HeaderPost from "./HeaderPost/HeaderPost"
import TitlePost from "./TitlePost/TitlePost"


export default function Post () {
  return(
    <div className={style.wrapper}>
      <HeaderPost />
      <TitlePost />
      <Description />
      <FooterPost />
    </div>
  )
}


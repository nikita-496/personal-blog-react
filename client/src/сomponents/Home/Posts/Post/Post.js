import React, { useContext, useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import Card from "../../../../common/Card/Card"
import Tags from "../../../../common/Card/Tags/Tags"
import Description from "../../../../common/Description/Description"
import Logo from "../../../../common/Logo/Logo"
import styles from "../../../../scss-blocks/Home/Post/Post.module.scss"
import tagStyle from "../../../../common/scss-blocks/Card/Tags.module.scss"
import { getId } from "../Posts"

export default function Post (props) {
  debugger
  return(
    <div className={styles.wrapper}>
      <Card>
          <div className={styles.content}>
            <Logo src={props.src}/>
            <Description text={props.text} titleArticle={props.titleArticle}/>
            {
            (props.titleArticle === "Ничего не найдено!") ? <></>
            :  <Tags>
            <div className={tagStyle.tagsWrapperPosts}>
              <div className={tagStyle.tags}>
                 <time className={tagStyle.date}>{props.date}</time>
                  <span className={tagStyle.caregoty}>{props.tagsName}</span>
              </div>
              <NavLink to ={"/article/" + props.id}>
                <span className={tagStyle.link}>читать</span>
              </NavLink>
            </div>
          </Tags>
          } 
          </div>  
      </Card>
    </div>
  )
}


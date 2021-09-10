import React from "react"
import { NavLink } from "react-router-dom"
import Card from "../../../../common/Card/Card"
import Tags from "../../../../common/Card/Tags/Tags"
import Logo from "../../../../common/Logo/Logo"
import postStyles from "../../../../scss-blocks/Home/Post/Post.module.scss"
import tagStyle from "../../../../common/scss-blocks/Card/Tags.module.scss"
import Title from "../../../../common/Text/Title"
import SubTitle from "../../../../common/Text/SubTitle"
import { IoMdTime } from "react-icons/io"
import { FcLikePlaceholder } from "react-icons/fc"


export default function Post (props) {
  return(
    <div className={postStyles.wrapper}>
      <Card>
          <div className={postStyles.content}>
            <div className={postStyles.header}>
              <Title titleArticle={true}>{props.titleArticle}</Title>
            </div>
            <div className={postStyles.poster}>
              <Logo src={props.src}/>
            </div>
        
            { props.titleArticle === "Ничего не найдено!" ? <></>
            :  
            <div className={postStyles.postWrap}>
              <SubTitle className={postStyles.description} description={props.description}/>
              <Tags link={true} >
                <div className={tagStyle.tags}>
                  <div className={tagStyle.iconTimeWrap}>
                    <IoMdTime className={tagStyle.iconTime}/>
                  </div>
                  <time className={tagStyle.date}>{props.date}</time>
                  <span className={tagStyle.category}>{props.category}</span>
                </div>
                <div className={tagStyle.like}>
                  <div className={tagStyle.iconLikeWrap}>
                    <FcLikePlaceholder className={tagStyle.iconLike}/>
                  </div>
                    <spna>&#124;</spna>
                    <spna className={tagStyle.counterLike}>12</spna>
                </div>
                <NavLink to ={"/article/" + props.id} className={tagStyle.nav}>
                    <span className={tagStyle.link}>читать</span>
                </NavLink>
              </Tags>
            </div>
            } 
          </div>  
      </Card>
    </div>
  )
}


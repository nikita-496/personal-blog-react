import React from "react"
import { NavLink } from "react-router-dom"
import Card from "../../../../common/Card/Card"
import Tags from "../../../../common/Card/Tags/Tags"
import Logo from "../../../../common/Logo/Logo"
import postStyles from "../../../../scss-blocks/Home/Post/Post.module.scss"
import tagStyles from "../../../../common/scss-blocks/Card/Tags.module.scss"
import Title from "../../../../common/Text/Title"
import SubTitle from "../../../../common/Text/SubTitle"
import { FcLikePlaceholder } from "react-icons/fc"
import MetaTag from "../../../../common/Card/Tags/MetaTag"


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
              <Tags link={true}>
                <MetaTag date={props.date} category={props.category}/>
                <div className={tagStyles.like}>
                  <div className={tagStyles.iconLikeWrap}>
                    <FcLikePlaceholder className={tagStyles.iconLike}/>
                  </div>
                    <spna>&#124;</spna>
                    <spna className={tagStyles.counterLike}>12</spna>
                </div>
                <NavLink to ={"/article/" + props.id} className={tagStyles.nav}>
                    <span className={tagStyles.link}>читать</span>
                </NavLink>
              </Tags>
            </div>
            } 
          </div>  
      </Card>
    </div>
  )
}


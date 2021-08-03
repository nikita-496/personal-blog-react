import React from "react"
import Card from "../../../../common/Card/Card"
import Tags from "../../../../common/Card/Tags/Tags"
import SubTitle from "../../../../common/Description/SubTitle"
import Title from "../../../../common/Description/Title"
import Logo from "../../../../common/Logo/Logo"
import styles from "../../../../scss-blocks/TextPage/TextPage.module.scss"
import tagStyle from "../../../../common/scss-blocks/Card/Tags.module.scss"
import Comments from "./Comments/Comments"
import Reference from "./Reference/Reference"
import share from "../../../../img/text-page/share.svg"


export default function Article (props) {
  return(
    <Card>
       <div className={styles.content}>
         <Tags>
            <div className={tagStyle.tagsWrapperArticle}>
              <a href="/" className={tagStyle.action}> вернуться назад</a>
              <a href="/" className={tagStyle.action}> поделиться <img src={share} alt="share"/></a>
           </div>
         </Tags>
         <Title titleArticle={props.title}/>
         <Tags>
            <div className={tagStyle.tagsWrapperPosts}>
              <div className={tagStyle.tags}>
                <time className={tagStyle.date}>{props.date}</time>
                <span className={tagStyle.caregoty}>{props.tag}</span>
              </div>
              <span className={tagStyle.link}>{props.nameLink}</span>
            </div>
          </Tags>
         <SubTitle text={props.text}/>
         <Logo src={props.src} />
       </div>
       <Reference />
      <Comments />
    </Card>
    
  )
}
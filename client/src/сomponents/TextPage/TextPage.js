import React from "react"
import Card from "../../common/Card/Card"
import Tags from "../../common/Card/Tags/Tags"
import SubTitle from "../../common/Description/SubTitle"
import Title from "../../common/Description/Title"
import Logo from "../../common/Logo/Logo"
import styles from "../../scss-blocks/TextPage/TextPage.module.scss"
import tagStyle from "../../common/scss-blocks/Card/Tags.module.scss"
import Comments from "./Article/Comments/Comments"
import Reference from "./Article/Reference/Reference"
import share from "../../img/text-page/share.svg"

export default function TextPage ({article}) {
    debugger
   return(
     <article>
      <Card>
       <div className={styles.content}>
         <Tags>
            <div className={tagStyle.tagsWrapperArticle}>
              <a href="/all" className={tagStyle.action}> вернуться назад</a>
              <a href="/" className={tagStyle.action}> поделиться <img src={share} alt="share"/></a>
           </div>
         </Tags>
         <Title titleArticle={article.title}/>
         <Tags>
            <div className={tagStyle.tagsWrapperPosts}>
              <div className={tagStyle.tags}>
                <time className={tagStyle.date}>{article.publicDate}</time>
                <span className={tagStyle.caregoty}>{article.category}</span>
              </div>
            </div>
          </Tags>
         <SubTitle text={article.paragraph}/>
         <Logo/>
       </div>
       <Reference />
      <Comments />
    </Card>
     </article>
   )
  } 

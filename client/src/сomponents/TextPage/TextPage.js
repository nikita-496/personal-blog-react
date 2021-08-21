import React from "react"
import Card from "../../common/Card/Card"
import Tags from "../../common/Card/Tags/Tags"
import SubTitle from "../../common/Description/SubTitle"
import Title from "../../common/Description/Title"
import Logo from "../../common/Logo/Logo"
import styles from "../../scss-blocks/TextPage/TextPage.module.scss"
import stylesTag from "../../common/scss-blocks/Card/Tags.module.scss"
import Comments from "./Article/Comments/Comments"
import Reference from "./Article/Reference/Reference"
import share from "../../img/text-page/share.svg"

export default function TextPage (props) {
   return(
     <article>
      <Card>
       <div className={styles.content}>
         <Tags header={true}>
          <div className={styles.tagsHeader}>
            <a href="/all" className={styles.action}> вернуться назад </a>
            <a href="/" className={styles.actionShare}> поделиться <img src={share} alt="share"/></a>
          </div>
         </Tags>

         <Title titleArticle={props.article.title}/>
         <Tags articleData = {true}>
          <div className={stylesTag.tags}>
            <time className={stylesTag.date}>{props.article.publicDate}</time>
            <span className={stylesTag.category}>{props.article.category}</span>
          </div>
        </Tags>

         <SubTitle text={props.article.description}/>
         <SubTitle text={props.article.text}/>
         <Logo/>
       </div>
       
       <Reference />
      <Comments commentText={props.article.commentText} newComment={props.newComment} updateComments={props.updateComments} 
      createComment={props.getArticleById} id={props.article._id}/>
    </Card>
     </article>
   )
  } 

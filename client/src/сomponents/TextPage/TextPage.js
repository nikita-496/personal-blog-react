import React, { useEffect, useState } from "react"
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
import useFetching from "../../hooks/useFetching"
import Preloader from "../../common/Preoloader/Preloader"

export default function TextPage (props) {
  const [comment, setComment] = useState("")

  const [fetchComments, isComLoading, comError] = useFetching( async (id) => {
      await props.getArticleById(id)
  })

  useEffect(()=> fetchComments(props.id),[comment])
 
    const changeState = (comment) => {
      setComment (comment)
    }
   return(
     <>
     { (isComLoading) ? <Preloader></Preloader> 
      : <article>
      <Card>
       <div className={styles.content}>
         <Tags header={true}>
          <div className={styles.tagsHeader}>
            <a href="/all" className={styles.action}> вернуться назад </a>
            <a href="/" className={styles.actionShare}> поделиться <img src={share} alt="share"/></a>
          </div>
         </Tags>

         <Title titleArticle={props.articles.article.title}/>
         <Tags articleData = {true}>
          <div className={stylesTag.tags}>
            <time className={stylesTag.date}>{props.articles.article.publicDate}</time>
            <span className={stylesTag.category}>{props.articles.article.category}</span>
          </div>
        </Tags>

         <SubTitle text={props.articles.article.description}/>
         <SubTitle text={props.articles.article.text}/>
         <Logo/>
       </div>
       
       <Reference />
      <Comments commentText={props.comments.newCommentText} 
      updateComments={props.updateText} create={props.createComment} 
      commentData={props.articles.article.comment} comments={props.comments.comment} 
      id={props.articles.article._id} change={changeState}/>
    </Card>
     </article>
     }
     </>
   )
  } 

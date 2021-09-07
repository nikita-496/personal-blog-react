import React, {useEffect, useState } from "react"
import Card from "../../common/Card/Card"
import Tags from "../../common/Card/Tags/Tags"
import SubTitle from "../../common/Text/SubTitle"
import Title from "../../common/Text/Title"
import Logo from "../../common/Logo/Logo"
import styles from "../../scss-blocks/TextPage/TextPage.module.scss"
import stylesTag from "../../common/scss-blocks/Card/Tags.module.scss"
import Comments from "./Article/Comments/Comments"
import Reference from "./Article/Reference/Reference"
import share from "../../img/text-page/share.svg"
import useFetching from "../../hooks/useFetching"
import Preloader from "../../common/Preoloader/Preloader"
import withButton from "../../hoc/withButton"
import { NavLink } from "react-router-dom"


function TextPage (props) { 

  const [comment, setComment] = useState("")
  const [fetchComments, isComLoading, comError] = useFetching( async (id) => {
      await props.getArticleById(id)
  })
  useEffect(()=> fetchComments(props.id),[comment])
  
    function changeState (comment) {
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
            <NavLink to={"/all"} className={styles.action}> вернуться назад </NavLink>
            <a href="/" className={styles.actionShare}> поделиться <img src={share} alt="share"/></a>
          </div>
         </Tags>

         <Title titleArticle={true}>{props.articles.article.title}</Title>
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
      <Comments commentData={props.articles.article.comment} 
          createComment={props.createComment} changeState={changeState} id={props.id}
          value={props.comments.newCommentText} callback= {props.updateText} 
          isButton={props.isButton} comment={comment}
      />
    </Card>
     </article>
     }
     </>
   )
  } 

  export default withButton(TextPage)

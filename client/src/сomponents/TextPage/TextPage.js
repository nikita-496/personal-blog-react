import React, {useEffect, useState } from "react"
import Card from "../../common/Card/Card"
import Tags from "../../common/Card/Tags/Tags"
import SubTitle from "../../common/Text/SubTitle"
import Title from "../../common/Text/Title"
import Logo from "../../common/Logo/Logo"
import textPageStyles from "../../scss-blocks/TextPage/TextPage.module.scss"
import Comments from "./Article/Comments/Comments"
import Reference from "./Article/Reference/Reference"
import { FiShare2 } from "react-icons/fi"
import useFetching from "../../hooks/useFetching"
import Preloader from "../../common/Preoloader/Preloader"
import withButton from "../../hoc/withButton"
import { NavLink } from "react-router-dom"
import MetaTag from "../../common/Card/Tags/MetaTag"


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
       <section className={textPageStyles.content}>
         <Tags header={true}>
          <div className={textPageStyles.tagsHeader}>
            <NavLink to={"/all"} className={textPageStyles.action}> вернуться назад </NavLink>
            <a href="/" className={textPageStyles.actionShare}> поделиться 
              <div className={textPageStyles.iconShare}>
                <FiShare2/> 
              </div>
            </a>
          </div>
         </Tags>

         <Title titleArticle={true}>{props.articles.article.title}</Title>
         <Tags articleData = {true}>
           <MetaTag date={props.articles.article.publicDate} 
           category={props.articles.article.category}
           />
        </Tags>
        <Logo/>

         <SubTitle description={props.articles.article.description}/>
         <SubTitle text={props.articles.article.text}/>
         <Reference />
         <Comments commentData={props.articles.article.comment} 
          createComment={props.createComment} changeState={changeState} id={props.id}
          value={props.comments.newCommentText} callback= {props.updateText} 
          isButton={props.isButton} comment={comment}
         />
       </section>
    </Card>
     </article>
     }
     </>
   )
  } 

  export default withButton(TextPage)

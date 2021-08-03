import React from "react"
import { NavLink } from "react-router-dom"
import Article from "./Articles/Article/Article"


export default function TextPage (props) {
   props.getArticleThunk()
   let arcticleElement = props.article.map(a => 
    <NavLink to={`${a._id}`}>
       <Article 
        key = {a._id}
        title = {a.title} 
        text = {a.paragraph} 
        date = {a.publicDate} 
        tag = {a.category} 
        src = {a.img}
     />
    </NavLink>
   )
  
   return(
     <article>
             {arcticleElement}
     </article>
   )
  } 

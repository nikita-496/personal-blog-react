import * as axios from "axios"
import React from "react"
import Article from "./Article/Article"


export default function Articles (props) {
    let getArticles = () => {
      axios.get("/articles").then(response => {
        let articles = response.data
        console.log(articles)
      })
    } 
    


   let arcticleElement = props.arcticle.map(a => <Article titleArticle={a.title} date={a.publicDate} tagsName={a.category} text={a.paragraph} src={a.img}/>)

   return(
     <article>
             <button onClick={getArticles}>Get Articles</button>
             {arcticleElement}
     </article>
   )
  } 
 



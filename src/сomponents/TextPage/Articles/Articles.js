import React from "react"
import Article from "./Article/Article"

export default function Articles (props) {
  let arcticleElement = props.text.arcticle.map(a => <Article titleArticle={a.title} date={a.publicDate} tagsName={a.category} text={a.paragraph} src={a.img}/>)
  return(
    <article>
            {arcticleElement}
    </article>
  )
}
 
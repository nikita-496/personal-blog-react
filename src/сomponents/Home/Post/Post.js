import React from "react"
import Card from "../../../common/Card/Card"
import Tags from "../../../common/Card/Tags/Tags"
import Description from "../../../common/Description/Description"
import Logo from "../../../common/Logo/Logo"
import src from "../../../img/post/Conference.jpg"
import styles from "../../../scss-blocks/Home/Post/Post.module.scss"


export default function Post () {
  let posts = [
    {id: 1, title: "Как я сходил на FrontEnd Conf 2021", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat."}
  ]

  let postsElement = posts.map(p => <Description  titleArticle={p.title} text={p.text} key={p.id}/>)

  let images = [
    {id: 1, img: src}
  ]

  let imagesElement = images.map(i=> <Logo src={i.img} key={i.id}/>)

  let tags = [
    {id: 1, publicDate: "1.07.2021", category: "создание сайтов", link: "читать"}
  ]

  let tagsElement = tags.map(t => <Tags date={t.publicDate} tagsName={t.category} nameLink={t.link} key={t.id}/>)

  return(
    <div className={styles.wrapper}>
      <Card>
      {imagesElement}
      <div className={styles.content}>
        {postsElement}
        {tagsElement}
      </div>
      </Card> 
    </div>
  )
}


/**
 <CardPost 
        src={posts[0].img} 
        nameLink={posts[0].link}
        titleArticle={posts[0].title}
        text={posts[0].text}
        category={tags[0].category}
        />
*/
import React from "react"
import Card from "../../../common/Card/Card"
import Tags from "../../../common/Card/Tags/Tags"
import Description from "../../../common/Description/Description"
import Logo from "../../../common/Logo/Logo"
import src from "../../../img/post/Conference.jpg"
import styles from "../../../scss-blocks/Home/Post/Post.module.scss"


export default function Post () {
  return(
    <div className={styles.wrapper}>
     <Card>
        <Logo src={src}/>
        <div className={styles.content}>
          <Description className={styles.text} 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat."
          titleArticle="Как я сходил на FrontEnd Conf 2021"
          />
          <Tags tagsName="создание сайтов">
              <a href="/" className={styles.link}>читать</a>
          </Tags>
        </div>
      </Card>
    </div>
  )
}
/*
<SubTitle className={styles.text} text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum volutpat orci turpis urna. Et vestibulum, posuere tortor lacinia sit. Sagittis porttitor orci auctor in at tincidunt arcu egestas. Fusce arcu sodales lacinia eu auctor nunc nam id. Diam sit sed volutpat massa. Egestas ornare vel volutpat."/>
*/

